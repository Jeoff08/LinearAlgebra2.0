import React, { useEffect, useState, useMemo } from "react";
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
  X,
  BookOpen,
  Hash,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import {
  GRADING_PERIODS,
  type GradingPeriod,
  type SubjectGradingRecord,
} from "../../types/grading";
import {
  computeStudentGrade,
  computeCumulativeGrades,
  formatSermsValue,
} from "../../utils/gradingEngine";
import type { CumulativeGradeResult } from "../../utils/gradingEngine";
import {
  formatGradeEquivalent,
  getGradeRemarks,
  lookupGradeEquivalent,
} from "../../data/gradeEquivalentTable";
import { GraduationCap, Award, Sparkles } from "lucide-react";

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
  const [showPhotoPreviewModal, setShowPhotoPreviewModal] = useState(false);
  const [savedChangeType, setSavedChangeType] = useState<
    "name" | "photo" | "both"
  >("name");

  // Resolved enrolled subject and subject code for this student
  const enrolledSubjectInfo = useMemo(() => {
    // Map of known subject codes to subject names and default offer numbers
    const SUBJECT_MAP: Record<string, { name: string; defaultOffer: string }> = {
      "MATH 101": { name: "Calculus with Analytic Geometry", defaultOffer: "80062" },
      "MATH 102": { name: "Integral Calculus", defaultOffer: "80063" },
      "MATH 103": { name: "Linear Algebra", defaultOffer: "80132" },
      "GEC 4": { name: "Mathematics in the Modern World", defaultOffer: "50371" },
    };

    // 1. Direct from user profile if available
    const rawCode = (user?.subject_code || (user as any)?.subjectCode || "").trim();
    const rawOffer = (user?.offer_number || (user as any)?.offerNumber || "").trim();

    // 2. Check local grading records or defaults
    try {
      const rawGrading = localStorage.getItem("mathworkspace_grading_data");
      if (rawGrading) {
        const records = JSON.parse(rawGrading);
        if (Array.isArray(records)) {
          const currentStudentId = (user?.id_number || user?.student_id || "").trim().toLowerCase();
          const currentEmail = (user?.email || "").trim().toLowerCase();
          const currentName = (user?.name || "").trim().toLowerCase();
          const currentUserId = user?.id;

          for (const rec of records) {
            const student = rec.students?.find((s: any) => {
              const matchId = currentStudentId && s.studentId?.trim().toLowerCase() === currentStudentId;
              const matchInternalId = s.id === currentUserId;
              const matchEmail = currentEmail && s.email?.trim().toLowerCase() === currentEmail;
              const matchName = currentName && s.fullName?.trim().toLowerCase() === currentName;
              return matchId || matchInternalId || matchEmail || matchName;
            });

            if (student && rec.subject?.subjectCode) {
              const code = rec.subject.subjectCode.trim();
              const upperCode = code.toUpperCase();
              const known = SUBJECT_MAP[upperCode];
              const name = rec.subject.subjectName || known?.name || code;
              const offer = rec.subject.offerNumber || rawOffer || known?.defaultOffer || "";
              return {
                subjectCode: code,
                subjectName: name,
                offerNumber: offer,
              };
            }
          }
        }
      }
    } catch {}

    // 3. Fallback from raw user profile properties
    if (rawCode) {
      const upper = rawCode.toUpperCase();
      let normalizedCode = rawCode;
      if (upper.includes("101")) normalizedCode = "MATH 101";
      else if (upper.includes("102")) normalizedCode = "MATH 102";
      else if (upper.includes("103")) normalizedCode = "MATH 103";
      else if (upper.includes("GEC") || upper.includes("4")) normalizedCode = "GEC 4";

      const known = SUBJECT_MAP[normalizedCode.toUpperCase()];
      const subjectName = known?.name || normalizedCode;
      const offerNumber = rawOffer || known?.defaultOffer || "";
      return {
        subjectCode: normalizedCode,
        subjectName,
        offerNumber,
      };
    }

    // 4. Known student name rule (Jeoff Montebon -> MATH 102)
    const name = (user?.name || "").toLowerCase();
    if (name.includes("jeoff") || name.includes("montebon")) {
      return {
        subjectCode: "MATH 102",
        subjectName: "Integral Calculus",
        offerNumber: rawOffer || "80063",
      };
    }

    // Default enrolled subject fallback
    return {
      subjectCode: "MATH 101",
      subjectName: "Calculus with Analytic Geometry",
      offerNumber: rawOffer || "80062",
    };
  }, [user]);

  // =========================================================================
  // Academic Grades: fetch grading records and compute per-period grades
  // =========================================================================
  const [cloudSubjects, setCloudSubjects] = useState<SubjectGradingRecord[]>([]);

  useEffect(() => {
    // Load grading data from localStorage
    try {
      const raw = localStorage.getItem("mathworkspace_grading_data");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setCloudSubjects(parsed as SubjectGradingRecord[]);
        }
      }
    } catch (err) {
      console.warn("Failed to load grading data:", err);
    }

    // Also try to sync from Supabase grading_records
    (async () => {
      try {
        if (!supabase) return;
        const { data, error } = await supabase
          .from("grading_records")
          .select("payload")
          .order("updated_at", { ascending: false });
        if (!error && data && data.length > 0) {
          const records: SubjectGradingRecord[] = data
            .map((row: any) => {
              try {
                return typeof row.payload === "string"
                  ? JSON.parse(row.payload)
                  : row.payload;
              } catch {
                return null;
              }
            })
            .filter(Boolean);
          if (records.length > 0) {
            setCloudSubjects(records);
          }
        }
      } catch {
        // Supabase fetch failed, use localStorage data
      }
    })();
  }, []);

  /**
   * Compute grade breakdowns per subject per period.
   * Only include periods where the student actually has score data entered.
   */
  const studentGradesBySubject = useMemo(() => {
    if (!user || cloudSubjects.length === 0) return [];

    const currentStudentId = (user?.id_number || user?.student_id || "").trim().toLowerCase();
    const currentEmail = (user?.email || "").trim().toLowerCase();
    const currentName = (user?.name || "").trim().toLowerCase();
    const currentUserId = user?.id;

    return cloudSubjects
      .filter((rec) => {
        // Only show subjects where grades are published
        if (!rec.subject?.gradesPublished) return false;
        // Only show subjects where this student is enrolled
        return rec.students?.some((s) => {
          const matchId = currentStudentId && s.studentId?.trim().toLowerCase() === currentStudentId;
          const matchInternalId = s.id === currentUserId;
          const matchEmail = (s as any).email?.trim().toLowerCase() === currentEmail;
          const matchName = currentName && s.fullName?.trim().toLowerCase() === currentName;
          return matchId || matchInternalId || matchEmail || matchName;
        });
      })
      .map((rec) => {
        // Find this student's record
        const student = rec.students.find((s) => {
          const matchId = currentStudentId && s.studentId?.trim().toLowerCase() === currentStudentId;
          const matchInternalId = s.id === currentUserId;
          const matchEmail = (s as any).email?.trim().toLowerCase() === currentEmail;
          const matchName = currentName && s.fullName?.trim().toLowerCase() === currentName;
          return matchId || matchInternalId || matchEmail || matchName;
        });

        if (!student) return null;

        // Compute grades for each period, filtering to only periods that are published AND have actual data
        const publishedTermsList = rec.subject?.publishedTerms && rec.subject.publishedTerms.length > 0
          ? rec.subject.publishedTerms
          : ["prelim", "midterm", "semi-final", "final"];

        const periodBreakdowns = GRADING_PERIODS.map(({ key, label }) => {
          // If this term is not selected by admin to be published, do not show it to the student
          if (!publishedTermsList.includes(key)) {
            return { key, label, hasData: false, computation: null };
          }

          const periodData = rec.periods[key];
          if (!periodData) return { key, label, hasData: false, computation: null };

          const computation = computeStudentGrade(periodData, student.id);

          // Check if this period actually has score data entered for this student
          const studentScores = periodData.scores.filter(
            (sc) => sc.studentId === student.id
          );
          const hasScoreValues = studentScores.some(
            (sc) => sc.score !== null && sc.score !== undefined
          );
          const hasQuizOverride =
            periodData.totalQuizOverrides?.[student.id] !== undefined;
          const hasPartOverride =
            periodData.totalParticipationOverrides?.[student.id] !== undefined;
          const hasRecordedData = hasScoreValues || hasQuizOverride || hasPartOverride;

          return {
            key,
            label,
            hasData: hasRecordedData,
            computation: hasRecordedData ? computation : null,
          };
        });

        // Only include periods that actually have data
        const gradedPeriods = periodBreakdowns.filter((p) => p.hasData);

        // Compute overall final grade & GPA equivalent once all 4 terms or available terms are graded
        let finalGradeAverage: number | null = null;
        let gpaEquivalent: number | null = null;
        const validComputations = gradedPeriods
          .map((p) => p.computation)
          .filter(Boolean);

        if (validComputations.length > 0) {
          const sumRounded = validComputations.reduce(
            (acc, curr) => acc + (curr?.roundedGrade ?? 0),
            0
          );
          finalGradeAverage = Math.round(sumRounded / validComputations.length);
          gpaEquivalent = lookupGradeEquivalent(finalGradeAverage);
        }

        const isFullyCompleted = gradedPeriods.length === GRADING_PERIODS.length;

        // ============================================================
        // SERMS Cumulative Grade Computation
        // ============================================================
        // PRELIM = Prelim period grade equivalent
        // QG2    = Midterm period grade equivalent
        // MIDTERM = (PRELIM + QG2) / 2
        // QG3    = Semi-Final period grade equivalent
        // SEMI-FINAL = (MIDTERM + QG3) / 2
        // QG4    = Final period grade equivalent
        // FINAL  = (SEMI-FINAL + QG4) / 2
        // FINAL GRADE = FINAL

        const getSermsRawForPeriod = (periodKey: GradingPeriod): number | null => {
          const periodData = rec.periods[periodKey];
          if (!periodData) return null;
          const comp = computeStudentGrade(periodData, student.id);
          const scores = periodData.scores.filter((sc) => sc.studentId === student.id);
          const hasData = scores.some((sc) => sc.score !== null && sc.score !== undefined) ||
            periodData.totalQuizOverrides?.[student.id] !== undefined ||
            periodData.totalParticipationOverrides?.[student.id] !== undefined;
          if (hasData && comp.gradeEquivalent != null) {
            const val = Number(comp.gradeEquivalent);
            return Number.isFinite(val) ? val : null;
          }
          return null;
        };

        const sermsPrelim = getSermsRawForPeriod("prelim");
        const sermsQg2 = getSermsRawForPeriod("midterm");
        const sermsQg3 = getSermsRawForPeriod("semi-final");
        const sermsQg4 = getSermsRawForPeriod("final");

        const sermsCumulative = computeCumulativeGrades(sermsPrelim, sermsQg2, sermsQg3, sermsQg4);

        // Use SERMS cumulative as the official final grade when available
        const sermsGpaEquivalent: number | null =
          sermsCumulative.finalGrade !== null
            ? sermsCumulative.finalGrade
            : sermsCumulative.runningGrade !== null
            ? sermsCumulative.runningGrade
            : null;

        return {
          subject: rec.subject,
          studentName: student.fullName,
          gradedPeriods,
          finalGradeAverage,
          gpaEquivalent,
          isFullyCompleted,
          sermsCumulative,
          sermsGpaEquivalent,
        };
      })
      .filter(Boolean);
  }, [user, cloudSubjects]);

  useEffect(() => {
    if (!showPhotoPreviewModal) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPhotoPreviewModal(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showPhotoPreviewModal]);

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
            <div className="relative">
              <button
                type="button"
                onClick={() => profileAvatarUrl && setShowPhotoPreviewModal(true)}
                disabled={!profileAvatarUrl}
                className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-sm bg-gray-50 dark:bg-slate-800 flex items-center justify-center ${
                  profileAvatarUrl
                    ? "cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#166534]/50"
                    : "cursor-default"
                }`}
                aria-label={
                  profileAvatarUrl
                    ? "View profile photo"
                    : "Profile photo placeholder"
                }
                title={profileAvatarUrl ? "View profile photo" : undefined}
              >
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
              </button>
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

          {/* Academic Enrollment, Role & Block Info Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#F9FAFB] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700">
            {/* Enrolled Subject & Subject Code */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase font-bold text-gray-400">
                  Enrolled Subject
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-black tracking-wide bg-[#166534] text-white shrink-0">
                    {enrolledSubjectInfo.subjectCode}
                  </span>
                  {enrolledSubjectInfo.offerNumber && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 shrink-0">
                      #{enrolledSubjectInfo.offerNumber}
                    </span>
                  )}
                  <span className="text-xs font-bold text-gray-800 dark:text-slate-200 truncate" title={enrolledSubjectInfo.subjectName}>
                    {enrolledSubjectInfo.subjectName}
                  </span>
                </div>
              </div>
            </div>

            {/* Account Role */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
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

            {/* Assigned Block */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-green-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
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

      {/* Academic Grades Card — Only shows published subjects with graded periods */}
      {(studentGradesBySubject as any[]).length > 0 && (
        <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[26px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#1F242D] dark:text-slate-100 tracking-tight">
                Academic Grades
              </h3>
              <p className="text-[11px] text-gray-400 dark:text-slate-500">
                Your published grade breakdowns per term
              </p>
            </div>
          </div>

          {(studentGradesBySubject as any[]).map((entry: any, idx: number) => (
            <div key={entry.subject.id || idx} className="mb-6 last:mb-0">
              {/* Subject Header */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="px-2 py-0.5 rounded text-[10px] font-black tracking-wide bg-[#166534] text-white">
                  {entry.subject.subjectCode}
                </span>
                {entry.subject.offerNumber && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300">
                    #{entry.subject.offerNumber}
                  </span>
                )}
                <span className="text-sm font-bold text-gray-800 dark:text-slate-200">
                  {entry.subject.subjectName}
                </span>
              </div>

              {/* Period Grades Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {entry.gradedPeriods.map((period: any) => {
                  if (!period.computation) return null;
                  const comp = period.computation;
                  const equiv = comp.gradeEquivalent;
                  const remarks = getGradeRemarks(equiv);
                  const equivStr = formatGradeEquivalent(equiv);

                  return (
                    <motion.div
                      key={period.key}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border border-gray-100 dark:border-slate-700 bg-[#F9FAFB] dark:bg-slate-800/40 p-4 flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                          {period.label}
                        </span>
                        <Award className={`w-4 h-4 ${remarks.isPassing ? "text-emerald-500" : "text-gray-300 dark:text-slate-600"}`} />
                      </div>

                      <div className="flex items-end gap-1.5">
                        <span className={`text-2xl font-black leading-none ${remarks.color}`}>
                          {equivStr}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          remarks.isPassing
                            ? "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400"
                            : equiv !== null && equiv !== undefined
                              ? "bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400"
                              : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"
                        }`}>
                          {remarks.text}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* SERMS Cumulative Grade Progression */}
              {entry.sermsCumulative && (entry.sermsCumulative.prelim !== null || entry.sermsCumulative.midterm !== null) && (
                <div className="mt-3 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-slate-800/40 border border-gray-200/80 dark:border-slate-700/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400">
                      SERMS Cumulative Grade Progression
                    </span>
                    {entry.sermsCumulative.finalGrade !== null ? (
                      <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400">
                        Official Final Grade: {formatSermsValue(entry.sermsCumulative.finalGrade)}
                      </span>
                    ) : entry.sermsCumulative.runningGrade !== null ? (
                      <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                        Running Cumulative: {formatSermsValue(entry.sermsCumulative.runningGrade)} (Partial)
                      </span>
                    ) : null}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
                    {/* Prelim Raw */}
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                      <span className="text-[9px] font-bold text-gray-400 uppercase block">PRELIM (Raw)</span>
                      <span className="text-sm font-black text-gray-800 dark:text-slate-100">
                        {formatSermsValue(entry.sermsCumulative.prelim)}
                      </span>
                    </div>
                    {/* QG2 Raw */}
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                      <span className="text-[9px] font-bold text-gray-400 uppercase block">QG2 (Raw)</span>
                      <span className="text-sm font-black text-gray-800 dark:text-slate-100">
                        {formatSermsValue(entry.sermsCumulative.qg2)}
                      </span>
                    </div>
                    {/* Midterm Cumulative */}
                    <div className="p-2 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40">
                      <span className="text-[9px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase block">MIDTERM</span>
                      <span className="text-sm font-black text-emerald-800 dark:text-emerald-300">
                        {formatSermsValue(entry.sermsCumulative.midterm)}
                      </span>
                    </div>
                    {/* QG3 Raw */}
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                      <span className="text-[9px] font-bold text-gray-400 uppercase block">QG3 (Raw)</span>
                      <span className="text-sm font-black text-gray-800 dark:text-slate-100">
                        {formatSermsValue(entry.sermsCumulative.qg3)}
                      </span>
                    </div>
                    {/* Semi-Final Cumulative */}
                    <div className="p-2 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40">
                      <span className="text-[9px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase block">SEMI-FINAL</span>
                      <span className="text-sm font-black text-emerald-800 dark:text-emerald-300">
                        {formatSermsValue(entry.sermsCumulative.semiFinal)}
                      </span>
                    </div>
                    {/* QG4 Raw */}
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                      <span className="text-[9px] font-bold text-gray-400 uppercase block">QG4 (Raw)</span>
                      <span className="text-sm font-black text-gray-800 dark:text-slate-100">
                        {formatSermsValue(entry.sermsCumulative.qg4)}
                      </span>
                    </div>
                    {/* Final Grade */}
                    <div className="p-2 rounded-xl bg-emerald-600 text-white col-span-2 sm:col-span-1 shadow-xs">
                      <span className="text-[9px] font-extrabold text-emerald-200 uppercase block">FINAL GRADE</span>
                      <span className="text-sm font-black text-white">
                        {formatSermsValue(entry.sermsCumulative.finalGrade ?? entry.sermsCumulative.runningGrade)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Final Grade / GPA Summary Banner */}
              {entry.gpaEquivalent !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3.5 p-4 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 bg-gradient-to-r from-emerald-50/90 via-[#166534]/5 to-transparent dark:from-emerald-950/40 dark:via-emerald-900/20 dark:to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center font-black shadow-sm shrink-0">
                      <Sparkles className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-[#166534] dark:text-emerald-400">
                          {entry.isFullyCompleted ? "Final Grade & GPA" : "Current Subject GPA"}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300">
                          {entry.gradedPeriods.length} of {GRADING_PERIODS.length} terms computed
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">
                        {entry.isFullyCompleted
                          ? "Official final semestral grade computed across Prelim, Midterm, Semi-Final, and Final terms."
                          : "Running weighted GPA computed across currently published terms."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-center shrink-0">
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider block">
                        Final GPA
                      </span>
                      <span className={`text-2xl font-black leading-none ${getGradeRemarks(entry.gpaEquivalent).color}`}>
                        {formatGradeEquivalent(entry.gpaEquivalent)}
                      </span>
                    </div>

                    <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl shadow-xs ${
                      getGradeRemarks(entry.gpaEquivalent).isPassing
                        ? "bg-emerald-600 text-white"
                        : "bg-rose-600 text-white"
                    }`}>
                      {getGradeRemarks(entry.gpaEquivalent).text}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      )}

            {/* Profile Photo Preview Modal */}
      <AnimatePresence>
        {showPhotoPreviewModal && profileAvatarUrl && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Profile photo preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowPhotoPreviewModal(false);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-[min(90vw,640px)] max-h-[85vh]"
            >
              <img
                src={profileAvatarUrl}
                alt="Profile photo preview"
                className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setShowPhotoPreviewModal(false)}
                className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                aria-label="Close profile photo preview"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
