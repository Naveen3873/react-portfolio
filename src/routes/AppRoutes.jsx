import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])
  return null
}


export default function AppRoutes() {
return (
<>
<ScrollToTop />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<ProjectsPage />} />
</Routes>
</>
)
}