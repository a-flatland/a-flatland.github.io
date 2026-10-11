import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Annabel Flatland',
  description: 'Notes on software, AI, research, and whatever Annabel is curious about next.',
  openGraph: {
    title: 'Blog — Annabel Flatland',
    description: 'Notes on software, AI, research, and whatever comes next.',
  },
};

export default function BlogIndex() {
  return (
    <main className="blog-page-shell">
      <nav className="site-nav blog-page-nav" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Annabel Flatland, home"><span>AF</span><i /></a>
        <div className="nav-links"><a href="/#work">Work</a><a href="/blog">Blog</a><a href="/#about">About</a></div>
        <a className="nav-github" href="/">Home <span aria-hidden="true">↗</span></a>
      </nav>

      <header className="blog-index-hero">
        <p className="eyebrow">Field notes / 2026</p>
        <h1>Small notes about<br /><em>big curiosities.</em></h1>
        <p>Software, AI, research, experiments, and the occasional idea that refuses to stay in a notebook.</p>
      </header>

      <section className="blog-index-list" aria-label="Blog posts">
        <a className="blog-index-row" href="/blog/this-is-a-test-page">
          <span className="blog-index-number">01</span>
          <div><p>Oct 10, 2026 · Notes</p><h2>This is a test page</h2></div>
          <p className="blog-index-excerpt">Hi, i’m starting a blog! lets see if we can get this on my site</p>
          <span className="blog-index-arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="blog-mini-footer">
        <span>Annabel Flatland</span><a href="/">Back home →</a>
      </footer>
    </main>
  );
}
