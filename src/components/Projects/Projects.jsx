import "./Projects.css";

function Projects() {

  const projects = [
    {
      id: 1,
      name: "🧮 Simple Calculator",
      image: "/calculator.png",
      description:
        "A basic calculator that performs common mathematical operations such as addition, subtraction, multiplication and division.",
      tech: ["HTML", "CSS", "JavaScript"]
    },

    {
      id: 2,
      name: "⛅ Weather App",
      image: "/weather1.jpeg",
      description:
        "A weather dashboard that displays weather information using an API.",
      tech: ["React", "API"]
    },

    {
      id: 3,
      name: "📝 To-Do List",
      image: "/list.jpg",
      description:
        "A simple task management application that allows users to add, complete and remove daily tasks.",
      tech: ["JavaScript", "CSS"]
    },

    {
      id: 4,
      name: "💻 Student Registration Form",
      image: "/form.jpg",
      description:
        "A student registration form designed using HTML and CSS with student details, course selection and contact information.",
      tech: ["HTML", "CSS"]
    }
  ];

  return (
    <section id="projects" className="projects-section">

      <h2>My Projects</h2>

      <div className="project-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-card-body">

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-tags">

                {project.tech.map((technology) => (

                  <span
                    className="tag"
                    key={technology}
                  >
                    {technology}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a href="#" className="btn btn-primary">
                  Live Demo
                </a>

                <a href="#" className="btn btn-secondary">
                  GitHub
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;