import {
  profile,
  about,
  experience,
  projects,
  skills,
  education,
  achievements,
  interests,
} from "./data";

export default function Home() {
  return (
    <main className="wrap">
      {/* hero */}
      <header className="hero">
        <p className="prompt">whoami</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-links">
          <a className="btn" href={`mailto:${profile.email}`}>
            email
          </a>
          <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a className="btn" href={profile.links.leetcode} target="_blank" rel="noreferrer">
            leetcode
          </a>
        </div>
      </header>

      {/* about */}
      <section className="about">
        <p className="label">about</p>
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* experience */}
      <section id="work">
        <p className="label">work</p>
        {experience.map((xp) => (
          <div className="xp" key={xp.company}>
            <div className="xp-head">
              <span>
                <span className="xp-role">{xp.role}</span>
                {" @ "}
                <span className="xp-co">{xp.company}</span>
              </span>
              <span className="xp-period">{xp.period}</span>
            </div>
            <ul>
              {xp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* projects */}
      <section id="projects">
        <p className="label">projects</p>
        {projects.map((proj) => (
          <div className="proj" key={proj.name}>
            <div className="proj-head">
              <span className="proj-name">{proj.name}</span>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer">
                  visit ↗
                </a>
              )}
            </div>
            <p className="proj-blurb">{proj.blurb}</p>
            <ul>
              {proj.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <div className="tags">
              {proj.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* skills */}
      <section>
        <p className="label">skills</p>
        {Object.entries(skills).map(([key, vals]) => (
          <div className="skill-row" key={key}>
            <span className="skill-key">{key}</span>
            <div className="skill-vals">
              {vals.map((v) => (
                <span className="tag" key={v}>
                  {v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* education + achievements */}
      <section>
        <div className="cols">
          <div>
            <p className="label">education</p>
            <div className="edu-list">
              {education.map((e) => (
                <div className="edu-item" key={e.school}>
                  <div className="edu-school">{e.school}</div>
                  <div className="edu-detail">{e.detail}</div>
                  {e.period && <div className="edu-period">{e.period}</div>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="label">achievements</p>
            <ul>
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* interests + contact */}
      <section>
        <div className="cols">
          <div>
            <p className="label">interests</p>
            <ul>
              {interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">contact</p>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
