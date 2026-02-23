import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Education.css";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const dot = dotRef.current;

    const height = container.offsetHeight;

    gsap.fromTo(
      dot,
      { y: 0 },
      {
        y: height - 20,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="education-section" className="timeline-section">
      <h2 className="timeline-heading">✦ Experience & Education</h2>

      <div className="timeline" ref={containerRef}>
        {/* vertical line */}
        <div className="line">
          <span className="scroll-dot" ref={dotRef} />
        </div>

        {/* content */}
        <div className="content">
          <div className="item">
            <h3>AI/ML Contributor</h3>
            <span className="company">ScaleAI (Remote)</span>
            <ul>
              <li>Evaluated AI responses for RLHF pipelines.</li>
              <li>Created conversational datasets for LLM training.</li>
              <li>Built internal tools for model metrics.</li>
            </ul>
            <span className="date">Jan 2025 – Present</span>
          </div>

          <div className="item">
            <h3>B.Tech in Computer Science</h3>
            <span className="company">Lovely Professional University</span>
            <ul>
              <li>Backend Engineering & Distributed Systems.</li>
              <li>Projects with Next.js, Docker, Kubernetes.</li>
            </ul>
            <span className="date">Sep 2022 – Present</span>
          </div>

          <div className="item">
            <h3>High School Education</h3>
            <span className="company">Kendriya Vidyalaya</span>
            <ul>
              <li>Mathematics, Physics, Chemistry, Biology</li>
            </ul>
            <span className="date">2020 – 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
}