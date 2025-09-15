import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const location = useLocation();

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Naveen K
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className={`hidden md:inline ${location.pathname === '/' ? 'underline' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`${location.pathname === '/projects' ? 'underline' : ''}`}
          >
            Projects
          </Link>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
}
