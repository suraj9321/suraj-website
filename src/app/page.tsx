import Image from "next/image";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Portrait from "@/components/Portrait";
import { profile, skills, education, patents } from "@/content";

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <Reveal trigger="mount" delay={0.05}>
              <h1>{profile.name}</h1>
            </Reveal>
            <Reveal trigger="mount" delay={0.2}>
              <p className="lede">{profile.lede}</p>
            </Reveal>
            <Reveal trigger="mount" delay={0.35}>
              <div className="about">
                {profile.about.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <Portrait>
            <Image
              src="/assets/suraj.jpg"
              alt="Suraj Sah in front of the Lower Manhattan skyline"
              width={800}
              height={800}
              priority
              sizes="(max-width: 820px) 220px, 320px"
            />
          </Portrait>
        </div>
      </section>

      <section className="section" id="experience">
        <h2>Experience</h2>
        <Timeline />
      </section>

      <section className="section" id="patents">
        <h2>Patents</h2>
        <ul className="patents">
          {patents.map((pt) => (
            <Reveal key={pt.number} as="li">
              <div className="proj-head">
                <h3>
                  <a href={pt.href}>{pt.title}</a>
                </h3>
                <span className="meta">{pt.number}</span>
              </div>
              <p className="stack">
                {pt.assignee}, {pt.when}
              </p>
              <p>{pt.blurb}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <Projects />
      </section>

      <section className="section" id="skills">
        <h2>Skills</h2>
        <Reveal>
          <dl className="skills">
            {skills.map(([k, v]) => (
              <Reveal key={k} as="div" style={{ display: "contents" }}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </Reveal>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="section" id="education">
        <h2>Education</h2>
        <ul className="edu">
          {education.map((e, i) => (
            <Reveal key={e.school} as="li" delay={i * 0.1}>
              <strong>{e.school}</strong>
              <span>{e.degree}</span>
              <span className="meta">{e.when}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section" id="contact">
        <h2>Get in touch</h2>
        <Reveal>
          <p>The fastest way is email. I&apos;m also on LinkedIn and GitHub.</p>
          <p className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin}>linkedin.com/in/surajsahiitkgp</a>
            <a href={profile.github}>github.com/suraj9321</a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
