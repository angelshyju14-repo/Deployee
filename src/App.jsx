import React, { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const projects = [
    {
      id: 1,
      title: 'Aura Design System',
      category: 'Design Systems',
      tagClass: 'tag-sage',
      year: '2026',
      summary: 'A minimalist component architecture built for modern editorial and media platforms.',
      detail: 'Aura features tokens for fluid typography, light & dark mode surfaces, and accessible focus indicators across 40+ atomic components.',
      link: 'https://github.com/angelshyju14-repo/Deployee'
    },
    {
      id: 2,
      title: 'Vite Deploy Engine',
      category: 'Tooling',
      tagClass: 'tag-rose',
      year: '2026',
      summary: 'Automated static site generator & GitHub Pages publishing workflow for Windows developers.',
      detail: 'Includes zero-config base path resolution, automated gh-pages branch deployment scripts, and instant dev server previews.',
      link: 'https://github.com/angelshyju14-repo/Deployee'
    },
    {
      id: 3,
      title: 'Monolith Studio',
      category: 'Web Apps',
      tagClass: 'tag-amber',
      year: '2025',
      summary: 'High-performance digital workspace tailored for writers, creators, and visual artists.',
      detail: 'Monolith provides real-time distraction-free writing, rich markdown exports, and seamless sync across cloud repositories.',
      link: 'https://github.com/angelshyju14-repo/Deployee'
    }
  ];

  const articles = [
    {
      id: 1,
      date: 'AUG 2026',
      title: 'The Art of Editorial Web Aesthetics',
      readTime: '4 min read',
      excerpt: 'Exploring how serif typography, whitespace, and soft pastel palettes create enduring digital experiences.'
    },
    {
      id: 2,
      date: 'JUL 2026',
      title: 'Seamless React & GitHub Pages Workflows',
      readTime: '6 min read',
      excerpt: 'How to automate build step pipelines and base path routing with Vite and gh-pages.'
    },
    {
      id: 3,
      date: 'MAY 2026',
      title: 'Crafting Accessible Dark Mode Systems',
      readTime: '5 min read',
      excerpt: 'Strategies for maintaining semantic contrast ratios and soothing color tokens in CSS variables.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="editorial-container">
      {/* Top Navigation */}
      <nav className="editorial-nav">
        <a href="#top" className="nav-brand">
          <span className="brand-dot"></span>
          DEPLOYEE
        </a>

        <ul className="nav-menu">
          <li><a href="#works" className="nav-link">Selected Works</a></li>
          <li><a href="#writing" className="nav-link">Writing</a></li>
          <li><a href="#deploy" className="nav-link">Deployment Status</a></li>
          <li>
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="editorial-pill">Editorial Collection • 2026</div>
        <h1 className="hero-heading">
          Crafting <em>thoughtful</em> digital experiences &amp; modern web platforms.
        </h1>
        <p className="hero-body">
          A minimalist showcase of React web applications, custom design systems, and GitHub automation tools crafted with precision and soft pastel aesthetics.
        </p>
        <div className="hero-actions">
          <a href="#works" className="btn-primary">Explore Selected Works ↓</a>
          <a href="https://github.com/angelshyju14-repo/Deployee" target="_blank" rel="noreferrer" className="btn-secondary">GitHub Repository ↗</a>
        </div>
      </header>

      {/* Works Section */}
      <section id="works">
        <div className="section-header">
          <h2 className="section-title">Selected Works</h2>
          <div className="filter-bar">
            {['All', 'Web Apps', 'Design Systems', 'Tooling'].map(cat => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(proj => (
            <div 
              key={proj.id} 
              className="editorial-card"
              onClick={() => setSelectedProject(proj)}
            >
              <div>
                <div className="card-tag-row">
                  <span className={`card-tag ${proj.tagClass}`}>{proj.category}</span>
                  <span className="card-year">{proj.year}</span>
                </div>
                <h3 className="card-title">{proj.title}</h3>
                <p className="card-desc">{proj.summary}</p>
              </div>
              <span className="card-link">View Details →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing">
        <div className="section-header">
          <h2 className="section-title">Journal &amp; Insights</h2>
        </div>
        <div className="articles-list">
          {articles.map(art => (
            <div key={art.id} className="article-row">
              <div className="article-left">
                <span className="article-date">{art.date}</span>
                <span className="article-title">{art.title}</span>
              </div>
              <span className="article-read-time">{art.readTime}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Live GitHub Pages Deployment Bar */}
      <section id="deploy">
        <div className="deploy-widget">
          <div className="widget-info">
            <div className="widget-title">
              <span className="status-indicator"></span>
              Live GitHub Pages Deployment Active
            </div>
            <div className="widget-sub">
              Repository: angelshyju14-repo/Deployee • Branch: main / gh-pages
            </div>
          </div>
          <a 
            href="https://angelshyju14-repo.github.io/Deployee" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary"
          >
            Visit Live Site ↗
          </a>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            <div className="card-tag-row" style={{ marginTop: '8px' }}>
              <span className={`card-tag ${selectedProject.tagClass}`}>{selectedProject.category}</span>
              <span className="card-year">{selectedProject.year}</span>
            </div>
            <h2 className="card-title" style={{ fontSize: '2rem', marginTop: '12px' }}>{selectedProject.title}</h2>
            <p className="card-desc" style={{ fontSize: '1.05rem', margin: '16px 0 24px' }}>{selectedProject.detail}</p>
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary" 
              style={{ display: 'inline-block' }}
            >
              Open on GitHub ↗
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="editorial-footer" style={{ marginTop: '64px' }}>
        <span>© 2026 DEPLOYEE Studio • Built with React &amp; Vite</span>
        <span>Hosted free on GitHub Pages</span>
      </footer>
    </div>
  );
}
