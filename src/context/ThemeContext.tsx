import {
  type ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react"

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  let [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  let toggleTheme = useCallback(() => {
    setIsDarkMode(!isDarkMode)
  }, [isDarkMode])

  let themeValue = useMemo<{
    isDarkMode: boolean
    toggleTheme: () => void
  }>(() => {
    return { isDarkMode, toggleTheme }
  }, [isDarkMode, toggleTheme])

  return (
    <ThemeContext.Provider value={themeValue}>
      <main className={isDarkMode ? "dark" : ""}>{children}</main>
    </ThemeContext.Provider>
  )
}
