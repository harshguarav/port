import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiZod,
} from "react-icons/si";
import "./Stack.css";

const row1 = [
    { name: "NodeJS", icon: <FaNodeJs />, font: "inter" },
  { name: "Prisma", icon: <SiPrisma />, font: "mono italic" },
  { name: "Zod", icon: <SiZod />, font: "mono" },
  { name: "Git", icon: <FaGitAlt />, font: "italic" },
  { name: "GitHub", icon: <FaGithub />, font: "space italic" },
  { name: "Docker", icon: <FaDocker />, font: "mono" },
  { name: "AWS", icon: <FaAws />, font: "inter italic" },
  { name: "Linux", icon: <FaLinux />, font: "mono" },
  { name: "ReactJS", icon: <FaReact />, font: "inter italic" },
  { name: "NextJS", icon: <SiNextdotjs />, font: "space" },
  { name: "TypeScript", icon: <SiTypescript />, font: "mono" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, font: "italic" },
  { name: "MongoDB", icon: <SiMongodb />, font: "serif" },
  { name: "PostgreSQL", icon: <SiPostgresql />, font: "serif italic" },
  

 ];
const row2 = [
    
  { name: "ReactJS", icon: <FaReact />, font: "inter italic" },
  { name: "NextJS", icon: <SiNextdotjs />, font: "space" },
  { name: "TypeScript", icon: <SiTypescript />, font: "mono" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, font: "italic" },
  { name: "MongoDB", icon: <SiMongodb />, font: "serif" },
  { name: "PostgreSQL", icon: <SiPostgresql />, font: "serif italic" },
  { name: "NodeJS", icon: <FaNodeJs />, font: "inter" },
  { name: "Prisma", icon: <SiPrisma />, font: "mono italic" },
  
  { name: "Git", icon: <FaGitAlt />, font: "italic" },
  { name: "GitHub", icon: <FaGithub />, font: "space italic" },
  { name: "Docker", icon: <FaDocker />, font: "mono" },
  { name: "AWS", icon: <FaAws />, font: "inter italic" },
  { name: "Linux", icon: <FaLinux />, font: "mono" },


 ];

export default function Stack() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let speed = 0.5;
    let direction = 1;

    const ticker = () => {
      if (!row1Ref.current || !row2Ref.current) return;

      gsap.set(row1Ref.current, { x: `+=${speed * direction}` });
      gsap.set(row2Ref.current, { x: `+=${-speed * direction}` });
    };

    gsap.ticker.add(ticker);

    // 🔁 Flip direction every 5 seconds
    const interval = setInterval(() => {
      direction *= -1;
    }, 5000);

    return () => {
      gsap.ticker.remove(ticker);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="stack-section" className="stack-section">
      <span className="tech-label">✦ Tech Stack</span>
      <h2 className="stack-heading">✦ Technologies worth learning</h2>

      <div className="marquee">
        <div className="marquee-row" ref={row1Ref}>
          {[...row1, ...row1].map((item, i) => (
            <div className={`tech ${item.font}`} key={i}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="marquee-row reverse" ref={row2Ref}>
          {[...row2, ...row2].map((item, i) => (
            <div className={`tech ${item.font}`} key={i}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}