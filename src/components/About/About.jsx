import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <h2>👩 About Me</h2>

      <div className="about-content">

        <figure className="profile-figure">

          <img
            src="/passport.jpeg"
            alt="Chinmaya"
          />

          <figcaption>
            Chinmaya - Student
          </figcaption>

        </figure>

        <div className="about-text">

          <p>
            I love building things on the web. I am currently
            learning HTML, CSS, JavaScript and React.
          </p>

          <p>
            I am continuously improving my programming and
            web development skills by working on small projects.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;