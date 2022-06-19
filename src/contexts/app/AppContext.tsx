import React, { ReactNode, useState } from 'react'

interface AppContextStateType {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

const initialState: AppContextStateType = {
  isMobileMenuOpen: false,
  toggleMobileMenu: () => null,
}

export const AppContext = React.createContext<AppContextStateType>(initialState)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(
    initialState.isMobileMenuOpen
  )

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        toggleMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
