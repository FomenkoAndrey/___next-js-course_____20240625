'use client'

import { createContext, ReactNode, useContext } from 'react'

type Theme = {
  colors: {
    primary: string
    secondary: string
  }
}

const defaultTheme: Theme = {
  colors: {
    primary: '#1d4ed8',
    secondary: 'gray'
  }
}

const ThemeContext = createContext<Theme>(defaultTheme)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
