import { projects } from "../data/content";

export default function ProjectTab() {
  return (
    <div className="projects">
      {projects.map((p) => (
        <article className="proj" key={p.name}>
          <header className="proj-head">
            <img src={p.logo} alt="" className="proj-logo" />
            <div>
              <h2>{p.name}</h2>
              <p className="proj-meta">
                📅 {p.period}
                <br />
                👷 {p.team}
              </p>
            </div>
          </header>

          <p className="proj-desc">{p.desc}</p>

          <h3 className="proj-sub">기술 스택 🔨</h3>
          <div className="chips">
            {p.stack.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>

          <h3 className="proj-sub">담당한 페이지 🔧</h3>
          <ul className="proj-roles">
            {p.roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <div className="proj-links">
            {p.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="ghost-btn"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
