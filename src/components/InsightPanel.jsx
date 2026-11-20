// Shared detail panel used by both the Skills and Tools sections
export default function InsightPanel({ badge, title, description, onClose }) {
  return (
    <div className="skill-panel">
      <button className="panel-close" aria-label="Close panel" onClick={onClose}>
        &times;
      </button>
      <div className="panel-header">
        <span className="panel-badge">{badge}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}
