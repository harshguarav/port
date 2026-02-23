import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const bigTextRef = useRef(null);

  useEffect(() => {
    if (!bigTextRef.current) return;

    gsap.to(bigTextRef.current, {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: bigTextRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  // 🔥 SAME SCROLL HANDLER AS NAVBAR
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer id="contact-section" className="footer">
      {/* TOP CTA */}
      <div className="footer-top">
        <h2>Ready to build something unforgettable?</h2>
        <span
          className="footer-cta"
          onClick={() => handleScroll("contact-section")}
        >
          Get in touch →
        </span>
      </div>

      {/* LINKS */}
      <div className="footer-links">
        {/* NAVIGATION */}
        <div className="navigation">
          <p className="label">Navigation</p>

          <ul className="nav-list">
            {["Home", "Work", "About", "Contact"].map((item) => (
              <li key={item} className="nav-item">
                <span className="sparkle">✦</span>
                <span
                  className="footer-link"
                  onClick={() =>
                    handleScroll(
                      item === "Home"
                        ? "hero-section"
                        : item === "Work"
                        ? "project-section"
                        : item === "About"
                        ? "about-section"
                        : "contact-section"
                    )
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div className="connect">
          <p className="connect-title">LET’S CONNECT</p>

          <ul className="connect-list">
            <li className="connect-item">
              <span className="sparkle">✦</span>
              <a
                href="https://www.instagram.com/harsh.jhaaaa/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>

            <li className="connect-item">
              <span className="sparkle">✦</span>
              <a
                href="https://linkedin.com/in/harshkrjha567/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li className="connect-item">
              <span className="sparkle">✦</span>
              <a
                href="https://x.com/__harshbhardwaj"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>

            <li className="connect-item">
              <span className="sparkle">✦</span>
              <a
                href="https://github.com/harshguarav"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="contact">
          <p className="label">Get in touch</p>

          <ul className="contact-list">
            <li data-cursor="call" className="contact-item">
              <span>+91 8810381930</span>
            </li>

            <li data-cursor="email" className="contact-item">
              <span>harshkrjha567@gmail.com</span>
            </li>

            <li className="contact-item muted">India</li>
          </ul>
        </div>
      </div>

      {/* OPTIONAL BIG TEXT */}
      {/*
      <div className="footer-marquee">
        <h1 ref={bigTextRef}>HKJ Portfolio</h1>
      </div>
      */}
    </footer>
  );
}