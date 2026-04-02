'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={styles.page}>
      {/* Animated gradient background */}
      <div style={styles.gradientBg} />
      <div style={styles.gridOverlay} />
      
      {/* Floating orbs */}
      <div style={{...styles.orb, ...styles.orb1}} />
      <div style={{...styles.orb, ...styles.orb2}} />
      <div style={{...styles.orb, ...styles.orb3}} />

      {/* Content */}
      <div style={{...styles.container, opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease'}}>
        
        {/* Hero Section */}
        <div style={styles.hero}>
          <div style={styles.logoContainer}>
            <div style={styles.logoGlow} />
            <div style={styles.logo}>
              <span style={styles.logoEmoji}>🦅</span>
            </div>
          </div>
          
          <h1 style={styles.title}>
            Semtorium<span style={styles.titleDot}>.</span>Agent
          </h1>
          <p style={styles.subtitle}>
            Autonomous AI Agent on Abstract Chain
          </p>
          
          {/* Status */}
          <div style={styles.statusContainer}>
            <div style={styles.statusPill}>
              <span style={styles.statusDot} />
              <span style={styles.statusText}>ONLINE</span>
            </div>
            <span style={styles.chainBadge}>Chain 2741</span>
          </div>
        </div>

        {/* Tags */}
        <div style={styles.tagsRow}>
          {['MCP', 'A2A', 'OASF', 'WEB'].map((tag, i) => (
            <span key={tag} style={{...styles.tag, animationDelay: `${i * 0.1}s`}}>
              {tag}
            </span>
          ))}
        </div>

        {/* Main Card */}
        <div style={styles.card}>
          {/* About */}
          <div style={styles.cardSection}>
            <h2 style={styles.sectionLabel}>About</h2>
            <p style={styles.aboutText}>
              Turkish-speaking AI agent powered by OpenClaw. Specialized in blockchain 
              operations — token swaps, wallet management, and on-chain transactions on Abstract Chain.
            </p>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statValue}>ERC-8004</span>
              <span style={styles.statLabel}>Standard</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statValue}>#701</span>
              <span style={styles.statLabel}>Token ID</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statValue}>Abstract</span>
              <span style={styles.statLabel}>Network</span>
            </div>
          </div>

          {/* Capabilities */}
          <div style={styles.cardSection}>
            <h2 style={styles.sectionLabel}>Capabilities</h2>
            <div style={styles.capsGrid}>
              {['Wallet Control', 'Token Swaps', 'On-Chain Ops', 'DeFi'].map(cap => (
                <span key={cap} style={styles.capPill}>{cap}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={styles.linksRow}>
            <a href="/.well-known/agent-card.json" style={styles.linkBtn}>
              <span>📇</span> Agent Card
            </a>
            <a href="https://t.me/SemtoriumAgentbot" style={styles.linkBtn}>
              <span>💬</span> Telegram
            </a>
            <a href="https://abscan.org/address/0x9e335C32e1970EA1D051CbE1573733912fc3826b" style={styles.linkBtn}>
              <span>💼</span> Wallet
            </a>
            <a href="https://github.com/semtorium/SemtoriumAgent" style={styles.linkBtn}>
              <span>⚡</span> GitHub
            </a>
          </div>
        </div>

        {/* Footer */}
        <p style={styles.footer}>
          Built on OpenClaw • ERC-8004 Trustless Agents
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0a0a0f;
          color: #fff;
          overflow-x: hidden;
        }
        
        a { text-decoration: none; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .tag-anim {
          animation: slideUp 0.6s ease backwards;
        }
        
        .card-anim {
          animation: fadeIn 0.8s ease 0.3s backwards;
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: '#09090b',
  },
  gradientBg: {
    position: 'fixed',
    inset: 0,
    background: `
      radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
      radial-gradient(ellipse 60% 40% at 80% 50%, rgba(168, 85, 247, 0.15), transparent),
      radial-gradient(ellipse 50% 30% at 20% 80%, rgba(59, 130, 246, 0.15), transparent)
    `,
    zIndex: 0,
  },
  gridOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    zIndex: 0,
  },
  orb: {
    position: 'fixed',
    borderRadius: '50%',
    filter: 'blur(80px)',
    zIndex: 0,
    animation: 'float 8s ease-in-out infinite',
  },
  orb1: {
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
    top: '-100px',
    right: '-100px',
    animationDelay: '0s',
  },
  orb2: {
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
    bottom: '-50px',
    left: '-50px',
    animationDelay: '-3s',
  },
  orb3: {
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
    top: '40%',
    left: '60%',
    animationDelay: '-5s',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '600px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  logoContainer: {
    position: 'relative',
    width: '100px',
    height: '100px',
    margin: '0 auto 1.5rem',
  },
  logoGlow: {
    position: 'absolute',
    inset: '-20px',
    background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'pulse 3s ease-in-out infinite',
  },
  logo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a855f7 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    boxShadow: '0 25px 50px -12px rgba(168,85,247,0.5)',
    position: 'relative',
    zIndex: 1,
  },
  logoEmoji: {
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(to right, #fff 0%, #a78bfa 50%, #818cf8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em',
  },
  titleDot: {
    color: '#a855f7',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#71717a',
    fontWeight: '500',
    marginBottom: '1.5rem',
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  statusPill: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(34,197,94,0.1)',
    border: '1px solid rgba(34,197,94,0.3)',
    borderRadius: '9999px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22c55e',
    boxShadow: '0 0 10px #22c55e',
    animation: 'pulse 2s ease-in-out infinite',
  },
  statusText: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#22c55e',
    letterSpacing: '0.1em',
  },
  chainBadge: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#a78bfa',
    background: 'rgba(167,139,250,0.1)',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    border: '1px solid rgba(167,139,250,0.3)',
  },
  tagsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  tag: {
    padding: '0.5rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#a5b4fc',
    letterSpacing: '0.05em',
    backdropFilter: 'blur(10px)',
  },
  card: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '1.5rem',
    backdropFilter: 'blur(20px)',
  },
  cardSection: {
    marginBottom: '1.5rem',
  },
  sectionLabel: {
    fontSize: '0.625rem',
    fontWeight: '700',
    color: '#52525b',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '0.75rem',
  },
  aboutText: {
    fontSize: '0.875rem',
    color: '#a1a1aa',
    lineHeight: 1.7,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  statCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '16px',
    padding: '1rem',
    textAlign: 'center',
  },
  statValue: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '0.25rem',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.625rem',
    color: '#71717a',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  capsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  capPill: {
    padding: '0.375rem 0.875rem',
    background: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(139,92,246,0.2) 100%)',
    border: '1px solid rgba(168,85,247,0.3)',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#c4b5fd',
  },
  linksRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.75rem',
  },
  linkBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    fontSize: '0.8125rem',
    fontWeight: '600',
    color: '#fff',
    transition: 'all 0.2s ease',
  },
  footer: {
    textAlign: 'center',
    fontSize: '0.75rem',
    color: '#52525b',
    marginTop: '2rem',
  },
};
