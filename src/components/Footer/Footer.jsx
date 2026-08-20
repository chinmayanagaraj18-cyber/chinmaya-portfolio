import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <p>
        © {year} Chinmaya. All rights reserved.
      </p>

      <nav aria-label="Social links">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </nav>

    </footer>
  );
}

export default Footer;