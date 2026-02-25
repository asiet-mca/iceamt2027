import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutCollege } from "./components/AboutCollege";
import { AboutConference } from "./components/AboutConference";
import { Departments } from "./components/Departments";
import { Timeline } from "./components/Timeline";
import { CallForPapers } from "./components/CallForPapers";
import { Committee } from "./components/Committee";
import { Sponsors } from "./components/Sponsors";
import { Registration } from "./components/Registration";
import { Venue } from "./components/Venue";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <div className="noise-overlay" style={{ background: "var(--cream)" }}>
      <Navbar />
      <Hero />
      <AboutCollege />
      <AboutConference />
      <Departments />
      <Timeline />
      <CallForPapers />
      <Committee />
      <Sponsors />
      <Registration />
      <Venue />
      <Footer />
    </div>
  );
}
