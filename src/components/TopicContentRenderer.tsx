import React, { useState } from "react";
import { FileText, ZoomIn, X, Image as ImageIcon } from "lucide-react";

export interface ContentSegment {
  type: "text" | "image";
  value: string;
  alt?: string;
  size?: TopicImageSize;
}

/**
 * Regular expression to match various ways an image can be declared in topic details:
 * 1) "image": "/images/cbum.jpg", or {"image": "...", "size": "sm"} or 'image': '...'
 * 2) ![alt text](/images/cbum.jpg)
 * 3) <img src="/images/cbum.jpg" alt="..." />
 * 4) [image: /images/cbum.jpg]
 */
export const TOPIC_IMAGE_REGEX = /(?:\{?\s*["']?image["']?\s*:\s*["']([^"'\r\n]+)["'](?:\s*,\s*["']?size["']?\s*:\s*["'](sm|md|lg|xl|full)["'])?\s*,?\s*\}?|!\[([^\]]*)\]\(([^)]+)\)|<img\s+[^>]*src=["']([^"']+)["'][^>]*\/?>|\[image:\s*([^\s\]]+)\])/gi;

/**
 * Extracts the first image URL declared in a text if any exists.
 */
export function extractFirstImage(text: string | undefined): string | null {
  if (!text) return null;
  const regex = new RegExp(TOPIC_IMAGE_REGEX.source, "i");
  const match = regex.exec(text);
  if (!match) return null;
  return (match[1] || match[4] || match[5] || match[6] || "").trim() || null;
}

/**
 * Parses raw text into segments of text and images.
 */
export function parseContentWithImages(rawContent: string): ContentSegment[] {
  if (!rawContent) return [];

  const segments: ContentSegment[] = [];
  let lastIndex = 0;
  const regex = new RegExp(TOPIC_IMAGE_REGEX.source, "gi");
  let match: RegExpExecArray | null;

  while ((match = regex.exec(rawContent)) !== null) {
    if (match.index > lastIndex) {
      const text = rawContent.substring(lastIndex, match.index);
      if (text) {
        segments.push({ type: "text", value: text });
      }
    }

    let url = "";
    let alt = "";
    let size: TopicImageSize | undefined = undefined;

    if (match[1]) {
      // "image": "/images/cbum.jpg"
      url = match[1].trim();
      if (match[2]) {
        size = match[2].toLowerCase() as TopicImageSize;
      }
    } else if (match[4]) {
      // ![alt](url)
      alt = (match[3] || "").trim();
      url = match[4].trim();
    } else if (match[5]) {
      // <img src="url" />
      url = match[5].trim();
    } else if (match[6]) {
      // [image: url]
      url = match[6].trim();
    }

    if (url) {
      // Support size parameter in URL: e.g. "foo.png?size=sm" or "foo.png|sm"
      if (url.includes("|")) {
        const parts = url.split("|");
        url = parts[0].trim();
        const s = parts[1].trim().toLowerCase();
        if (s in TOPIC_SIZE_CONFIG) {
          size = s as TopicImageSize;
        }
      } else if (url.includes("?size=")) {
        const parts = url.split("?size=");
        url = parts[0].trim();
        const s = parts[1].trim().toLowerCase();
        if (s in TOPIC_SIZE_CONFIG) {
          size = s as TopicImageSize;
        }
      }

      // Normalize relative path if needed: e.g. "images/foo.jpg" -> "/images/foo.jpg"
      if (!url.startsWith("/") && !url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("data:")) {
        url = "/" + url;
      }
      segments.push({
        type: "image",
        value: url,
        alt: alt || "Topic Diagram",
        size,
      });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < rawContent.length) {
    const text = rawContent.substring(lastIndex);
    if (text) {
      segments.push({ type: "text", value: text });
    }
  }

  return segments;
}

export const TOPIC_SIZE_CONFIG = {
  sm: { container: "max-w-sm", height: "max-h-[200px]" },
  md: { container: "max-w-md", height: "max-h-[270px]" },
  lg: { container: "max-w-lg", height: "max-h-[340px]" },
  xl: { container: "max-w-xl", height: "max-h-[400px]" },
  full: { container: "max-w-2xl", height: "max-h-[440px]" },
} as const;

export type TopicImageSize = keyof typeof TOPIC_SIZE_CONFIG;

export function TopicImage({
  src,
  alt = "Topic Diagram",
  isDark = false,
  size = "md",
}: {
  src: string;
  alt?: string;
  isDark?: boolean;
  size?: TopicImageSize;
}) {
  const [loadError, setLoadError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const sizeCfg = TOPIC_SIZE_CONFIG[size] || TOPIC_SIZE_CONFIG.md;

  return (
    <>
      <figure className="my-5 flex flex-col items-center justify-center w-full not-prose select-none">
        <div
          className={`group relative w-full ${sizeCfg.container} overflow-hidden rounded-2xl border transition-all duration-200 shadow-sm hover:shadow-md ${
            isDark
              ? "border-white/20 bg-[#0F172A] hover:border-white/40"
              : "border-[#FFD0D8] bg-white hover:border-[#7B1824]/50"
          }`}
        >
          {loadError ? (
            <div
              className={`p-5 sm:p-6 text-center flex flex-col items-center justify-center space-y-3 ${
                isDark ? "bg-white/5" : "bg-[#FFF8F9]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs ${
                  isDark
                    ? "bg-white/10 text-white/80"
                    : "bg-[#FFE2E6] text-[#7B1824]"
                }`}
              >
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p
                  className={`text-sm font-bold ${
                    isDark ? "text-white" : "text-[#7B1824]"
                  }`}
                >
                  Topic Diagram: {alt}
                </p>
                <p
                  className={`text-xs font-mono px-2 py-0.5 rounded inline-block ${
                    isDark
                      ? "bg-black/50 text-gray-300"
                      : "bg-[#7B1824]/5 text-[#7B1824] border border-[#7B1824]/20"
                  }`}
                >
                  {src}
                </p>
              </div>
              <p
                className={`text-xs max-w-md ${
                  isDark ? "text-gray-400" : "text-[#6B7280]"
                }`}
              >
                Image not found. Place your image file at{" "}
                <code className="font-mono font-bold">
                  public{src.startsWith("/") ? "" : "/"}
                  {src}
                </code>{" "}
                to display it here.
              </p>
            </div>
          ) : (
            <div
              className="relative p-2 sm:p-3 bg-white flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => setIsZoomed(true)}
              title="Click to zoom image"
            >
              <img
                src={src}
                alt={alt}
                onError={() => setLoadError(true)}
                className={`w-full h-auto ${sizeCfg.height} object-contain rounded-xl mx-auto transition-transform duration-300 group-hover:scale-[1.01]`}
                loading="lazy"
              />
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs text-white p-1.5 rounded-lg shadow-md hover:bg-black/80">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </div>
        {alt && alt !== "Topic Diagram" && !loadError && (
          <figcaption
            className={`text-xs mt-2 font-medium tracking-wide ${
              isDark ? "text-gray-400" : "text-[#6B7280]"
            }`}
          >
            {alt}
          </figcaption>
        )}
      </figure>

      {/* Zoom Lightbox Modal */}
      {isZoomed && !loadError && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl p-3 shadow-2xl overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all shadow-md cursor-pointer"
              title="Close image view"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={src}
              alt={alt}
              className="w-auto h-auto max-h-[82vh] max-w-full object-contain rounded-xl mx-auto"
            />
            {alt && alt !== "Topic Diagram" && (
              <p className="text-center text-xs text-gray-500 font-medium mt-2">{alt}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function renderFormattedText(text: string, isDark: boolean) {
  const lines = text.split("\n");

  return lines.map((line, idx) => {
    // Check for numbered labels at the beginning of the line: e.g. "1. WHAT DOES...", "1. ", "2. The Cross-Sections..."
    const numMatch = line.match(/^(\s*)(\d+[\.\)])(\s+)(.*)$/);
    if (numMatch) {
      const [, indent, numLabel, space, rest] = numMatch;
      const isTitle =
        rest === rest.toUpperCase() ||
        (rest.length <= 80 && !rest.trim().endsWith("."));

      if (isTitle && rest.length > 0) {
        return (
          <React.Fragment key={idx}>
            {indent}
            <span className={`font-bold ${isDark ? "text-white" : "text-[#111827]"}`}>
              {numLabel}{space}{rest}
            </span>
            {idx < lines.length - 1 ? "\n" : ""}
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={idx}>
          {indent}
          <strong className={`font-bold ${isDark ? "text-white" : "text-[#111827]"}`}>
            {numLabel}
          </strong>
          {space}
          {rest}
          {idx < lines.length - 1 ? "\n" : ""}
        </React.Fragment>
      );
    }

    // Step 1:, Example 1:, Case 1:, Rule 1:, Method 1:, Part 1:
    const stepMatch = line.match(/^(\s*)(Step\s+\d+|Example\s+\d+|Case\s+\d+|Rule\s+\d+|Method\s+\d+|Part\s+\d+)(:?\s*)(.*)$/i);
    if (stepMatch) {
      const [, indent, label, colonSpace, rest] = stepMatch;
      const isTitle = rest.length <= 80 && !rest.trim().endsWith(".");

      if (isTitle && rest.length > 0) {
        return (
          <React.Fragment key={idx}>
            {indent}
            <span className={`font-bold ${isDark ? "text-white" : "text-[#111827]"}`}>
              {label}{colonSpace}{rest}
            </span>
            {idx < lines.length - 1 ? "\n" : ""}
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={idx}>
          {indent}
          <strong className={`font-bold ${isDark ? "text-white" : "text-[#111827]"}`}>
            {label}{colonSpace}
          </strong>
          {rest}
          {idx < lines.length - 1 ? "\n" : ""}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={idx}>
        {line}
        {idx < lines.length - 1 ? "\n" : ""}
      </React.Fragment>
    );
  });
}

/**
 * Main component that parses string content and renders text with embedded images.
 */
export default function TopicContentRenderer({
  content,
  isDark = false,
  className = "",
  defaultImageSize = "md",
}: {
  content: string;
  isDark?: boolean;
  className?: string;
  defaultImageSize?: TopicImageSize;
}) {
  if (!content) return null;

  const segments = parseContentWithImages(content);

  return (
    <div className={className}>
      {segments.map((seg, idx) => {
        if (seg.type === "image") {
          return (
            <TopicImage
              key={`seg-img-${idx}-${seg.value}`}
              src={seg.value}
              alt={seg.alt}
              size={seg.size || defaultImageSize}
              isDark={isDark}
            />
          );
        }

        return (
          <span
            key={`seg-txt-${idx}`}
            className="whitespace-pre-line"
          >
            {renderFormattedText(seg.value, isDark)}
          </span>
        );
      })}
    </div>
  );
}
