import { projects } from "@/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <ul className="projects">
      {projects.map((p, i) => (
        <Reveal key={p.title} as="li" delay={Math.min(i, 3) * 0.06}>
          <div className="proj-head">
            <h3>{p.href ? <a href={p.href}>{p.title}</a> : p.title}</h3>
            <span className="meta">{p.meta}</span>
          </div>
          <p>{p.blurb}</p>
        </Reveal>
      ))}
    </ul>
  );
}
