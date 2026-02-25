import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─── */
const departments = [
  {
    name: "Basic Science & Humanities",
    focus: "Mathematics, Physics, Chemistry — 20+ Expert Faculty",
  },
  {
    name: "Management Studies",
    focus: "Operations, Marketing, Finance, HR — Est. 2004",
  },
  {
    name: "Computer Applications",
    focus: "Python, Java, AI, Cybersecurity, Cloud — Est. 2023",
  },
  {
    name: "Civil Engineering",
    focus: "Structural, Geotechnical, Environmental, Transportation",
  },
];

const researchDomains = [
  { label: "Management", sub: "Strategy · HR · Operations" },
  { label: "Emerging Tech", sub: "IoT · Blockchain · Cloud" },
  { label: "AI & Data Science", sub: "ML · Big Data · Neural Nets" },
  { label: "Finance", sub: "FinTech · Crypto · Banking" },
  { label: "Marketing", sub: "Digital · Branding · UX" },
  { label: "Engineering", sub: "Robotics · Automation · Energy" },
];

const scheduleTracks = [
  { day: "Day 1 AM", track: "Applied Science" },
  { day: "Day 1 PM", track: "Management" },
  { day: "Day 2 AM", track: "Technology" },
  { day: "Day 2 PM", track: "Engineering" },
];

/* ─── Card 1: Vertical Shuffler — CSS animation driven, React-safe ─── */
function ShufflerCard() {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const [animatingIdx, setAnimatingIdx] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Mark the last card as "animating" (it will fly to top)
      setAnimatingIdx(3);

      // After the animation plays, actually reorder
      setTimeout(() => {
        setOrder((prev) => {
          const next = [...prev];
          next.unshift(next.pop()!);
          return next;
        });
        setAnimatingIdx(null);
      }, 600);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="p-5 md:p-6 flex flex-col"
      style={{
        background: "var(--cream)",
        border: "1px solid rgba(46, 64, 54, 0.08)",
        borderRadius: "var(--radius-card)",
        boxShadow: "0 8px 32px rgba(26, 26, 26, 0.06)",
        overflow: "hidden",
      }}
    >
      <span
        className="text-[10px] uppercase tracking-[0.2em] mb-1"
        style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
      >
        Diagnostic Shuffler
      </span>
      <h3
        className="text-lg font-bold mb-4"
        style={{ fontFamily: "var(--font-heading)", color: "var(--charcoal)" }}
      >
        Organizing Departments
      </h3>

      <div className="flex flex-col gap-2 relative">
        {order.map((deptIdx, position) => {
          const dept = departments[deptIdx];
          const isFirst = position === 0 && animatingIdx === null;
          const isFlying = position === animatingIdx;
          return (
            <div
              key={deptIdx}
              className="px-4 py-3"
              style={{
                background: isFirst ? "white" : "rgba(255, 255, 255, 0.85)",
                border: isFirst
                  ? "1px solid rgba(204, 88, 51, 0.25)"
                  : "1px solid rgba(46, 64, 54, 0.08)",
                borderRadius: "1rem",
                boxShadow: isFirst
                  ? "0 4px 16px rgba(204, 88, 51, 0.1)"
                  : "0 1px 4px rgba(26, 26, 26, 0.03)",
                transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease",
                transform: isFlying
                  ? "scale(0.95) translateX(10px)"
                  : isFirst
                    ? "scale(1.02)"
                    : "scale(1)",
                opacity: isFlying ? 0.4 : 1,
              }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-[10px] uppercase tracking-[0.15em] w-6 flex-shrink-0 font-semibold pt-0.5 transition-colors duration-400"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: isFirst ? "var(--clay)" : "rgba(26, 26, 26, 0.3)",
                  }}
                >
                  {String(deptIdx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div
                    className="text-sm font-bold leading-snug transition-colors duration-400"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: isFirst ? "var(--charcoal)" : "rgba(26, 26, 26, 0.6)",
                    }}
                  >
                    {dept.name}
                  </div>
                  <div
                    className="text-[11px] mt-1 leading-relaxed transition-colors duration-400"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: isFirst ? "rgba(26, 26, 26, 0.5)" : "rgba(26, 26, 26, 0.35)",
                    }}
                  >
                    {dept.focus}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Card 2: Research Radar — revolving domain ring ─── */
function ResearchRadarCard() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % researchDomains.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="p-5 md:p-6 flex flex-col"
      style={{
        background: "var(--cream)",
        border: "1px solid rgba(46, 64, 54, 0.08)",
        borderRadius: "var(--radius-card)",
        boxShadow: "0 8px 32px rgba(26, 26, 26, 0.06)",
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: "var(--clay)",
            animation: "dept-pulse 2s ease-in-out infinite",
          }}
        />
        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
        >
          Conference Tracks
        </span>
      </div>
      <h3
        className="text-lg font-bold mb-4"
        style={{ fontFamily: "var(--font-heading)", color: "var(--charcoal)" }}
      >
        Research Domains
      </h3>

      <div className="flex flex-col">
        {/* Active domain — big display */}
        <div className="mb-4 min-h-[64px]">
          <div
            className="transition-all duration-500"
            style={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            key={activeIdx}
          >
            <span
              className="text-[10px] uppercase tracking-[0.15em] block mb-1"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(26, 26, 26, 0.3)",
              }}
            >
              Track {String(activeIdx + 1).padStart(2, "0")}
            </span>
            <div
              className="text-xl md:text-2xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--charcoal)",
              }}
            >
              {researchDomains[activeIdx].label}
            </div>
            <div
              className="text-xs mt-1"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(26, 26, 26, 0.4)",
              }}
            >
              {researchDomains[activeIdx].sub}
            </div>
          </div>
        </div>

        {/* Domain strip — all 6 as small indicators */}
        <div className="space-y-1">
          {researchDomains.map((domain, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3 py-1.5 transition-all duration-400 cursor-pointer"
                style={{
                  background: isActive ? "rgba(204, 88, 51, 0.08)" : "transparent",
                  borderRadius: "0.6rem",
                  border: isActive
                    ? "1px solid rgba(204, 88, 51, 0.15)"
                    : "1px solid transparent",
                }}
                onClick={() => setActiveIdx(idx)}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-400"
                  style={{
                    background: isActive ? "var(--clay)" : "rgba(46, 64, 54, 0.15)",
                    transform: isActive ? "scale(1.4)" : "scale(1)",
                  }}
                />
                <span
                  className="text-[11px] font-medium transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: isActive ? "var(--clay)" : "rgba(26, 26, 26, 0.35)",
                  }}
                >
                  {domain.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes dept-pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.4 } }
      `}</style>
    </div>
  );
}

/* ─── Card 3: Cursor Protocol Scheduler ─── */
function SchedulerCard() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [cursorPos, setCursorPos] = useState({ x: -20, y: -20 });
  const [clicking, setClicking] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let step = 0;
    const cellPositions = [
      { x: 40, y: 30 },
      { x: 40, y: 75 },
      { x: 40, y: 120 },
      { x: 40, y: 165 },
    ];

    const runSequence = () => {
      if (step === 0) {
        setShowCursor(true);
        setCursorPos({ x: -10, y: cellPositions[0].y });
      } else if (step <= 4) {
        const idx = step - 1;
        setCursorPos(cellPositions[idx]);
        setTimeout(() => {
          setClicking(true);
          setTimeout(() => {
            setClicking(false);
            setActiveIdx(idx);
          }, 150);
        }, 300);
      } else if (step === 5) {
        setCursorPos({ x: 200, y: 210 });
      } else if (step === 6) {
        setShowCursor(false);
        setActiveIdx(-1);
        step = -1;
      }
      step++;
    };

    const interval = setInterval(runSequence, 1200);
    runSequence();
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="p-5 md:p-6 flex flex-col"
      style={{
        background: "var(--cream)",
        border: "1px solid rgba(46, 64, 54, 0.08)",
        borderRadius: "var(--radius-card)",
        boxShadow: "0 8px 32px rgba(26, 26, 26, 0.06)",
      }}
    >
      <span
        className="text-[10px] uppercase tracking-[0.2em] mb-1"
        style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
      >
        Cursor Protocol
      </span>
      <h3
        className="text-lg font-bold mb-4"
        style={{ fontFamily: "var(--font-heading)", color: "var(--charcoal)" }}
      >
        Conference Schedule
      </h3>

      <div className="relative">
        {/* SVG Cursor */}
        {showCursor && (
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            className="absolute z-20 transition-all duration-500"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              transform: clicking ? "scale(0.85)" : "scale(1)",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          >
            <path
              d="M1 1L1 17L5.5 13L10 21L13 19.5L8.5 12L14.5 11L1 1Z"
              fill="var(--charcoal)"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        )}

        {/* Track Grid */}
        <div className="space-y-2">
          {scheduleTracks.map((track, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3.5 py-2.5 transition-all duration-300"
              style={{
                background:
                  activeIdx === idx ? "var(--clay)" : "rgba(255,255,255,0.8)",
                border:
                  activeIdx === idx
                    ? "1px solid var(--clay)"
                    : "1px solid rgba(46, 64, 54, 0.06)",
                borderRadius: "0.75rem",
                transform: activeIdx === idx ? "scale(1.02)" : "scale(1)",
              }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.12em] w-16 flex-shrink-0"
                style={{
                  fontFamily: "var(--font-mono)",
                  color:
                    activeIdx === idx
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(26, 26, 26, 0.4)",
                }}
              >
                {track.day}
              </span>
              <span
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: activeIdx === idx ? "white" : "var(--charcoal)",
                }}
              >
                {track.track}
              </span>
            </div>
          ))}
        </div>

        {/* Explore button */}
        <div className="mt-4 flex justify-end">
          <span
            className="text-[10px] uppercase tracking-[0.15em] px-4 py-2"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--moss)",
              border: "1px solid rgba(46, 64, 54, 0.15)",
              borderRadius: "var(--radius-pill)",
            }}
          >
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export function Departments() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (cardsRef.current) {
          gsap.fromTo(cardsRef.current.children, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
          });
        }
      });
      ctxRef.current = ctx;
    });
    const ctxRef = { current: null as gsap.Context | null };
    return () => { cancelAnimationFrame(raf); ctxRef.current?.revert(); };
  }, []);

  return (
    <section
      id="departments"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <span
            className="text-[10px] uppercase tracking-[0.2em] block mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
          >
            Organizing Departments
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--charcoal)",
            }}
          >
            Interactive{" "}
            <span
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Artifacts
            </span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start"
        >
          <ShufflerCard />
          <ResearchRadarCard />
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
}
