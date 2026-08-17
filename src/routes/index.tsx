import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const rolesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);
  const images = [
    "rich-hauck.avif",
    "developer.avif",
    "photographer.avif",
    "teacher.avif",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const updateImage = (nextImage: string) => {
    const imgEl = imageRef.current;
    if (!imgEl) return;

    gsap.set(imgEl, { visibility: "hidden", opacity: 0 });
    setCurrentImage(nextImage);

    requestAnimationFrame(() => {
      gsap.set(imgEl, { visibility: "visible" });
      gsap.to(imgEl, { opacity: 1, duration: 0.5, ease: "power1.inOut" });
    });
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const el = rolesRef.current;
    const imgEl = imageRef.current;
    if (!el || !imgEl) return;

    const spans = Array.from(el.querySelectorAll("span"));
    const total = spans.length;

    gsap.set(spans, { display: "none", opacity: 0 });
    gsap.set(spans[0], { display: "inline", opacity: 1 });
    gsap.set(imgEl, { opacity: 1, visibility: "visible" });

    const tl = gsap.timeline({ repeat: -1 });
    spans.forEach((span, i) => {
      const nextRole = spans[(i + 1) % total];
      const nextImage = images[(i + 1) % images.length];

      tl.to(span, { opacity: 0, duration: 0.5, delay: 5 })
        .set(span, { display: "none" })
        .to(imgEl, { opacity: 0, duration: 0.35, ease: "power1.inOut" })
        .call(() => updateImage(nextImage))
        .set(nextRole, { display: "inline" })
        .to(nextRole, { opacity: 1, duration: 0.5 });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="element-fade"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        id="intro"
        className="element-fade"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(1rem)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            borderRadius: "50%",
            backgroundColor: "#000",
          }}
        >
          <img
            ref={imageRef}
            src={`images/${currentImage}`}
            alt="Rich Hauck"
            style={{
              borderRadius: "50%",
              maxWidth: "25rem",
              margin: "0 auto",
              display: "block",
            }}
          />
        </div>
        <div
          id="intro-text"
          className="element-fade"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(1rem)",
            transitionDelay: "0.3s",
          }}
        >
          <div>
            <h1 style={{ fontSize: "300%", lineHeight: "100%" }}>
              Hi! I'm a{" "}
              <div id="animated-roles" ref={rolesRef}>
                <span>designer.</span>
                <span>developer.</span>
                <span>photographer.</span>
                <span>teacher.</span>
              </div>
            </h1>
            <p>
              I've worn a few hats in a career that's spanned over over 25
              years. My work has taken me from agency work to Wall Street and
              then to consulting, all while keeping a foot in the classroom to
              give back. <Link to="/about">More...</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
