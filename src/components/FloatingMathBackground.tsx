import { useEffect, useRef } from "react";

interface MathSymbol {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  rotation: number;
  vRot: number;
  color: string;
  font: string;
}

const SYMBOL_LIST = [
  "λ",
  "det(A)",
  "A⁻¹",
  "Ax = λx",
  "ℝⁿ",
  "⟨u, v⟩",
  "dim(V)",
  "ker(T)",
  "rank(A)",
  "Tr(A)",
  "∑",
  "∫",
  "∇",
  "θ",
  "σ",
  "μ",
  "π",
  "∞",
  "‖v‖",
  "proj_v(u)",
  "v × w",
  "Iₙ",
  "span{v}",
  "Aᵀ",
  "Null(A)",
  "Col(A)",
  "eⁱᶿ",
  "cos(θ)",
  "sin(θ)",
  "[aᵢⱼ]"
];

const COLORS = [
  "rgba(0, 210, 255, ",   // Electric Cyan
  "rgba(56, 189, 248, ",  // Sky Blue
  "rgba(96, 165, 250, ",  // Soft Blue
  "rgba(59, 130, 246, ",  // Sapphire Blue
  "rgba(255, 255, 255, ", // White
  "rgba(147, 197, 253, ", // Light Ice Blue
];

export default function FloatingMathBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const count = Math.max(25, Math.floor((width * height) / 32000));
    const symbols: MathSymbol[] = [];

    for (let i = 0; i < count; i++) {
      const baseOp = 0.12 + Math.random() * 0.28;
      symbols.push({
        text: SYMBOL_LIST[Math.floor(Math.random() * SYMBOL_LIST.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -0.2 - Math.random() * 0.4, // gently floating upwards and sideways
        size: 14 + Math.random() * 22,
        opacity: baseOp,
        baseOpacity: baseOp,
        pulseSpeed: 0.015 + Math.random() * 0.025,
        pulsePhase: Math.random() * Math.PI * 2,
        rotation: (Math.random() - 0.5) * 0.4,
        vRot: (Math.random() - 0.5) * 0.004,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        font: Math.random() > 0.5 ? "JetBrains Mono, monospace" : "Fraunces, serif"
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of symbols) {
        // Move live
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.vRot;
        s.pulsePhase += s.pulseSpeed;

        // Wrap around boundaries smoothly
        if (s.y < -40) {
          s.y = height + 30;
          s.x = Math.random() * width;
        } else if (s.y > height + 40) {
          s.y = -30;
          s.x = Math.random() * width;
        }

        if (s.x < -60) {
          s.x = width + 50;
        } else if (s.x > width + 60) {
          s.x = -50;
        }

        const currentOpacity =
          s.baseOpacity + Math.sin(s.pulsePhase) * (s.baseOpacity * 0.4);

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.font = `${s.size}px ${s.font}`;
        ctx.fillStyle = `${s.color}${Math.max(0.05, currentOpacity)})`;
        ctx.shadowColor = s.color.includes("182, 255, 46")
          ? "rgba(182, 255, 46, 0.4)"
          : "rgba(56, 189, 248, 0.3)";
        ctx.shadowBlur = 8;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(s.text, 0, 0);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
