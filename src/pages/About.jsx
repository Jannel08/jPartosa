import { useEffect } from "react";
import Footer from "../components/Footer.jsx";
import profile from "../assets/profile.jpg";

export default function About() {
  useEffect(() => {
    document.title = "About | Jannel Partosa";
    // About page has its own look (see about.css), scoped to this body class
    document.body.classList.add("page-about");
    return () => document.body.classList.remove("page-about");
  }, []);

  return (
    <>
      
      <div className="bg-overlay"></div>

      <main className="container">
        <article className="glass-card">
          <div className="profile-header">
            <div className="profile-img-wrapper">
              <img src={profile} alt="Jannel Partosa" className="profile-img" />
            </div>
            <div className="profile-info">
              <h1>About Me</h1>
              <p className="lead">Jannel Partosa</p>
            </div>
          </div>

          <div className="info-grid">
            <section className="info-card">
              <h3>Education & Background</h3>
              <p className="body-text">
                I hold a Bachelor of Science in Computer Science. My academic
                journey provided me with a strong theoretical foundation in
                software engineering, data structures, algorithms, and web
                technologies.
              </p>
            </section>

            <section className="info-card">
              <h3>Professional Approach</h3>
              <p className="body-text">
                I focus on writing clean, semantic HTML, modular CSS, and
                structured JavaScript to create web applications that are
                visually refined, responsive, and performant. I value clear
                documentation, systematic file management, and clean user
                experience design.
              </p>
            </section>

            <section className="info-card">
              <h3>Continuous Learning</h3>
              <p className="body-text">
                Building upon my CS degree, I am actively expanding my frontend
                skill set into modern JavaScript frameworks, component-driven UI
                design, and web accessibility (a11y) standards.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
