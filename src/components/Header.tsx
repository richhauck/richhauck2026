import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState("");
  /**
   * Toggles class on body
   */
  const toggleNav = () => {
    const activeState = isActive === "" ? "is-active" : "";
    setIsActive(activeState);
    document.body.classList.toggle("nav-open");
  };

  return (
    <header id="main-header">
      <button
        id="nav-toggle"
        className={`hamburger md:invisible hamburger--slider ${isActive}`}
        type="button"
        onClick={toggleNav}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <grid-row>
        <grid-col span="4">
          <Link to="/" id="logo">
            <span>Rich</span>Hauck
          </Link>
        </grid-col>
        <grid-col span="8">
          <nav id="main-nav">
            <div style={{ position: "relative" }}>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="nav-link"
                    activeProps={{ className: "nav-link is-active" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="nav-link"
                    activeProps={{ className: "nav-link is-active" }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/illustration"
                    className="nav-link"
                    activeProps={{ className: "nav-link is-active" }}
                  >
                    Illustration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/photography"
                    className="nav-link"
                    activeProps={{ className: "nav-link is-active" }}
                  >
                    Photography
                  </Link>
                </li>
              </ul>
              <div id="highlight"></div>
            </div>
          </nav>
        </grid-col>
      </grid-row>
    </header>
  );
}
