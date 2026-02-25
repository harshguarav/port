import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const images = [
    "/images/me1.jpeg",
    "/images/me2.jpeg",
    "/images/me3.jpeg",
    "/images/me4.jpeg",
    "/images/me5.jpeg",
  ];

  // Image cycling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      {/* LEFT: Rotating Images */}
      <div className="image-stack">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className={`stack-img ${i === imgIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* RIGHT: SIMPLE TEXT */}
      <div className="about-text">
        <h2>Who I Am?</h2>
        <p>
          I build things that work—usually late at night, sometimes at 4 AM,
          always with intent. I’m a final-year B.Tech student who doesn’t just
          “know” tech, I ship it: real-time apps, full-stack platforms,
          dashboards, and systems that break only when you really mess up. I
          like clean architecture, fast backends, and code that can survive both
          production traffic and interview cross-questioning. I’m cocky enough
          to trust my skills, self-aware enough to keep sharpening them, and
          disciplined enough to stay locked in while others are still
          “planning to start.” If it runs smoothly, scales decently, and looks
          effortless—yeah, I probably built that.
        </p>
      </div>
    </section>
  );
};

export default About;