import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaEye } from "react-icons/fa";
import "./Cursor.css";

const Cursor = () => {
  const dot = useRef(null);
  const eye = useRef(null);

  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();

    const moveDot = (e) => {
      const overGrid = e.target.closest(".dot-grid");
      const shouldHide = !!overGrid;
      setHidden(shouldHide);

      if (shouldHide) return;

      const now = performance.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dt = now - lastTime || 1;

      const velocity = Math.sqrt(dx * dx + dy * dy) / dt;
      const elasticity = gsap.utils.clamp(0.15, 0.6, velocity * 0.4);

      gsap.to(dot.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: `elastic.out(1, ${elasticity})`,
      });

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(".card__media")) {
        setActive(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(".card__media")) {
        setActive(false);
      }
    };

    window.addEventListener("mousemove", moveDot);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveDot);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    if (!dot.current || !eye.current) return;

    if (hidden) {
      gsap.to(dot.current, { opacity: 0, duration: 0.2 });
      return;
    } else {
      gsap.to(dot.current, { opacity: 1, duration: 0.2 });
    }

    if (active) {
      gsap.to(dot.current, {
        scale: 8,
        backgroundColor: "#e5e7eb",
        duration: 0.25,
        ease: "power3.out",
      });

      gsap.to(eye.current, {
        opacity: 1,
        rotate: "+=180",
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      gsap.to(dot.current, {
        scale: 1,
        backgroundColor: "#004643",
        duration: 0.25,
      });

      gsap.to(eye.current, {
        opacity: 0,
        rotate: 0,
        duration: 0.3,
      });
    }
  }, [active, hidden]);

  return (
    <div className="cursor-dot" ref={dot}>
      <span className="cursor-eye" ref={eye}>
        <FaEye />
        {/* see me */}
      </span>
    </div>
  );
};

export default Cursor;