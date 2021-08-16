import { links } from "../data/links";
import { useEffect } from "react";
import gsap, { Back } from "gsap";

const Footer = () => {
  useEffect(() => {
    gsap.from(".creator-name span", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: Back,
      stagger: 0.5,
    });
  }, []);

  return (
    <footer>
      <h2 className="creator-name">
        <span>Made by</span>
        <span>Ventsislav Borislavov</span>
      </h2>
      <div className="links">
        {links.map((l, idx) => (
          <a key={idx} href={l.link}>
            <i className={l.className} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
