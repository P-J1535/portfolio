import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Layout from './pages/Layout/Layout';
import Projects from './pages/Projects/Projects'
import ContactUs from './pages/ContactUs/ContactUs'
import MyResume from './pages/MyResume/MyResume'


const App = () => {
  return (
    <>
      <Layout />
      <HomePage />
      <MyResume />
      <Projects />
      <ContactUs />
    </>
  );
}

export default App;
