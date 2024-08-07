import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MyResume from './pages/MyResume/MyResume'
import HomePage from './pages/HomePage/HomePage'
import Projects from './pages/Projects/Projects'
import ContactUs from './pages/ContactUs/ContactUs'
import Resume from './pages/Resume/Resume'

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <MyResume />
      <Projects />
      <Resume />
    <ContactUs />
    </div>
  )
}

export default App