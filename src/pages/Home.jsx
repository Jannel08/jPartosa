import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import InsightPanel from "../components/InsightPanel.jsx";
import { skills } from "../data/skills.js";
import { toolCategories } from "../data/tools.js";

const SKILL_DEFAULT = {
  title: "Select a skill",
  desc: "Click any chip on the left to see detailed technical context and practical usage.",
};
const TOOL_DEFAULT = {
  title: "Select a tool",
  desc: "Click any tool card above to view workflow context and practical application.",
};

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeTool, setActiveTool] = useState(null);

  useEffect(() => {
    document.title = "Jannel Partosa | Frontend Developer & UI Designer";
  }, []);

  return (
    <>
      <main className="container">
        <section className="hero">
          <span className="badge">Open to Junior Frontend Roles</span>
          <h1>Crafting simple, intuitive web experiences.</h1>
          <p className="lead">
            I’m a Frontend Developer focusing on clean code, responsive
            interfaces, and accessible design principles.
          </p>
          <div className="cta">
            <Link className="btn" to="/projects">
              View Projects
            </Link>
            <Link className="btn ghost" to="/contact">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Core Skills Section */}
        <section className="section">
          <h2 className="section-title">Core Skills</h2>
          <p className="section-subtext">
            Click on any skill to explore technical context.
          </p>

          <div className="skills-container">
            <div className="chips">
              {skills.map((skill) => (
                <span
                  key={skill.title}
                  className={`skill-chip${
                    activeSkill?.title === skill.title ? " active" : ""
                  }`}
                  onClick={() => setActiveSkill(skill)}
                >
                  {skill.title}
                </span>
              ))}
            </div>

            <InsightPanel
              badge="Skill Insights"
              title={activeSkill ? activeSkill.title : SKILL_DEFAULT.title}
              description={activeSkill ? activeSkill.desc : SKILL_DEFAULT.desc}
              onClose={() => setActiveSkill(null)}
            />
          </div>
        </section>

        {/* Tools & Workflow Section */}
        <section className="section">
          <h2 className="section-title">Tools & Workflow</h2>
          <p className="section-subtext">
            Click on any tool to see my practical usage and workflow
            integration.
          </p>

          <div className="tools-container">
            <div className="tools-categories">
              {toolCategories.map((cat) => (
                <div className="tool-category" key={cat.name}>
                  <h3 className="category-subtitle">{cat.name}</h3>
                  <div className="tools-grid">
                    {cat.tools.map((tool) => (
                      <div
                        key={tool.title}
                        className={`tool-card${
                          activeTool?.title === tool.title ? " active" : ""
                        }`}
                        onClick={() => setActiveTool(tool)}
                      >
                        <img
                          src={tool.icon}
                          alt={tool.title}
                          className="tool-icon"
                        />
                        <span className="tool-name">{tool.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <InsightPanel
              badge="Tool Insights"
              title={activeTool ? activeTool.title : TOOL_DEFAULT.title}
              description={activeTool ? activeTool.desc : TOOL_DEFAULT.desc}
              onClose={() => setActiveTool(null)}
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Interests & Hobbies</h2>
          <p className="body-text">
            Beyond coding, I spend my time exploring mobile photography,
            minimalism in graphic design, coffee brewing techniques, and
            micro-interaction animations.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
