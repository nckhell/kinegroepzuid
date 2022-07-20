import { ReactNode } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { Home } from '../Home'
import { Info } from '../Info'
import { Team } from '../Team'

interface LayoutProps {
  children: ReactNode
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="relative z-30">
        <Home />
        <Team />
        <Info />
        <Footer />
      </div>
      {children}
    </>
  )
}
