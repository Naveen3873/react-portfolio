import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-semibold text-lg">
          Naveen K
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className={`${location.pathname === '/' ? 'underline' : ''}`}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {mobileOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/40 z-40">
          <div className="absolute top-0 right-0 w-64 h-full bg-white dark:bg-slate-900 shadow-lg flex flex-col p-6">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`mb-4 ${location.pathname === '/' ? 'underline' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setMobileOpen(false)}
              className={`mb-4 ${location.pathname === '/projects' ? 'underline' : ''}`}
            >
              Projects
            </Link>
            <button
              onClick={() => {
                setDark((d) => !d);
                setMobileOpen(false);
              }}
              className="mt-auto p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}