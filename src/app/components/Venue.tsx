import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Venue() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (leftRef.current) {
          gsap.fromTo(leftRef.current.children, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
          });
        }
        if (rightRef.current) {
          gsap.fromTo(rightRef.current, { y: 30, opacity: 0, scale: 0.97 }, {
            y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out",
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
      id="venue"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Info */}
          <div ref={leftRef}>
            <span
              className="text-[10px] uppercase tracking-[0.2em] block mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
            >
              Venue & Contact
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--cream)" }}
            >
              The{" "}
              <span
                style={{
                  fontFamily: "var(--font-drama)",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                Coordinates
              </span>
            </h2>

            <p
              className="text-2xl md:text-3xl mb-8 mt-4"
              style={{
                fontFamily: "var(--font-drama)",
                fontStyle: "italic",
                color: "rgba(242, 240, 233, 0.5)",
              }}
            >
              Kalady, Kerala
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(204, 88, 51, 0.12)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "var(--clay)" }} />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--cream)",
                    }}
                  >
                    Conference Venue
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(242, 240, 233, 0.5)",
                    }}
                  >
                    Adi Shankara College of Engineering & Technology
                    <br />
                    Vidya Bharathi Nagar, Mattoor,
                    <br />
                    Kalady, Ernakulam, Kerala 683574
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(204, 88, 51, 0.12)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <Phone className="w-4 h-4" style={{ color: "var(--clay)" }} />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--cream)",
                    }}
                  >
                    Phone Support
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgba(242, 240, 233, 0.5)",
                    }}
                  >
                    +91 484 246 3825
                    <br />
                    +91 987 654 3210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(204, 88, 51, 0.12)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <Mail className="w-4 h-4" style={{ color: "var(--clay)" }} />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--cream)",
                    }}
                  >
                    Email Us
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgba(242, 240, 233, 0.5)",
                    }}
                  >
                    info@iceamt2027.org
                    <br />
                    support@adishankara.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div
            ref={rightRef}
            className="h-[400px] md:h-[500px] overflow-hidden relative"
            style={{
              borderRadius: "var(--radius-card)",
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.3)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.0305854313483!2d76.42788307586456!3d10.178169269941934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1772010932421!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.6] brightness-[0.8] contrast-[1.1] hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
