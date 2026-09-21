import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  User,
  Mail,
  Shield,
  Layers,
  Save,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

interface UserProfileViewProps {
  user: any;
  refreshUser: () => Promise<void>;
  onNavigate: (navKey: string) => void;
  userInitial: string;
}

export const UserProfileView: React.FC<UserProfileViewProps> = ({
  user,
  refreshUser,
  onNavigate,
  userInitial,
}) => {
  const [profileNameInput, setProfileNameInput] = useState<string>(
    user?.name || ""
  );
  const [profileAvatarUrl, setProfileAvatarUrl] = useState<string>(
    user?.avatar_url || ""
  );
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileSaveSuccessMsg, setProfileSaveSuccessMsg] = useState<
    string | null
  >(null);
  const [profileSaveErrorMsg, setProfileSaveErrorMsg] = useState<
    string | null
  >(null);
  const [showProfileConfirmModal, setShowProfileConfirmModal] = useState(false);
  const [showProfileSuccessModal, setShowProfileSuccessModal] = useState(false);
  const [savedChangeType, setSavedChangeType] = useState<
    "name" | "photo" | "both"
  >("name");

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setProfileSaveErrorMsg(
        "Please select a valid image file (PNG, JPG, WEBP)."
      );
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setProfileSaveErrorMsg(
        "Image size exceeds 2MB limit. Please choose a smaller photo."
      );
      return;
    }

    setIsUploadingPhoto(true);
    setProfileSaveErrorMsg(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        // Compress image using HTML canvas to keep payload light
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxDim = 320;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxDim) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            }
          } else {
            if (height > maxDim) {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL("image/jpeg", 0.85);
            setProfileAvatarUrl(compressedBase64);
          } else {
            setProfileAvatarUrl(result);
          }
          setIsUploadingPhoto(false);
        };
        img.onerror = () => {
          setProfileAvatarUrl(result);
          setIsUploadingPhoto(false);
        };
        img.src = result;
      } else {
        setIsUploadingPhoto(false);
      }
    };
    reader.onerror = () => {
      setIsUploadingPhoto(false);
      setProfileSaveErrorMsg("Failed to read image file.");
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const trimmedName = profileNameInput.trim();
    if (!trimmedName) {
      setProfileSaveErrorMsg("Name cannot be empty.");
      return;
    }

    const isNameChanged = trimmedName !== (user.name || "").trim();
    const isPhotoChanged = profileAvatarUrl !== (user.avatar_url || "");

    if (isNameChanged && isPhotoChanged) {
      setSavedChangeType("both");
    } else if (isNameChanged) {
      setSavedChangeType("name");
    } else {
      setSavedChangeType("photo");
    }

    setProfileSaveErrorMsg(null);
    setShowProfileConfirmModal(true);
  };

  const executeSaveProfile = async () => {
    if (!user) return;
    setShowProfileConfirmModal(false);

    const trimmedName = profileNameInput.trim();
    if (!trimmedName) {
      setProfileSaveErrorMsg("Name cannot be empty.");
      return;
    }

    setIsSavingProfile(true);
    setProfileSaveErrorMsg(null);
    setProfileSaveSuccessMsg(null);

    try {
      if (supabase) {
        const { error } = await supabase
          .from("profiles")
          .update({
            name: trimmedName,
            avatar_url: profileAvatarUrl,
          })
          .eq("id", user.id);

        if (error) {
          console.error("Error updating profile in Supabase:", error);
          setProfileSaveErrorMsg(error.message || "Failed to update profile.");
          setIsSavingProfile(false);
          return;
        }
      }

      await refreshUser();

      if (savedChangeType === "name") {
        setProfileSaveSuccessMsg(
          `Name successfully updated to "${trimmedName}"!`
        );
      } else if (savedChangeType === "photo") {
        setProfileSaveSuccessMsg("Profile photo updated successfully!");
      } else {
        setProfileSaveSuccessMsg(
          "Profile photo and name updated successfully!"
        );
      }

      setShowProfileSuccessModal(true);
      setTimeout(() => {
        setProfileSaveSuccessMsg(null);
      }, 3500);
      setTimeout(() => {
        setShowProfileSuccessModal(false);
      }, 2800);
    } catch (err: any) {
      console.error("Profile save error:", err);
      setProfileSaveErrorMsg(err?.message || "An unexpected error occurred.");
    } finally {
      setIsSavingProfile(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
      {/* Profile Form Card */}
      <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[26px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <form onSubmit={handleSaveProfile} className="flex flex-col gap-6">
          {/* Photo Upload Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-gray-100 dark:border-slate-700/60">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-sm bg-gray-50 dark:bg-slate-800 flex items-center justify-center">
                {profileAvatarUrl ? (
                  <img
                    src={profileAvatarUrl}
                    alt="Profile Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#166534] text-white font-extrabold text-3xl flex items-center justify-center">
                    {userInitial}
                  </div>
                )}
              </div>

              {/* Photo Overlay / Upload Trigger */}
              <label
                htmlFor="avatar-upload-input"
                className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white cursor-pointer"
                title="Upload new photo"
              >
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-bold">Change</span>
              </label>
              <input
                id="avatar-upload-input"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start gap-2 flex-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-[#1F242D] dark:text-slate-100">
                Profile Photo
              </h3>
              <p className="text-xs text-[#8C93A0] dark:text-slate-400 max-w-sm">
                Upload a clear avatar photo (PNG, JPG, or WEBP, max 2MB). It
                will appear across the dashboard and in the Admin student list.
              </p>

              <div className="flex items-center gap-2 mt-2">
                <label
                  htmlFor="avatar-upload-input"
                  className="px-4 py-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>
                    {isUploadingPhoto ? "Processing..." : "Upload Photo"}
                  </span>
                </label>

                {profileAvatarUrl && (
                  <button
                    type="button"
                    onClick={() => setProfileAvatarUrl("")}
                    className="px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition cursor-pointer"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Feedback Messages */}
          {profileSaveSuccessMsg && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{profileSaveSuccessMsg}</span>
            </motion.div>
          )}

          {profileSaveErrorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-800 dark:text-rose-300 text-xs font-semibold flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{profileSaveErrorMsg}</span>
            </motion.div>
          )}

          {/* Name and Email Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B7280] dark:text-slate-400">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={profileNameInput}
                  onChange={(e) => setProfileNameInput(e.target.value)}
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E0E2E6] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-[#1F242D] dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#166534]/30 focus:border-[#166534] transition"
                />
              </div>
              <span className="text-[11px] text-gray-400 dark:text-slate-500">
                This name will be displayed in your greetings and the Admin
                student directory.
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B7280] dark:text-slate-400">
                Email Address (Gmail)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  disabled
                  value={user?.email || ""}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E0E2E6] dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-sm font-semibold text-gray-500 dark:text-slate-400 cursor-not-allowed"
                />
              </div>
              <span className="text-[11px] text-gray-400 dark:text-slate-500">
                Your registered login email address.
              </span>
            </div>
          </div>

          {/* Role & Block Info Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F9FAFB] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                <Shield className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400">
                  Account Role
                </span>
                <span className="text-xs font-bold text-gray-800 dark:text-slate-200 capitalize">
                  {user?.role || "Student"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-green-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                <Layers className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400">
                  Assigned Block
                </span>
                <span className="text-xs font-bold text-[#166534] dark:text-emerald-400">
                  {user?.block
                    ? `Block ${user.block.trim().toUpperCase()}`
                    : "No Block Assigned Yet"}
                </span>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => onNavigate("dashboard")}
              className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              Back to Dashboard
            </button>
            <button
              type="submit"
              disabled={isSavingProfile || isUploadingPhoto}
              className="px-6 py-2.5 bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] text-white text-xs font-bold rounded-xl shadow-md shadow-[#166534]/25 transition cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              {isSavingProfile ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving Changes...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showProfileConfirmModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full max-w-md bg-white dark:bg-[#161F30] rounded-[28px] p-6 sm:p-7 shadow-2xl border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-4 shadow-inner">
                {savedChangeType === "name" ? (
                  <User className="w-8 h-8 text-[#166534] dark:text-emerald-400" />
                ) : (
                  <Camera className="w-8 h-8 text-[#166534] dark:text-emerald-400" />
                )}
              </div>

              <h3 className="text-xl font-black text-[#1F242D] dark:text-slate-100 tracking-tight">
                {savedChangeType === "name"
                  ? "Change Display Name?"
                  : savedChangeType === "both"
                  ? "Update Name & Photo?"
                  : "Save Profile Changes?"}
              </h3>

              <p className="text-xs text-gray-500 dark:text-slate-400 mt-2 mb-6 leading-relaxed max-w-xs">
                {savedChangeType === "name" ? (
                  <>
                    Are you sure you want to change your name to{" "}
                    <span className="font-bold text-[#166534] dark:text-emerald-400">
                      "{profileNameInput.trim()}"
                    </span>
                    ? This new name will appear on your dashboard, greetings,
                    and student records.
                  </>
                ) : savedChangeType === "both" ? (
                  <>
                    Are you sure you want to change your name to{" "}
                    <span className="font-bold text-[#166534] dark:text-emerald-400">
                      "{profileNameInput.trim()}"
                    </span>{" "}
                    and update your profile photo?
                  </>
                ) : (
                  "Are you sure you want to update your profile photo? This photo will be visible across the app."
                )}
              </p>

              <div className="flex items-center gap-3 w-full">
                <button
                  type="button"
                  onClick={() => setShowProfileConfirmModal(false)}
                  className="flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={executeSaveProfile}
                  disabled={isSavingProfile}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] text-white text-xs font-bold shadow-md shadow-[#166534]/25 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isSavingProfile ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>
                      {savedChangeType === "name"
                        ? "Yes, Change Name"
                        : "Yes, Save"}
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showProfileSuccessModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full max-w-sm bg-white dark:bg-[#161F30] rounded-[28px] p-7 shadow-2xl border border-emerald-100 dark:border-emerald-800/40 flex flex-col items-center text-center relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 18,
                  delay: 0.1,
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-green-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4 z-10"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-black text-[#1F242D] dark:text-slate-100 tracking-tight z-10"
              >
                {savedChangeType === "name"
                  ? "Name Changed!"
                  : savedChangeType === "both"
                  ? "Profile & Name Updated!"
                  : "Profile Updated!"}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs text-gray-500 dark:text-slate-400 mt-1 mb-5 z-10 leading-relaxed"
              >
                {savedChangeType === "name" ? (
                  <>
                    Your name has been updated to{" "}
                    <span className="font-bold text-[#166534] dark:text-emerald-400">
                      "{profileNameInput.trim()}"
                    </span>
                    .
                  </>
                ) : savedChangeType === "both" ? (
                  <>
                    Your name has been updated to{" "}
                    <span className="font-bold text-[#166534] dark:text-emerald-400">
                      "{profileNameInput.trim()}"
                    </span>{" "}
                    and your new photo was saved.
                  </>
                ) : (
                  "Your profile photo has been successfully saved."
                )}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                type="button"
                onClick={() => setShowProfileSuccessModal(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm cursor-pointer z-10"
              >
                Done
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileView;
