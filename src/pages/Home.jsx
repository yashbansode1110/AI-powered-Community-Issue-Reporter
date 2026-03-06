import { Link } from 'react-router-dom';

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    padding: '3rem 1rem',
    textAlign: 'center',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
    maxWidth: '560px',
  },
  heroTitle: {
    margin: 0,
    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    margin: 0,
    fontSize: '1.0625rem',
    color: 'var(--text-muted, #9aa0a6)',
    lineHeight: 1.6,
  },
  cta: {
    display: 'inline-block',
    marginTop: '0.5rem',
    padding: '0.875rem 1.75rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    background: 'var(--accent, #f97316)',
    border: 'none',
    borderRadius: '8px',
    textDecoration: 'none',
    boxShadow: '0 2px 12px rgba(249, 115, 22, 0.25)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  section: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '3rem 1rem',
  },
  sectionTitle: {
    margin: '0 0 2rem',
    fontSize: '1.5rem',
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },
  steps: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  step: {
    flex: '1 1 240px',
    maxWidth: '280px',
    padding: '1.5rem',
    background: 'var(--bg-card, #1a1f28)',
    border: '1px solid var(--border, rgba(255,255,255,0.06))',
    borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  stepNum: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    marginBottom: '1rem',
    fontSize: '1.125rem',
    fontWeight: 700,
    color: 'var(--accent, #f97316)',
    background: 'rgba(249, 115, 22, 0.12)',
    borderRadius: '50%',
  },
  stepTitle: {
    margin: '0 0 0.5rem',
    fontSize: '1.0625rem',
    fontWeight: 600,
  },
  stepText: {
    margin: 0,
    fontSize: '0.9375rem',
    color: 'var(--text-muted, #9aa0a6)',
    lineHeight: 1.5,
  },
  stats: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    padding: '2rem 1rem',
  },
  stat: {
    textAlign: 'center',
  },
  statValue: {
    margin: 0,
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--accent, #f97316)',
    lineHeight: 1.2,
  },
  statLabel: {
    margin: '0.25rem 0 0',
    fontSize: '0.875rem',
    color: 'var(--text-muted, #9aa0a6)',
  },
};

function Home() {
  return (
    <div style={{ width: '100%' }}>
      <section style={styles.hero} aria-label="Hero">
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Report and track community issues together
          </h1>
          <p style={styles.heroSubtitle}>
            Share problems in your area—potholes, broken streetlights, graffiti—and help your neighborhood get fixed faster.
          </p>
          <Link to="/report" style={styles.cta}>
            Report Issue
          </Link>
        </div>
      </section>

      <section style={styles.section} aria-label="How it works">
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.stepNum}>1</span>
            <h3 style={styles.stepTitle}>Report</h3>
            <p style={styles.stepText}>Describe the issue and pick a location on the map so we can route it to the right team.</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNum}>2</span>
            <h3 style={styles.stepTitle}>Track</h3>
            <p style={styles.stepText}>Your report is logged and visible to others. Status updates keep everyone in the loop.</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNum}>3</span>
            <h3 style={styles.stepTitle}>Resolve</h3>
            <p style={styles.stepText}>Authorities and volunteers use the list to prioritize and fix issues in your area.</p>
          </div>
        </div>
      </section>

      <section style={styles.section} aria-label="Stats">
        <h2 style={styles.sectionTitle}>Community Impact</h2>
        <div style={styles.stats}>
          <div style={styles.stat}>
            <p style={styles.statValue}>1,240</p>
            <p style={styles.statLabel}>Issues reported</p>
          </div>
          <div style={styles.stat}>
            <p style={styles.statValue}>892</p>
            <p style={styles.statLabel}>Resolved</p>
          </div>
          <div style={styles.stat}>
            <p style={styles.statValue}>48</p>
            <p style={styles.statLabel}>Active communities</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
