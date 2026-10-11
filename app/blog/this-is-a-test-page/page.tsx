import type { Metadata } from 'next';
import HypeButton from './HypeButton';

export const metadata: Metadata = {
  title: 'This is a test page — Annabel Flatland',
  description: 'Hi, i’m starting a blog! lets see if we can get this on my site',
  openGraph: {
    title: 'This is a test page — Annabel Flatland',
    description: 'The first note on Annabel Flatland’s blog.',
  },
};

export default function TestPost() {
  return (
    <main className="post-page">
      <nav className="site-nav blog-page-nav" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Annabel Flatland, home"><span>AF</span><i /></a>
        <div className="nav-links"><a href="/#work">Work</a><a href="/blog">Blog</a><a href="/#about">About</a></div>
        <a className="nav-github" href="/blog">All posts <span aria-hidden="true">↗</span></a>
      </nav>

      <article>
        <header className="post-header">
          <div className="post-meta"><span>Notes</span><span>Oct 10, 2026</span><span>1 min read</span></div>
          <h1>This is a<br /><em>test page.</em></h1>
        </header>

        <div className="post-body">
          <p className="post-lede">Hi, i’m starting a blog! lets see if we can get this on my site</p>
          <HypeButton />
        </div>

        <footer className="post-footer">
          <a href="/blog">← All posts</a>
          <a href="/">Home →</a>
        </footer>
      </article>
    </main>
  );
}
