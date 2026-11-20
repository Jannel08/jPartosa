import { Link } from "react-router-dom";

export default function Footer({
  text = "© 2026 Jannel Partosa. Built for portfolio submission.",
  links = [
    { to: "/projects", label: "Work" },
    { to: "/contact", label: "Contact" },
  ],
}) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{text}</p>
        <div className="footer-nav">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
