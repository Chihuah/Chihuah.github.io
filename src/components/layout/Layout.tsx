import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="site-shell min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="site-main flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

