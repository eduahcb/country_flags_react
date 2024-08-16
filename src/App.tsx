/// <reference types="vite-plugin-svgr/client" />
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

import './styles/global.css'
import { dark, light } from './styles/theme.css'

import * as styles from './App.css'

import { Header } from './components/atoms/Header'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme((prev) => (prev === light ? dark : light))
  }

  return (
    <div id="app" className={`${theme} ${styles.container}`}>
      <Header theme={theme} onToggle={toggleTheme} />
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App
