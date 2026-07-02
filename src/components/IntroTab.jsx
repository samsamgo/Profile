import { useState } from "react";
import { profile, getAge, stacks, values, education } from "../data/content";

export default function IntroTab() {
  const [statsFailed, setStatsFailed] = useState(false);

  const facts = [
    { label: "이름", value: profile.nameKo },
    { label: "생년월일", value: `${profile.birth} (만 ${getAge()}세)` },
    { label: "이메일", value: profile.email, href: `mailto:${profile.email}` },
    { label: "학교", value: profile.school },
  ];

  return (
    <div className="intro">
      <section className="panel">
        <h2 className="panel-title">🙋 소개</h2>
        <dl className="facts">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.href ? <a href={f.href}>{f.value}</a> : f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="panel">
        <h2 className="panel-title">🔨 기술 스택</h2>
        <div className="stack-grid">
          <div className="stack-list">
            {stacks.map((s) => (
              <div className="stack-group" key={s.label}>
                <h3>
                  <span aria-hidden="true">{s.icon}</span> {s.label}
                </h3>
                <div className="chips">
                  {s.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {!statsFailed && (
            <div className="stack-stats">
              <img
                src={profile.statsImg}
                alt="GitHub 언어 사용 통계"
                loading="lazy"
                onError={() => setStatsFailed(true)}
              />
              <p>GitHub 언어 통계 (실시간)</p>
            </div>
          )}
        </div>
      </section>

      <section className="panel">
        <h2 className="panel-title">💎 가치관</h2>
        <div className="value-row">
          {values.map((v, i) => (
            <article className="value-item" key={v.title}>
              <span className="value-num">0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2 className="panel-title">🎓 교육</h2>
        <div className="edu">
          <div className="edu-head">
            <h3>{education.name}</h3>
            <span className="edu-period">📅 {education.period}</span>
          </div>
          <p className="edu-course">{education.course}</p>
          <ul className="edu-list">
            {education.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
