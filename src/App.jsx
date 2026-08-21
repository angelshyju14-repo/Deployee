import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('angelshyju14-repo');
  const [repoName, setRepoName] = useState('Deployee');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({
    1: true, // Step 1 initialized
    2: false,
    3: false,
    4: false
  });

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleStep = (stepId) => {
    setCompletedSteps(prev => ({ ...prev, [stepId]: !prev[stepId] }));
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 4) * 100);

  const remoteUrl = `https://github.com/${username}/${repoName}.git`;
  const pagesUrl = `https://${username}.github.io/${repoName}`;

  return (
    <div className="app-container">
      {/* Header */}
      <header className="hero-header">
        <div className="badge">
          <span className="badge-dot"></span>
          Vite + React + GitHub Pages Ready
        </div>
        <h1 className="hero-title">React GitHub Deployment Hub</h1>
        <p className="hero-subtitle">
          Your React project is scaffolded and pre-configured for free live hosting on GitHub Pages.
        </p>
      </header>

      {/* Dynamic Config Input */}
      <div className="config-card">
        <h2 className="config-title">⚡ Personalize Your Deployment Snippets</h2>
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="github-username">GitHub Username</label>
            <input
              id="github-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value || 'YourUsername')}
              placeholder="e.g. octocat"
            />
          </div>
          <div className="input-field">
            <label htmlFor="repo-name">Repository Name</label>
            <input
              id="repo-name"
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value || 'my-react-app')}
              placeholder="e.g. my-react-app"
            />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-card">
        <div className="progress-header">
          <span>Deployment Readiness Checklist</span>
          <span>{completedCount} of 4 Steps Complete ({progressPercent}%)</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Interactive Steps */}
      <div className="steps-grid">

        {/* STEP 1 */}
        <div className={`step-card ${completedSteps[1] ? 'completed' : ''}`}>
          <div className="step-top">
            <div className="step-number">
              <div className="step-circle">{completedSteps[1] ? '✓' : '1'}</div>
              <h2 className="step-title">Create or Open React Project</h2>
            </div>
            <button className="check-button" onClick={() => toggleStep(1)}>
              {completedSteps[1] ? '✓ Done' : 'Mark Complete'}
            </button>
          </div>
          <p className="step-description">
            Your React app has been created using modern Vite tooling right here in your workspace.
          </p>
          <div className="code-box">
            <div className="code-header">
              <span className="code-lang">PowerShell / Command Prompt</span>
              <button 
                className="copy-btn" 
                onClick={() => handleCopy(`npm create vite@latest ${repoName} -- --template react\ncd ${repoName}\nnpm install`, 1)}
              >
                {copiedIndex === 1 ? '✓ Copied' : '📋 Copy'}
              </button>
            </div>
            <pre className="code-content">
{`npm create vite@latest ${repoName} -- --template react
cd ${repoName}
npm install`}
            </pre>
          </div>
        </div>

        {/* STEP 2 */}
        <div className={`step-card ${completedSteps[2] ? 'completed' : ''}`}>
          <div className="step-top">
            <div className="step-number">
              <div className="step-circle">{completedSteps[2] ? '✓' : '2'}</div>
              <h2 className="step-title">Create New Repository on GitHub</h2>
            </div>
            <button className="check-button" onClick={() => toggleStep(2)}>
              {completedSteps[2] ? '✓ Done' : 'Mark Complete'}
            </button>
          </div>
          <p className="step-description">
            Go to <a href="https://github.com/new" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>GitHub New Repository</a>, 
            name it <strong>{repoName}</strong>, set it to Public (or Private), and <em>do not check</em> README, .gitignore, or License options.
          </p>
          <div className="code-box">
            <div className="code-header">
              <span className="code-lang">Target Remote URL</span>
              <button 
                className="copy-btn" 
                onClick={() => handleCopy(remoteUrl, 2)}
              >
                {copiedIndex === 2 ? '✓ Copied' : '📋 Copy'}
              </button>
            </div>
            <pre className="code-content">{remoteUrl}</pre>
          </div>
        </div>

        {/* STEP 3 */}
        <div className={`step-card ${completedSteps[3] ? 'completed' : ''}`}>
          <div className="step-top">
            <div className="step-number">
              <div className="step-circle">{completedSteps[3] ? '✓' : '3'}</div>
              <h2 className="step-title">Initialize Git & Link to GitHub</h2>
            </div>
            <button className="check-button" onClick={() => toggleStep(3)}>
              {completedSteps[3] ? '✓ Done' : 'Mark Complete'}
            </button>
          </div>
          <p className="step-description">
            Run these commands inside your project folder to commit local code and push to GitHub:
          </p>
          <div className="code-box">
            <div className="code-header">
              <span className="code-lang">Git PowerShell Commands</span>
              <button 
                className="copy-btn" 
                onClick={() => handleCopy(`git init\ngit add .\ngit commit -m "Initial React project commit"\ngit branch -M main\ngit remote add origin ${remoteUrl}\ngit push -u origin main`, 3)}
              >
                {copiedIndex === 3 ? '✓ Copied' : '📋 Copy'}
              </button>
            </div>
            <pre className="code-content">
{`# 1. Initialize Git in project directory
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "Initial React project commit"

# 4. Rename default branch to main
git branch -M main

# 5. Link local project to your GitHub repository
git remote add origin ${remoteUrl}

# 6. Push code to GitHub
git push -u origin main`}
            </pre>
          </div>
        </div>

        {/* STEP 4 */}
        <div className={`step-card ${completedSteps[4] ? 'completed' : ''}`}>
          <div className="step-top">
            <div className="step-number">
              <div className="step-circle">{completedSteps[4] ? '✓' : '4'}</div>
              <h2 className="step-title">Deploy Free Live Site via GitHub Pages</h2>
            </div>
            <button className="check-button" onClick={() => toggleStep(4)}>
              {completedSteps[4] ? '✓ Done' : 'Mark Complete'}
            </button>
          </div>
          <p className="step-description">
            We already configured <code>gh-pages</code> in your <code>package.json</code> and <code>vite.config.js</code>. 
            Run the deploy script below to publish your app live to: <a href={pagesUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>{pagesUrl}</a>
          </p>
          <div className="code-box">
            <div className="code-header">
              <span className="code-lang">Deploy Command</span>
              <button 
                className="copy-btn" 
                onClick={() => handleCopy(`npm run deploy`, 4)}
              >
                {copiedIndex === 4 ? '✓ Copied' : '📋 Copy'}
              </button>
            </div>
            <pre className="code-content">npm run deploy</pre>
          </div>
        </div>

      </div>

      <footer className="footer-note">
        ✨ Configured for Windows &amp; Vite • Live preview at <code>npm run dev</code>
      </footer>
    </div>
  );
}
