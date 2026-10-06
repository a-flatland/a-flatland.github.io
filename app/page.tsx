const projects = [
  {
    number: '01',
    title: 'Agent Platform',
    kind: 'AI infrastructure',
    description:
      'A lightweight platform for uploading, deploying, and invoking Python agents in isolated sandboxes—with streaming output and a minimal web interface.',
    stack: ['Python', 'FastAPI', 'Modal'],
    href: 'https://github.com/a-flatland/agent-platform',
    accent: 'project-orange',
  },
  {
    number: '02',
    title: 'Arctic Sea Ice Drift',
    kind: 'Research',
    description:
      'An undergraduate thesis using geospatial trajectory clustering to surface local movement patterns in Arctic sea ice.',
    stack: ['Geospatial data', 'Clustering', 'Research'],
    href: 'https://www.linkedin.com/in/annabel-flatland',
    accent: 'project-blue',
  },
  {
    number: '03',
    title: 'Mogibot',
    kind: 'Language learning',
    description:
      'An LLM-powered language learning experience built from design through deployment, pairing conversational AI with a practical learning loop.',
    stack: ['Django', 'OpenAI API', 'Docker'],
    href: 'https://github.com/aflatland/glow.ai',
    accent: 'project-lime',
  },
  {
    number: '04',
    title: 'Ice Lab Robot',
    kind: 'Voice AI',
    description:
      'A voice assistant for a cryosphere research lab—part useful field guide, part spirited lab advocate.',
    stack: ['Python', 'Voice AI', 'Cryosphere'],
    href: 'https://github.com/aflatland/Ice-Lab-Robot',
    accent: 'project-pink',
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Annabel Flatland, home">
          <span>AF</span>
          <i />
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-github" href="https://github.com/a-flatland" target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-1">
            Software engineer <span>•</span> Seattle, WA
          </p>
          <h1 className="reveal reveal-2">
            I build things that
            <em> think, move &amp; matter.</em>
          </h1>
          <p className="hero-intro reveal reveal-3">
            I&apos;m Annabel—a software engineer working at the intersection of
            intelligent systems, curious interfaces, and the physical world.
          </p>
          <a className="hero-link reveal reveal-3" href="#work">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-art reveal reveal-2" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-disc">
            <span className="disc-copy">AI / CODE / EARTH / 2026 / </span>
            <strong>AF</strong>
          </div>
          <div className="code-note">
            <span>current curiosity</span>
            <strong>making agents useful</strong>
          </div>
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✦</div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of interest">
        <div>
          ARTIFICIAL INTELLIGENCE <i>✦</i> SOFTWARE ENGINEERING <i>✦</i>{' '}
          GEOSPATIAL DATA <i>✦</i> PLAYFUL INTERFACES <i>✦</i> ARTIFICIAL
          INTELLIGENCE <i>✦</i> SOFTWARE ENGINEERING <i>✦</i>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p>Selected work</p>
          <span>2023—Now</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.kind}</span>
                <Arrow />
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-marker" aria-hidden="true">
          <span>ABOUT</span>
          <strong>✳</strong>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A little context</p>
          <h2>Computer science brain,<br /> geoscience heart.</h2>
          <div className="about-columns">
            <p>
              I like ambitious technical problems with a human center. My work
              moves between AI infrastructure, product engineering, and tools
              that make complex systems feel approachable.
            </p>
            <p>
              Before building software full-time, I studied computer science
              and geosciences at Williams College, researched Arctic sea ice,
              and learned that the best questions rarely fit inside one field.
            </p>
          </div>
          <div className="principles" aria-label="Working principles">
            <span>01 / Make it useful</span>
            <span>02 / Stay curious</span>
            <span>03 / Sweat the details</span>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p className="footer-kicker">Have an interesting problem?</p>
        <h2>Let&apos;s make something <em>good.</em></h2>
        <div className="footer-links">
          <a href="https://github.com/a-flatland" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="https://www.linkedin.com/in/annabel-flatland" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </div>
        <div className="footer-bottom">
          <span>Annabel Flatland</span>
          <span>Designed &amp; built with care</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
