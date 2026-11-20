import { useEffect } from "react";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  useEffect(() => {
    document.title = "Work | Jannel Partosa";
  }, []);

  return (
    <>
      <main className="container">
        <h1>Selected Projects</h1>
        <p className="lead">
          A collection of website builds and mobile product work that reflects
          how I think, design, and ship.
        </p>

        <div id="projectsGrid" className="grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <div className="card-tag">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                  marginTop: "auto",
                }}
              >
                <a
                  className="card-link"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.type === "Mobile" ? "View App →" : "Visit Site →"}
                </a>
                <a
                  className="card-link"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer
        text="© 2026 Jannel Partosa. All rights reserved."
        links={[
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}
