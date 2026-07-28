import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, Search, BookOpen, GraduationCap, Users, Calendar } from 'lucide-react'
import { navItems } from '../../data/personal'
import IBLLogo from '../../assets/logo_3.png'

const iconMap = {
  Home,
  User,
  Search,
  BookOpen,
  GraduationCap,
  Users,
  Calendar,
}

/** Critical styles as inline so Edge color filters / CSS layers cannot hide the bar */
const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  backgroundColor: '#ffffff',
  color: '#0f172a',
  borderBottom: '2px solid #124e79',
  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.12)',
  transform: 'translateZ(0)',
  WebkitBackfaceVisibility: 'hidden',
  backfaceVisibility: 'hidden',
  colorScheme: 'only light',
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="site-header" style={headerStyle} role="banner">
      <div className="site-header__inner max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 min-h-16 py-2">
          {/* Logo */}
          <Link
            to="/"
            className="site-header__brand flex items-center gap-2 min-w-0"
            style={{ color: '#0f172a', textDecoration: 'none' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#334155' }}
            >
              <img src={IBLLogo} alt="IBL Logo" className="w-full h-full" />
            </div>
            <span
              className="site-header__title text-sm sm:text-base lg:text-lg font-bold"
              style={{ color: '#0f172a' }}
            >
              Intelligent Bioinformatics Lab
            </span>
          </Link>

          {/*
            Always-visible nav (not hidden behind md: breakpoint).
            Edge with sidebars often reports a narrow CSS viewport; the old
            `hidden md:flex` pattern then hid all links and left only a
            low-contrast hamburger that was easy to miss.
          */}
          <nav
            className="site-header__nav flex-wrap items-center justify-end gap-0.5"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="site-header__link flex items-center gap-1 px-2 lg:px-2.5 py-1.5 rounded-md text-sm font-semibold"
                  style={{
                    color: isActive ? '#1d4ed8' : '#124e79',
                    backgroundColor: isActive ? '#e2e8f0' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {IconComponent && <IconComponent className="w-4 h-4 shrink-0" aria-hidden />}
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Compact menu for narrow viewports — high-contrast control */}
          <button
            type="button"
            className="site-header__menu-btn items-center justify-center gap-1 rounded-md px-3 py-2 text-sm font-semibold shrink-0"
            style={{
              color: '#ffffff',
              backgroundColor: '#124e79',
              border: '1px solid #0f3a5c',
              cursor: 'pointer',
            }}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-nav"
          >
            {isMenuOpen ? <X className="w-5 h-5" aria-hidden /> : <Menu className="w-5 h-5" aria-hidden />}
            <span>Menu</span>
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="site-mobile-nav"
            className="site-header__mobile-panel"
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              padding: '0.5rem 0 0.75rem',
            }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                const isActive = location.pathname === item.path

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="site-header__link flex items-center gap-2 px-3 py-2.5 rounded-md text-base font-semibold"
                    style={{
                      color: isActive ? '#1d4ed8' : '#124e79',
                      backgroundColor: isActive ? '#e2e8f0' : 'transparent',
                      textDecoration: 'none',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5 shrink-0" aria-hidden />}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
