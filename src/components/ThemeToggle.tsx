import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getPreferredTheme(): Theme {
  const stored = localStorage.getItem('mpm-theme')
  if (stored === 'dark') return 'dark'
  return 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('mpm-theme', theme)
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const initial = getPreferredTheme()
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-4.5a1 1 0 0 1-1 1H17a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1ZM7 12a1 1 0 0 1-1 1H4.5a1 1 0 1 1 0-2H6a1 1 0 0 1 1 1Zm9.95 5.45a1 1 0 0 1-1.4 1.4l-1.06-1.06a1 1 0 1 1 1.4-1.4l1.06 1.06ZM9.51 7.21a1 1 0 0 1-1.4-1.4l1.06-1.06a1 1 0 0 1 1.4 1.4L9.51 7.21Zm7.04-1.46a1 1 0 0 1-1.4 1.4L13.99 6.1a1 1 0 1 1 1.4-1.4l1.16 1.05ZM9.51 16.79l-1.06 1.06a1 1 0 1 1-1.4-1.4l1.06-1.06a1 1 0 0 1 1.4 1.4Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.8 2.2a1 1 0 0 1 1.2 1.35A8.5 8.5 0 1 0 20.45 14a1 1 0 0 1 1.35 1.2A10.5 10.5 0 1 1 16.8 2.2Z"
          />
        </svg>
      )}
      <span className="theme-toggle-label">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
