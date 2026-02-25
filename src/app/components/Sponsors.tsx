import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  {
    name: "ANP Alliance",
    tagline: "Financial and Management Consultants Pvt. Ltd.",
    description: "One-stop business solution",
  },
  {
    name: "Edu Kshetra",
    tagline: "Educational Excellence",
    description: "Empowering Education",
  },
  {
    name: "LCC",
    tagline: "Innovation Partners",
    description: "Technology Solutions",
  },
];

export function Sponsors() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (cardsRef.current) {
          gsap.fromTo(
            cardsRef.current.children,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });
      ctxRef.current = ctx;
    });
    const ctxRef = { current: null as gsap.Context | null };
    return () => {
      cancelAnimationFrame(raf);
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <span
            className="text-[10px] uppercase tracking-[0.2em] block mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
          >
            Partnership
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--charcoal)" }}
          >
            Supported{" "}
            <span
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              by
            </span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="group p-8 text-center transition-all duration-500 hover-lift cursor-default"
              style={{
                background: "white",
                border: "1px solid rgba(46, 64, 54, 0.08)",
                borderRadius: "var(--radius-card)",
                boxShadow: "0 4px 24px rgba(26, 26, 26, 0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(204, 88, 51, 0.2)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(26, 26, 26, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(46, 64, 54, 0.08)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(26, 26, 26, 0.04)";
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-all duration-500"
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(46, 64, 54, 0.06)",
                  border: "1px solid rgba(46, 64, 54, 0.08)",
                }}
              >
                <Briefcase
                  className="w-7 h-7 transition-colors duration-500"
                  style={{ color: "var(--moss)" }}
                />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--charcoal)",
                }}
              >
                {sponsor.name}
              </h3>
              <p
                className="text-xs mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(26, 26, 26, 0.55)",
                }}
              >
                {sponsor.tagline}
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(26, 26, 26, 0.35)",
                }}
              >
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
