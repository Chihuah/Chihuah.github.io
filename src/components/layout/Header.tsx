import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, Search, BookOpen, GraduationCap, Users, Calendar, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navItems } from '../../data/personal'
import IBLLogo from '../../assets/logo_3.png'

const iconMap = {
  Home,
  User,
  Search,
  BookOpen,
  GraduationCap,
  Users,
  Calendar
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
              {/* <span className="text-white font-bold text-sm">I</span> */}
              <img src={IBLLogo} alt="IBL Logo" className="w-full h-full" />
            </div>
            <span className="text-lg lg:text-xl font-bold text-slate-900 text-wrap">Intelligent Bioinformatics Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-blue-700'
                      : 'text-fju-primary hover:bg-gray-100 hover:text-slate-900'
                  }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-blue-700'
                        : 'text-fju-primary hover:bg-gray-100 hover:text-slate-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
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

