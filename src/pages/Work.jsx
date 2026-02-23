import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../components/card";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;

    const scrollLength = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="project-section" className="work-section" ref={sectionRef}>
      <h2 className="work-heading">✦ Craft, Design & Innovate.</h2>

      <div className="work-horizontal">
        <div className="work-track" ref={trackRef}>
          <Card
            image="/images/bingo.png"
            category="Real time Multiplayer"
            title="Bingo Game"
            description="Engineered a scalable real-time bingo gaming platform supporting 100+ concurrent players..."
            tags={["Next.js", "Prisma", "PostgreSQL", "AWS EC2", "WebSockets", "TypeScript"]}
            link="https://github.com/harshguarav/BINGO-main"
          />

          <Card
            image="/images/url.png"
            category="System Design"
            title="MiniLink URL Shortener"
            description="Designed and developed a scalable URL shortening service..."
            tags={["Caching", "Express", "MongoDB", "Sharding", "Next.js", "Node"]}
            link="https://github.com/harshguarav/MiniLink"
          />

          <Card
            image="/images/cpu.jpg"
            category="OS Visualizer"
            title="CPU Scheduler"
            description="Developed a web-based OS and algorithm visualizer..."
            tags={["C++", "D3.js", "Operating System", "File System", "STL"]}
            link="https://github.com/harshguarav/CPU_Scheduling/tree/main/CPU-Scheduler-main"
          />

          <Card
            image="/images/employee.png"
            category="Employee Management System"
            title="Penthara HRMS"
            description="Designed and developed a comprehensive employee management system..."
            tags={["React", "Next.js", "Tailwind", "Node", "Prisma", "PostgreSQL"]}
            link="https://github.com/harshguarav/employee_directory"
          />
        </div>
      </div>
    </section>
  );
}