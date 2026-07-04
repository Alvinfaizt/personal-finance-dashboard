import { useState, useEffect } from 'react'

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="neo-box" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        🎨 Workspace Core Skin
      </span>
      <div style={{ display: 'flex', gap: '8px' }}>
        {['light', 'midnight', 'nordic'].map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              background: theme === t ? 'var(--text-main)' : 'var(--input-bg)',
              color: theme === t ? 'var(--bg-primary)' : 'var(--text-main)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'all 0.2s ease'
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeSwitcher