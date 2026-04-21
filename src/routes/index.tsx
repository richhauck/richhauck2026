import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const rolesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rolesRef.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll("span"));
    const total = spans.length;

    gsap.set(spans, { display: "none", opacity: 0 });
    gsap.set(spans[0], { display: "inline", opacity: 1 });

    const tl = gsap.timeline({ repeat: -1 });
    spans.forEach((span, i) => {
      const next = spans[(i + 1) % total];
      tl.to(span, { opacity: 0, duration: 0.5, delay: 3 })
        .set(span, { display: "none" })
        .set(next, { display: "inline" })
        .to(next, { opacity: 1, duration: 0.5 });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section>
      <div id="intro">
        <div style={{ textAlign: "center" }}>
          <img
            src="images/rich-hauck.avif"
            alt="Rich Hauck"
            style={{ borderRadius: "50%", maxWidth: "25rem", margin: "0 auto" }}
          />
        </div>
        <div id="intro-text">
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
              I've enjoyed wearing a few hats in a career that's spanned over
              over 25 years. My work has taken me from agency work, to Wall
              Street, and then to consulting, all while keeping a foot in the
              classroom to give back. <Link to="/about">More...</Link>
            </p>
          </div>
        </div>
      </div>
      {/*<grid-container
        style={{
          maxWidth: "1200px",
          minHeight: "400px",
          padding: "5rem",
          margin: "0 auto",
        }}
      >
        <grid-row>
          <grid-col span="5">
            <img
              src="images/rich-hauck.avif"
              alt="Rich Hauck"
              style={{ borderRadius: "50%", maxWidth: "25rem" }}
            />
          </grid-col>
          <grid-col span="7">
            <div
              id="intro"
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <div style={{ maxWidth: "650px" }}>
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
                  I've enjoyed wearing a few hats in a career that's spanned
                  over over 25 years. My work has taken me from agency work, to
                  Wall Street, and then to consulting, all while keeping a foot
                  in the classroom to give back.{" "}
                  <Link to="/about">More...</Link>
                </p>
              </div>
            </div>
          </grid-col>
        </grid-row>
      </grid-container>*/}
    </section>
  );
}
