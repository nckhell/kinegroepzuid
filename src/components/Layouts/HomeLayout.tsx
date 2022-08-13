import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return <>{children}</>
}
