import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState("");
  const { location } = useRouterState();
  /**
   * Toggles class on body
   */
  const toggleNav = () => {
    const activeState = isActive === "" ? "is-active" : "";
    setIsActive(activeState);
    document.body.classList.toggle("nav-open");
  };

  // Set body id based on current path for page-specific styling
  useEffect(() => {
    const pName = location.pathname.substring(1, location.pathname.length);
    const bodyId = pName === "" ? "home" : pName;
    document.body.setAttribute("id", bodyId);
  }, [location.pathname]);

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
            <span>Rich</span>
            <span>Hauck</span>
          </Link>
        </grid-col>
        <grid-col span="8">
          <nav id="primary-nav">
            <div id="inner">
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
