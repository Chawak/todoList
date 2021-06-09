import React from 'react'

const themes = {
    light: {
      color: "#282c34",
      background: "#ffffff"
    },
    dark: {
      color: "#ffffff",
      background: "#282c34"
    }
  };
  
const ThemeContext = React.createContext(themes.dark);
function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false) 

  React.useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setDark(isDark)
  }, [dark])

  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }