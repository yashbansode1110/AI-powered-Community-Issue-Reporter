import { Link } from 'react-router-dom';

const navStyles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '0.75rem 1.5rem',
    background: 'var(--bg-card, #1a1f28)',
    borderBottom: '1px solid var(--border, rgba(255,255,255,0.06))',
    boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  titleLink: {
    color: 'var(--text, #e8eaed)',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'var(--text-muted, #9aa0a6)',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    fontWeight: 500,
    transition: 'color 0.2s ease',
  },
  linkHover: { color: 'var(--accent, #f97316)' },
};

function Navbar() {
  return (
    <nav style={navStyles.navbar} role="navigation" aria-label="Main">
      <Link to="/" style={{ ...navStyles.titleLink, ...navStyles.title }}>
        Community Issue Reporter
      </Link>
      <ul style={navStyles.links}>
        <li>
          <Link to="/" style={navStyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/report" style={navStyles.link}>
            Report Issue
          </Link>
        </li>
        <li>
          <Link to="/login" style={navStyles.link}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
