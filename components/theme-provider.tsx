"use client"

import * as React from "react"

type ThemeProviderProps = React.PropsWithChildren<{
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  forcedTheme?: string
}>

export function ThemeProvider({
  children,
  defaultTheme,
  forcedTheme,
}: ThemeProviderProps) {
  React.useEffect(() => {
    const root = document.documentElement
    const theme = forcedTheme ?? defaultTheme ?? "dark"

    root.classList.remove("light", "dark")
    root.classList.add(theme)
    root.style.colorScheme = theme === "dark" ? "dark" : "light"
  }, [defaultTheme, forcedTheme])

  return <>{children}</>
}
