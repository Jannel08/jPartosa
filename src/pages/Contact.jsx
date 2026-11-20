import { useEffect } from "react";
import Footer from "../components/Footer.jsx";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Jannel";
  }, []);

  return (
    <>
      <main className="container">
        <section className="content-block">
          <h1>Let's Connect</h1>
          <p className="lead">
            Feel free to reach out for collaborations, project inquiries, or job
            opportunities.
          </p>

          <div className="contact-card">
            <ul className="contact-links">
              <li>
                <span className="label">Email</span>
                <a href="mailto:partosajannel5@gmail.com">
                  partosajannel5@gmail.com
                </a>
              </li>
              <li>
                <span className="label">Phone</span>
                <a href="tel:+639000000000">+63 900 000 0000</a>
              </li>
              <li>
                <span className="label">Facebook</span>
                <a
                  href="https://www.facebook.com/jannel.partosa.2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/jannel.partosa.2024
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer
        links={[
          { to: "/projects", label: "Work" },
          { to: "/", label: "Home" },
        ]}
      />
    </>
  );
}
