import { SITE_TITLE } from "#/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="main-footer">
      <grid-row>
        <grid-col span="6">
          <ul id="social-links">
            <li>
              <a href="https://www.linkedin.com/in/richhauck/" target="_blank">
                <img src="/images/linkedin.svg" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/richhauck">
                <img src="/images/dribbble.svg" alt="Dribbble" />
              </a>
            </li>
          </ul>
        </grid-col>
        <grid-col span="6" className="text-right">
          <p>
            &copy; {year} {SITE_TITLE}. All rights reserved.
          </p>
        </grid-col>
      </grid-row>
    </footer>
  );
}
