import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Entry animation
    gsap.from(navRef.current, {
      y: -70,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(linksRef.current, {
      opacity: 0,
      y: -10,
      stagger: 0.12,
      duration: 0.6,
      delay: 0.3,
      ease: "power3.out",
    });

    // Scroll-based horizontal shift
    gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "300 top",
        scrub: true,
      },
    })
      .to(leftRef.current, { x: "-15vw", ease: "none" })
      .to(rightRef.current, { x: "20vw", ease: "none" }, "<");
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="navbar" ref={navRef}>
      {/* LEFT LINKS */}
      <div className="nav-left" ref={leftRef}>
        {["Home", "Stack", "Project", "About", "Experience"].map(
          (item, index) => (
            <span
              key={item}
              className="nav-link"
              ref={(el) => (linksRef.current[index] = el)}
              onClick={() =>
                handleScroll(
                  item === "Home"
                    ? "hero-section"
                    : item === "Experience"
                    ? "education-section"
                    : `${item.toLowerCase()}-section`
                )
              }
            >
              {item}
            </span>
          )
        )}
      </div>

      {/* RIGHT ACTIONS */}
      <div className="nav-right" ref={rightRef}>
        <button
          className="lets-talk-btn"
          onClick={() => handleScroll("contact-section")}
        >
          <span className="text">Let’s Talk</span>
        </button>

        <button
          className="lets-talk-btn get-cv-btn"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Harsh_Kumar_Jha_CV.pdf";
            link.download = "Harsh_Kumar_Jha_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <span className="text">Get CV</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;