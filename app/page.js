'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    // Check if agent is online
    fetch('/api/health')
      .then(r => r.ok ? setStatus('online') : setStatus('offline'))
      .catch(() => setStatus('offline'));
  }, []);

  return (
    <div style={styles.container}>
      {/* Background Pattern */}
      <div style={styles.bgPattern} />

      {/* Main Card */}
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="url(#grad)"/>
              <text x="24" y="30" textAnchor="middle" fill="white" fontSize="20">🦅</text>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="48" y2="48">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <h1 style={styles.title}>SemtoriumAgent</h1>
            <p style={styles.subtitle}>AI Agent on Abstract Chain</p>
          </div>
          <div style={styles.statusBadge}>
            <span style={{
              ...styles.statusDot,
              background: status === 'online' ? '#22c55e' : status === 'checking' ? '#eab308' : '#ef4444'
            }} />
            {status === 'online' ? 'ONLINE' : status === 'checking' ? 'CHECKING...' : 'OFFLINE'}
          </div>
        </div>

        {/* Tags */}
        <div style={styles.tags}>
          <span style={{...styles.tag, background: '#3b82f6', color: '#fff'}}>MCP</span>
          <span style={{...styles.tag, background: '#8b5cf6', color: '#fff'}}>A2A</span>
          <span style={{...styles.tag, background: '#f97316', color: '#fff'}}>OASF</span>
          <span style={{...styles.tag, background: '#06b6d4', color: '#fff'}}>WEB</span>
        </div>

        {/* About */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About</h2>
          <p style={styles.aboutText}>
            Turkish-speaking AI agent powered by OpenClaw on Abstract Chain. 
            Specializes in blockchain operations including token swaps, wallet management, 
            and on-chain transactions. ERC-8004 registered autonomous agent.
          </p>
        </div>

        {/* Stats */}
        <div style={styles.stats}>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>CHAIN</span>
            <span style={styles.statValue}>Abstract</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>STANDARD</span>
            <span style={styles.statValue}>ERC-8004</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>TOKEN ID</span>
            <span style={styles.statValue}>#701</span>
          </div>
        </div>

        {/* Capabilities */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Capabilities</h2>
          <div style={styles.capabilities}>
            <span style={styles.capBadge}>Wallet Control</span>
            <span style={styles.capBadge}>Token Swaps</span>
            <span style={styles.capBadge}>On-Chain Ops</span>
            <span style={styles.capBadge}>DeFi</span>
          </div>
        </div>

        {/* Links */}
        <div style={styles.links}>
          <a href="/.well-known/agent-card.json" style={styles.link} target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            Agent Card
          </a>
          <a href="https://t.me/SemtoriumAgentbot" style={styles.link} target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 8.12l-2.03 9.56c-.15.67-.55.84-1.1.52l-3-2.21-1.45 1.4c-.16.16-.29.29-.6.29l.21-3.04 5.51-4.96c.24-.21-.05-.33-.37-.12l-6.74 4.23-2.91-.91c-.59-.18-.6-.59.12-.88l11.56-4.45c.5-.18 1.02.12.84.67z"/>
            </svg>
            Telegram
          </a>
          <a href="https://abscan.org/address/0x9e335C32e1970EA1D051CbE1573733912fc3826b" style={styles.link} target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
            </svg>
            AGW Wallet
          </a>
          <a href="https://github.com/semtorium/SemtoriumAgent" style={styles.link} target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <span>Chain ID: 2741</span>
          <span>•</span>
          <span>EyesetAI Inspired</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
    padding: '2rem 1rem',
    position: 'relative',
    overflow: 'hidden',
  },
  bgPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
    pointerEvents: 'none',
  },
  card: {
    maxWidth: '600px',
    margin: '0 auto',
    background: 'rgba(30, 30, 50, 0.8)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px',
    padding: '2rem',
    backdropFilter: 'blur(20px)',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  logo: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    fontSize: '32px',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#fff',
    margin: 0,
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    margin: 0,
  },
  statusBadge: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '0.05em',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  tag: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
  },
  section: {
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.75rem',
  },
  aboutText: {
    color: '#d1d5db',
    fontSize: '0.9375rem',
    lineHeight: 1.6,
    margin: 0,
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  statBox: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    padding: '1rem',
    textAlign: 'center',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.625rem',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.25rem',
  },
  statValue: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  capabilities: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  capBadge: {
    padding: '0.375rem 0.75rem',
    background: 'rgba(99, 102, 241, 0.2)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    color: '#a5b4fc',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.625rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.75rem',
    color: '#4b5563',
  },
};
