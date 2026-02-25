import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chiefPatron1Img from "../../assets/chiefPatron1Img.jpg";
import chiefPatron2Img from "../../assets/chiefPatron2Img.jpg";

gsap.registerPlugin(ScrollTrigger);

const chiefPatrons = [
  {
    name: "His Holiness Sri Sri Bharati Tirtha Mahasannidhanam",
    role: "Jagadguru Shankaracharya, Dakshinamnaya Sri Sharada Peetham, Sringeri",
    image: chiefPatron1Img,
  },
  {
    name: "His Holiness Sri Sri Vidhushekhara Bharati Sannidhanam",
    role: "Jagadguru Shankaracharya, Dakshinamnaya Sri Sharada Peetham, Sringeri",
    image: chiefPatron2Img,
  },
];

const patrons = [
  {
    name: "Guru Seva Nirata Sri P. A. Murali",
    role: "CEO & Administrator, Sringeri Mutt and its Properties",
  },
  {
    name: "Sri K. Anand",
    role: "Managing Trustee, Adi Sankara Trust",
  },
];

const organizingChairs = [
  {
    name: "Dr. M. S. Murali",
    role: "Principal, ASIET",
  },
  {
    name: "Dr. Sreepriya S.",
    role: "Dean – Research, ASIET",
  },
];

const conveners = [
  {
    name: "Dr. S. Srikrishnan",
    role: "HOD, Computer Applications",
  },
  {
    name: "Dr. Jayasree T. G.",
    role: "HOD, Basic Science & Humanities",
  },
  {
    name: "Shri Shaji Mohan",
    role: "HOD, Management Studies",
  },
  {
    name: "Dr. K. Dhanasekar",
    role: "HOD, Civil Engineering",
  },
];

const advisoryBoard = [
  { name: "E. Dinesh Kumar", role: "Senior CID Developer, Dofumare Engineering" },
  { name: "Dr. Sadagopan N", role: "Associate Professor, Kancheepuram" },
  { name: "Dr. K. S. Kameshwaran", role: "Associate Professor, Roorkee" },
  { name: "Eng. R. S. Subramanian", role: "Manager – Projects, Energy Systems Co., Kuwait" },
  { name: "Shri N. Vivekanandan", role: "Scientist, CWPRS, Pune" },
  { name: "Dr. Saleh Seetharaman", role: "Assistant Professor, King Saud University" },
  { name: "Shri Dinesh Thampi", role: "Print & Delivery Centre, TCS, Kochi" },
  { name: "Dr. Anjana S. Chandran", role: "Associate Professor & Head (CS & IT), Kochi" },
  { name: "Mr. Sabu Varghese", role: "Senior General Manager, Mantri Lipids" },
  { name: "Dr. Suresh K", role: "Dept. of Civil Engineering, ASIET" },
];

const coordinators = [
  { name: "Prof. Suja C. K.", role: "Asst. Professor, Basic Science & Humanities", phone: "9847193046" },
  { name: "Dr. Chinju C.", role: "Assoc. Professor, Management Studies", phone: "9544471430" },
  { name: "Dr. Vincy Dev V. K.", role: "Asst. Professor, Computer Applications", phone: "9496449163" },
  { name: "Dr. Dhanasekar K", role: "Professor & HOD", phone: "9444152208" },
];

interface MemberCardProps {
  name: string;
  role: string;
  phone?: string;
}

function MemberCard({ name, role, phone }: MemberCardProps) {
  return (
    <div
      className="p-5 text-center"
      style={{
        border: "1px solid rgba(242, 240, 233, 0.08)",
        borderRadius: "1.5rem",
      }}
    >
      {/* Abstract avatar */}
      <div
        className="w-14 h-14 mx-auto mb-3 flex items-center justify-center text-lg font-bold"
        style={{
          background: "rgba(204, 88, 51, 0.12)",
          borderRadius: "50%",
          fontFamily: "var(--font-heading)",
          color: "var(--clay)",
        }}
      >
        {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
      </div>
      <h4
        className="text-sm font-bold mb-1"
        style={{ fontFamily: "var(--font-heading)", color: "var(--cream)" }}
      >
        {name}
      </h4>
      <p
        className="text-[11px] leading-snug"
        style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
      >
        {role}
      </p>
      {phone && (
        <a
          href={`tel:+91${phone}`}
          className="inline-block mt-2 text-[10px] hover-lift"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(242, 240, 233, 0.35)",
          }}
        >
          +91 {phone}
        </a>
      )}
    </div>
  );
}

interface SectionGroupProps {
  label: string;
  members: MemberCardProps[];
  columns?: string;
}

function SectionGroup({ label, members, columns = "grid-cols-2 md:grid-cols-4" }: SectionGroupProps) {
  return (
    <div className="mb-12">
      <span
        className="text-[10px] uppercase tracking-[0.2em] block mb-5"
        style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
      >
        {label}
      </span>
      <div className={`grid ${columns} gap-4`}>
        {members.map((m, i) => (
          <MemberCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
}

export function Committee() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        if (contentRef.current) {
          const groups = contentRef.current.querySelectorAll(".committee-group");
          groups.forEach((group) => {
            const cards = group.querySelectorAll(".grid > div");
            gsap.fromTo(cards, { y: 30, opacity: 0 }, {
              y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
              scrollTrigger: { trigger: group, start: "top 80%", once: true },
            });
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
      id="committee"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      <div ref={contentRef} className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <span
            className="text-[10px] uppercase tracking-[0.2em] block mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
          >
            Organizing Committee
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
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
              Council
            </span>
          </h2>
        </div>

        {/* Chief Patrons — Distinguished with photos */}
        <div className="committee-group mb-14">
          <span
            className="text-[10px] uppercase tracking-[0.2em] block mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
          >
            Chief Patrons
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {chiefPatrons.map((patron, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-5"
                style={{
                  border: "1px solid rgba(242, 240, 233, 0.1)",
                  borderRadius: "1.5rem",
                  background: "rgba(242, 240, 233, 0.03)",
                }}
              >
                <div
                  className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden"
                  style={{
                    borderRadius: "1.25rem",
                    border: "2px solid rgba(204, 88, 51, 0.25)",
                  }}
                >
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <h4
                    className="text-sm md:text-base font-bold mb-1.5 leading-snug"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--cream)" }}
                  >
                    {patron.name}
                  </h4>
                  <p
                    className="text-[11px] leading-relaxed"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
                  >
                    {patron.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="committee-group">
          <SectionGroup label="Patrons" members={patrons} columns="grid-cols-1 md:grid-cols-2" />
        </div>
        <div className="committee-group">
          <SectionGroup label="Organizing Chairs" members={organizingChairs} columns="grid-cols-1 md:grid-cols-2" />
        </div>
        <div className="committee-group">
          <SectionGroup label="Conveners" members={conveners} />
        </div>
        <div className="committee-group">
          <SectionGroup label="Conference Coordinators" members={coordinators} />
        </div>
        <div className="committee-group">
          <SectionGroup label="Advisory Board" members={advisoryBoard} columns="grid-cols-2 md:grid-cols-5" />
        </div>
      </div>
    </section>
  );
}
