import HeroBlob from "../components/HeroBlob/HeroBlob";
import { useEffect, useRef } from "react";
import Stack from "./Stack";
import Work from "./Work";
import About from "./About";
import "./Home.css";
import Education from "./Education";
import Footer from "./Footer";

export default function Home() {
  const roleRef = useRef(null);

  useEffect(() => {
    const roles = [
      "Backend Developer",
      "Frontend Developer",
      "Software Developer",
      "Full-Stack Developer",
      "Tech Enthusiast",
    ];
    let index = 0;

    const interval = setInterval(() => {
      if (!roleRef.current) return;

      roleRef.current.style.opacity = 0;
      roleRef.current.style.transform = "translateY(-6px)";

      setTimeout(() => {
        roleRef.current.textContent = roles[index];
        roleRef.current.style.opacity = 1;
        roleRef.current.style.transform = "translateY(0)";
        index = (index + 1) % roles.length;
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero-section"
        style={{
          position: "relative",
          height: "100vh",
          background: "#F0EDE5",
          overflow: "hidden",
        }}
      >
        <HeroBlob />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span className="role-text" ref={roleRef}></span>
          <div className="hero-name-wrapper cursor-hover">
            <h1 className="hero-name base">Harsh Kumar Jha</h1>
            <h1 className="hero-name magnified"></h1>
          </div>
          <p className="hero-tagline">
            Engineering reliability into chaos.
          </p>
         
        </div>
        
      </section>

      {/* Stack Section */}
      
      <Work/> 
      <About/> 
      <Education/>
      <Stack />
      <Footer/>
    </>
  );
}