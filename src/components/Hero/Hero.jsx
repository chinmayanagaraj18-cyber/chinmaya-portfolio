import "./Hero.css";

function Hero() {

  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <section className="hero-section" id="hero">

      <h1>
        {greeting}, I'm Chinmaya 🙋‍♀️
      </h1>

      <p>
        I am currently pursuing my 2nd year of Bachelor of
        Engineering in Information Science and Engineering at
        M S Ramaiah University of Applied Sciences, Bangalore.
      </p>

      <div className="hero-buttons">

        <a href="#projects" className="btn btn-primary">
          View My Projects
        </a>

        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>

      </div>

    </section>
  );
}

export default Hero;