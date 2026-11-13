import React, { useEffect } from 'react';
import './not-found.css';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Hlaing Min Htun';
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return <div className="not-found-page">
    <header className="not-found-header"><a className="wordmark" href="/" aria-label="Hlaing Min Htun home">Hlaing Min Htun<span>.</span></a><a className="not-found-header-link" href="/#contact">Let's connect <span aria-hidden="true">↗</span></a></header>
    <main className="not-found-main" id="main">
      <div className="not-found-art" aria-hidden="true"><span className="not-found-orbit"/><span className="not-found-spark">✧</span><span className="not-found-number">4<span>0</span>4</span><span className="not-found-small-spark">✦</span><span className="not-found-art-note">A SMALL DETOUR.</span></div>
      <p className="eyebrow not-found-label"><span className="status-dot"/> PAGE NOT FOUND</p>
      <h1>A little off the <span className="serif">path.</span></h1>
      <p className="not-found-description">The page you're looking for may have moved, or the link may be incorrect. Let's get you back to something meaningful.</p>
      <div className="not-found-actions"><a className="button primary" href="/">Back to home <span aria-hidden="true">↗</span></a><a className="text-link" href="/#projects">Explore my work <span aria-hidden="true">↗</span></a></div>
      <p className="not-found-help">Looking to start a conversation? <a href="/#contact">Get in touch.</a></p>
    </main>
    <footer className="not-found-footer"><span>© {new Date().getFullYear()} Hlaing Min Htun.</span><span>Clarity. Collaboration. A way forward.</span></footer>
  </div>;
}
