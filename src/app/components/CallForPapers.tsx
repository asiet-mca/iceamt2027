import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const domains = [
  { title: "Management", tags: "Strategy, HR, Operations, Entrepreneurship" },
  { title: "Emerging Tech", tags: "IoT, Blockchain, Cloud, Cyber Security" },
  { title: "AI & Data Science", tags: "ML, Big Data, Neural Networks" },
  { title: "Finance", tags: "FinTech, Crypto, Banking, Risk Management" },
  { title: "Marketing", tags: "Digital Marketing, Branding, Consumer Behavior" },
  { title: "Engineering", tags: "Robotics, Automation, Sustainable Energy" },
];

export function CallForPapers() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (leftRef.current) {
          gsap.fromTo(leftRef.current.children, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
          });
        }
        if (rightRef.current) {
          gsap.fromTo(rightRef.current.children, { y: 30, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%", once: true },
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
      id="papers"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Dramatic Heading */}
          <div ref={leftRef}>
            <span
              className="text-[10px] uppercase tracking-[0.2em] block mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
            >
              Research Tracks
            </span>

            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--charcoal)",
              }}
            >
              Submit your
            </h2>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl mb-8"
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                fontWeight: 600,
                color: "var(--charcoal)",
                lineHeight: 1,
              }}
            >
              Research.
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(26, 26, 26, 0.6)",
              }}
            >
              We invite original research papers in the following domains. All
              accepted papers will be published in Scopus-indexed proceedings with
              ISSN number.
            </p>

            <a
              href="https://cmt3.research.microsoft.com/ICEAMT2027"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide"
              style={{
                fontFamily: "var(--font-heading)",
                borderRadius: "var(--radius-pill)",
                background: "var(--clay)",
                color: "white",
              }}
            >
              <span className="btn-bg" style={{ background: "var(--clay-dark)" }} />
              <span>Submit Paper</span>
            </a>
          </div>

          {/* Right — Topics + Guidelines */}
          <div ref={rightRef} className="space-y-8">
            {/* Topic Tags */}
            <div>
              <h4
                className="text-[10px] uppercase tracking-[0.2em] mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(26, 26, 26, 0.4)",
                }}
              >
                Research Domains
              </h4>
              <div className="flex flex-wrap gap-2">
                {domains.map((d, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-medium hover-lift cursor-default"
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: "var(--moss)",
                      color: "var(--cream)",
                      borderRadius: "var(--radius-pill)",
                    }}
                  >
                    {d.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Submission Guidelines */}
            <div
              className="p-6"
              style={{
                background: "rgba(46, 64, 54, 0.04)",
                borderRadius: "1.5rem",
                border: "1px solid rgba(46, 64, 54, 0.08)",
              }}
            >
              <h4
                className="text-[10px] uppercase tracking-[0.2em] mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--clay)",
                }}
              >
                Submission Guidelines
              </h4>
              <div
                className="space-y-3 text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(26, 26, 26, 0.6)",
                }}
              >
                <p>
                  Papers must be original and not simultaneously submitted to
                  another journal or conference. Follow IEEE conference paper
                  format for all submissions.
                </p>
                <p>
                  Submit via the Microsoft CMT Portal. E-certificates will be
                  issued to all registered participants.
                </p>
              </div>
            </div>

            {/* Paper Format */}
            <div
              className="p-6"
              style={{
                background: "rgba(46, 64, 54, 0.04)",
                borderRadius: "1.5rem",
                border: "1px solid rgba(46, 64, 54, 0.08)",
              }}
            >
              <h4
                className="text-[10px] uppercase tracking-[0.2em] mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--clay)",
                }}
              >
                Publication
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(26, 26, 26, 0.6)",
                }}
              >
                Selected papers will be published in a peer-reviewed journal with
                ISSN number. Publication fee:{" "}
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--clay)" }}>
                  ₹500 per paper
                </span>
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-[10px] uppercase tracking-[0.2em] mb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(26, 26, 26, 0.4)",
                }}
              >
                Submission Portal
              </h4>
              <a
                href="https://cmt3.research.microsoft.com/ICEAMT2027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover-lift inline-block"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--clay)",
                }}
              >
                cmt3.research.microsoft.com/ICEAMT2027
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
