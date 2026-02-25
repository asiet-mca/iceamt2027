import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { name: "About", to: "about-college" },
  { name: "Departments", to: "departments" },
  { name: "Call for Papers", to: "papers" },
  { name: "Registration", to: "registration" },
  { name: "Venue", to: "venue" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(mobileMenuRef.current!.children, { y: 20, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.06, duration: 0.4, ease: "power3.out",
        });
      });
      return () => ctx.revert();
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-4 md:top-6 left-1/2 z-50 w-[95%] max-w-5xl transition-all duration-700"
      style={{
        transform: "translateX(-50%)",
        borderRadius: "var(--radius-pill)",
        background: scrolled
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(46, 64, 54, 0.15)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: scrolled
          ? "1px solid rgba(46, 64, 54, 0.1)"
          : "1px solid rgba(242, 240, 233, 0.15)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(26, 26, 26, 0.1), 0 1px 2px rgba(26, 26, 26, 0.06)"
          : "none",
        animation: "navbar-enter 1s ease-out 1.2s both",
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-3.5">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 cursor-pointer"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span
            className="text-sm md:text-base font-bold tracking-tight transition-colors duration-500"
            style={{ color: scrolled ? "var(--moss)" : "var(--cream)" }}
          >
            ICEAMT
          </span>
          <span
            className="text-xs font-mono transition-colors duration-500"
            style={{
              fontFamily: "var(--font-mono)",
              color: scrolled ? "var(--clay)" : "rgba(242, 240, 233, 0.7)",
            }}
          >
            2027
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.to)}
              className="text-[13px] font-medium tracking-wide cursor-pointer hover-lift transition-colors duration-300"
              style={{
                fontFamily: "var(--font-body)",
                color: scrolled
                  ? "var(--charcoal)"
                  : "rgba(242, 240, 233, 0.85)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--clay)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "var(--charcoal)"
                  : "rgba(242, 240, 233, 0.85)")
              }
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("registration")}
            className="hidden md:block btn-magnetic text-xs font-semibold tracking-wide px-5 py-2 transition-all duration-500"
            style={{
              fontFamily: "var(--font-heading)",
              borderRadius: "var(--radius-pill)",
              background: "var(--clay)",
              color: "white",
            }}
          >
            <span className="btn-bg" style={{ background: "var(--clay-dark)" }} />
            <span>Register Now</span>
          </button>
          <button
            className="lg:hidden p-1 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: scrolled ? "var(--moss)" : "var(--cream)" }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.to)}
              className="text-left py-3 text-base font-medium border-b transition-colors duration-300 cursor-pointer"
              style={{
                fontFamily: "var(--font-body)",
                color: scrolled ? "var(--charcoal)" : "var(--cream)",
                borderColor: scrolled
                  ? "rgba(46, 64, 54, 0.08)"
                  : "rgba(242, 240, 233, 0.1)",
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("registration")}
            className="mt-3 btn-magnetic text-sm font-semibold tracking-wide px-5 py-3 text-center"
            style={{
              fontFamily: "var(--font-heading)",
              borderRadius: "var(--radius-pill)",
              background: "var(--clay)",
              color: "white",
            }}
          >
            <span>Register Now</span>
          </button>
        </div>
      )}

      <style>{`
        @keyframes navbar-enter {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
