import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const styles = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '420px',
    margin: '0 auto',
  },
  card: {
    width: '100%',
    padding: '2rem',
    background: 'var(--bg-card, #1a1f28)',
    border: '1px solid var(--border, rgba(255,255,255,0.06))',
    borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
  },
  toggleWrap: {
    display: 'flex',
    gap: '0.25rem',
    marginBottom: '1.5rem',
    padding: '4px',
    background: 'var(--bg-elevated, #14181f)',
    borderRadius: '8px',
  },
  toggleBtn: {
    flex: 1,
    padding: '0.625rem 1rem',
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: 'var(--text-muted, #9aa0a6)',
    background: 'transparent',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'color 0.2s ease, background 0.2s ease',
  },
  toggleBtnActive: {
    color: '#fff',
    background: 'var(--accent, #f97316)',
  },
  title: {
    margin: '0 0 1.5rem',
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  field: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--text-muted, #9aa0a6)',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    color: 'var(--text, #e8eaed)',
    background: 'var(--bg-elevated, #14181f)',
    border: '1px solid var(--border, rgba(255,255,255,0.06))',
    borderRadius: '8px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },
  inputFocus: {
    outline: 'none',
    borderColor: 'rgba(249, 115, 22, 0.6)',
    boxShadow: '0 0 0 3px rgba(249, 115, 22, 0.2)',
  },
  error: {
    marginBottom: '1rem',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#fca5a5',
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '8px',
  },
  submit: {
    width: '100%',
    marginTop: '0.5rem',
    padding: '0.875rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    background: 'var(--accent, #f97316)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 2px 12px rgba(249, 115, 22, 0.25)',
    transition: 'opacity 0.2s ease',
  },
  submitDisabled: { opacity: 0.7, cursor: 'not-allowed' },
};

function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = [];

    if (!email.trim()) nextErrors.push('Email is required.');
    if (!password.trim()) nextErrors.push('Password is required.');
    if (mode === 'signup' && !name.trim()) nextErrors.push('Name is required.');
    if (mode === 'signup' && password.length > 0 && password.length < 6) {
      nextErrors.push('Password must be at least 6 characters.');
    }

    setErrors(nextErrors);
    setSuccessMessage('');
    if (nextErrors.length > 0) return;

    setLoading(true);
    setErrors([]);
    setSuccessMessage('');

    try {
      if (mode === 'login') {
        const { data } = await api.post('/auth/login', { email: email.trim(), password });
        if (data.success && data.data?.token) {
          localStorage.setItem('token', data.data.token);
          if (data.data.user) {
            localStorage.setItem('user', JSON.stringify(data.data.user));
          }
          navigate('/', { replace: true });
          return;
        }
        setErrors([data.message || 'Login failed']);
      } else {
        const { data } = await api.post('/auth/register', {
          name: name.trim(),
          email: email.trim(),
          password,
        });
        if (data.success) {
          setMode('login');
          setEmail(email.trim());
          setPassword('');
          setName('');
          setSuccessMessage('Account created. Please log in.');
          return;
        }
        setErrors([data.message || 'Sign up failed']);
      }
    } catch (err) {
      let message = 'Something went wrong. Please try again.';
      if (err.response?.data?.message) message = err.response.data.message;
      else if (err.response?.status === 401) message = 'Invalid email or password.';
      else if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') message = 'Cannot reach server. Is the backend running?';
      setErrors([message]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.toggleWrap} role="tablist" aria-label="Auth mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'login'}
            style={{ ...styles.toggleBtn, ...(mode === 'login' ? styles.toggleBtnActive : {}) }}
            onClick={() => { setMode('login'); setErrors([]); setSuccessMessage(''); }}
          >
            Login
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signup'}
            style={{ ...styles.toggleBtn, ...(mode === 'signup' ? styles.toggleBtnActive : {}) }}
            onClick={() => { setMode('signup'); setErrors([]); setSuccessMessage(''); }}
          >
            Sign up
          </button>
        </div>

        <h2 style={styles.title}>
          {mode === 'login' ? 'Welcome back' : 'Create account'}
        </h2>

          <form onSubmit={handleSubmit} noValidate>
          {successMessage && (
            <div style={{ ...styles.error, background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)', color: '#86efac', marginBottom: '1rem' }} role="status">
              {successMessage}
            </div>
          )}
          {errors.length > 0 && (
            <div style={styles.error} role="alert">
              {errors.map((err, i) => (
                <div key={i}>{err}</div>
              ))}
            </div>
          )}

          {mode === 'signup' && (
            <div style={styles.field}>
              <label style={styles.label} htmlFor="auth-name">Name</label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                style={styles.input}
                autoComplete="name"
              />
            </div>
          )}

          <div style={styles.field}>
            <label style={styles.label} htmlFor="auth-email">Email</label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={styles.input}
              autoComplete="email"
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label} htmlFor="auth-password">Password</label>
            <input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={styles.input}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
            />
          </div>

          <button
            type="submit"
            style={{ ...styles.submit, ...(loading ? styles.submitDisabled : {}) }}
            disabled={loading}
          >
            {loading ? 'Please wait...' : mode === 'login' ? 'Log in' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
