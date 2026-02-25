import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../components/card";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // 🎯 Height + Width aware start
  const getDynamicStart = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  // 🔴 VERY SHORT SCREENS (your case: 600px)
  if (h <= 620) {
    return "top -15%";
  }

  // 🟠 SHORT LAPTOP SCREENS
  if (h <= 700) {
    return "top -10%";
  }
  if (h <= 770) {
    return "top -6%";
  }

  // 🟢 NORMAL / LARGE SCREENS → smooth width mapping
  const minW = 360;
  const maxW = 1600;

  const clampedW = Math.min(Math.max(w, minW), maxW);

  const startPercent = gsap.utils.mapRange(
    minW,
    maxW,
    25,    // small width
    -7,   // large width
    clampedW
  );

  return `top ${startPercent}%`;
};

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollLength = () =>
      track.scrollWidth - section.offsetWidth;

    const tween = gsap.to(track, {
      x: () => -getScrollLength(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: getDynamicStart,            // ✅ height-aware
        end: () => `+=${getScrollLength()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,         // 🔑 recalculates on resize
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      id="project-section"
      className="work-section"
      ref={sectionRef}
    >
      <h2 className="work-heading">✦ Craft, Design & Innovate.</h2>

      <div className="work-horizontal">
        <div className="work-track" ref={trackRef}>
          <Card
            image="/images/bingo.png"
            category="Real Time Multiplayer"
            title="Bingo Game"
            description="Engineered a scalable real-time bingo platform using WebSockets and AWS EC2, supporting 100+ concurrent players with low latency. Implemented secure user authentication and dynamic game rooms."
            tags={[
              "Next.js",
              "Prisma",
              "PostgreSQL",
              "AWS EC2",
              "WebSockets",
              "TypeScript",
            ]}
            link="https://github.com/harshguarav/BINGO-main"
          />

          <Card
            image="/images/url.png"
            category="System Design"
            title="MiniLink URL Shortener"
            description="Scalable URL shortener with analytics and caching. Built with Next.js, Prisma, and MongoDB, featuring user authentication and real-time analytics dashboard."
            tags={[
              "Express",
              "MongoDB",
              "Caching",
              "Next.js",
              "Node",
            ]}
            link="https://github.com/harshguarav/MiniLink"
          />

          <Card
            image="/images/cpu.jpg"
            category="OS Visualizer"
            title="CPU Scheduler"
            description="Interactive OS and algorithm visualizer for CPU scheduling. Built with C++ and D3.js, it simulates various scheduling algorithms and visualizes process execution timelines."
            tags={[
              "C++",
              "D3.js",
              "Operating System",
            ]}
            link="https://github.com/harshguarav/CPU_Scheduling"
          />

          <Card
            image="/images/employee.png"
            category="Employee Management"
            title="Penthara HRMS"
            description="HRMS with attendance and performance tracking. Built with React, Next.js, Prisma, and PostgreSQL, it features employee profiles, attendance logs, performance reviews, and a user-friendly dashboard."
            tags={[
              "React",
              "Next.js",
              "Tailwind",
              "Prisma",
              "PostgreSQL",
            ]}
            link="https://github.com/harshguarav/employee_directory"
          />
        </div>
      </div>
    </section>
  );
}