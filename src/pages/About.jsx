import { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const gridRef = useRef(null);

  useEffect(() => {
    const dots = gridRef.current.querySelectorAll(".dot");

   const handleMove = (e) => {
  dots.forEach((dot) => {
    const rect = dot.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 120) {
      const strength = (120 - dist) / 120;

      // RANDOM small movement
      const randomX = (Math.random() - 0.5) * 12 * strength;
      const randomY = (Math.random() - 0.5) * 12 * strength;

      dot.style.transform = `translate(${randomX}px, ${randomY}px)`;
      dot.style.transition = "transform 0.2s ease-out";
      dot.classList.add("glow");
    } else {
      dot.style.transform = "translate(0, 0)";
      dot.style.transition = "transform 0.6s ease";
      dot.classList.remove("glow");
    }
  });
};

    const resetDots = () => {
      dots.forEach((dot) => {
        dot.style.transform = "translate(0, 0)";
        dot.classList.remove("glow");
      });
    };

    const grid = gridRef.current;
    grid.addEventListener("mousemove", handleMove);
    grid.addEventListener("mouseleave", resetDots);

    return () => {
      grid.removeEventListener("mousemove", handleMove);
      grid.removeEventListener("mouseleave", resetDots);
    };
  }, []);

  return (
    <section id="about-section" className="about-section">
      {/* LEFT DOT GRID */}
      <div className="dot-grid" ref={gridRef}>
        {Array.from({ length: 160 }).map((_, i) => (
          <span key={i} className="dot" />
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-content">
        <h2>
          I build the parts of products you don’t see—
          <span> but always depend on.</span>
        </h2>

        <p>
         I’m <strong>Harsh Kumar Jha</strong>, a backend engineer who thrives when the world is asleep. While most people are dreaming, I’m debugging race conditions, optimizing slow queries, and building systems that stay rock-solid under pressure. Real-time pipelines, task queues, smart contracts—I dive into the messy stuff nobody else wants to touch, and I make it work. Frontend isn’t my playground; backend chaos is where I shine.

I build for real users, real traffic, and real-world problems. Every line of code I write is battle-tested under pressure, because if it survives that, it’s truly solid engineering. Late nights, early mornings, or those 4 AM coding sprints—that’s where my work comes alive, and that’s the kind of engineering I bring to every project.
        </p>

      
      </div>
    </section>
  );
}