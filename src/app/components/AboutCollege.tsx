import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import collegeImage from "../../assets/clgog.jpg";
import accreditationBanner from "../../assets/Frame 31.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2001", label: "Founded" },
  { value: "50+", label: "Years of Trust Legacy" },
  { value: "4", label: "Departments" },
  { value: "Kerala", label: "Kalady, India" },
];

export function AboutCollege() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        gsap.fromTo(imageWrapRef.current, { y: 60, opacity: 0, scale: 0.96 }, {
          y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
        if (headingRef.current) {
          gsap.fromTo(headingRef.current.children, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headingRef.current, start: "top 80%", once: true },
          });
        }
        if (bodyRef.current) {
          gsap.fromTo(bodyRef.current.children, { y: 30, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: bodyRef.current, start: "top 82%", once: true },
          });
        }
        if (statsRef.current) {
          gsap.fromTo(statsRef.current.children, { y: 25, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 88%", once: true },
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
      id="about-college"
      ref={sectionRef}
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ── Top: Full-bleed Image with Overlay Text ── */}
        <div ref={imageWrapRef} className="relative mb-16 md:mb-20">
          <div
            className="relative overflow-hidden w-full"
            style={{
              borderRadius: "var(--radius-card-lg)",
              height: "clamp(300px, 50vw, 520px)",
            }}
          >
            <img
              src={collegeImage}
              alt="Adi Shankara Institute of Engineering and Technology — Main Gate and Campus"
              className="w-full h-full object-cover"
            />
            {/* Gradient scrim for text readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(26, 26, 26, 0.75) 0%, rgba(26, 26, 26, 0.15) 50%, transparent 100%)",
              }}
            />
            {/* Overlaid label */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className="text-[10px] uppercase tracking-[0.2em] px-3 py-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--cream)",
                    background: "rgba(242, 240, 233, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid rgba(242, 240, 233, 0.12)",
                  }}
                >
                  Est. 2001
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.2em] px-3 py-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--cream)",
                    background: "rgba(242, 240, 233, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid rgba(242, 240, 233, 0.12)",
                  }}
                >
                  Kalady, Kerala
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.2em] px-3 py-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--cream)",
                    background: "rgba(242, 240, 233, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid rgba(242, 240, 233, 0.12)",
                  }}
                >
                  Host Institution
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--cream)",
                }}
              >
                Adi Shankara Institute of
                <br />
                Engineering &{" "}
                <span
                  style={{
                    fontFamily: "var(--font-drama)",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  Technology
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* ── Middle: Two-Column Body ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-20">
          <div ref={headingRef}>
            <span
              className="text-[10px] uppercase tracking-[0.2em] block mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
            >
              About the Institution
            </span>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(26, 26, 26, 0.7)",
              }}
            >
              Established in Kalady with the aim of providing value-added
              technical education that fosters professional excellence and ethical
              values. The institution is managed by the{" "}
              <strong style={{ color: "var(--charcoal)", fontWeight: 600 }}>
                Adi Sankara Trust
              </strong>
              , a registered organization renowned in the field of education.
            </p>
          </div>

          <div ref={bodyRef} className="space-y-5">
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(26, 26, 26, 0.55)",
              }}
            >
              Under the blessings of His Holiness Jagadguru Sri Sri Bharati
              Tirtha Mahasannidhanam and His Holiness Jagadguru Sri Sri
              Vidhushekhara Bharati Sannidhanam of Dakshinamnaya Sri Sharada
              Peetham, Sringeri — the institute stands as a beacon of academic
              integrity.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(26, 26, 26, 0.55)",
              }}
            >
              For over 50 years, the Trust has successfully operated various
              educational institutions. The college, founded in 2001 and
              skilfully maintained by the Sringeri Mutt, continues to uphold high
              academic standards and holistic student development across its four
              departments.
            </p>
          </div>
        </div>

        {/* ── Bottom: Stats Strip ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 md:p-6 text-center"
              style={{
                background: "rgba(46, 64, 54, 0.04)",
                border: "1px solid rgba(46, 64, 54, 0.06)",
                borderRadius: "1.5rem",
              }}
            >
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--clay)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] uppercase tracking-[0.18em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(26, 26, 26, 0.4)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Marquee */}
        <div className="mt-14 md:mt-18">
          <span
            className="text-[10px] uppercase tracking-[0.2em] block mb-5 text-center"
            style={{ fontFamily: "var(--font-mono)", color: "rgba(26, 26, 26, 0.3)" }}
          >
            Accredited & Recognized by
          </span>
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              className="flex items-center whitespace-nowrap"
              style={{ animation: "marquee-scroll 30s linear infinite", width: "fit-content" }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex-shrink-0 flex items-center">
                  <img
                    src={accreditationBanner}
                    alt={i === 0 ? "AICTE, NBA, and University accreditation badges" : ""}
                    className="h-10 md:h-12 w-auto"
                    style={{
                      filter: "grayscale(30%)",
                      opacity: 0.55,
                    }}
                  />
                  {/* Dot separator between repeats */}
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mx-10"
                    style={{ background: "rgba(46, 64, 54, 0.15)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-25%); }
          }
        `}</style>
      </div>
    </section>
  );
}
