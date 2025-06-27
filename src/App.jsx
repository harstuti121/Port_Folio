import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import ContactForm from './components/Contact/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import About from './components/About';
import Project from './components/Projects';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Element name="hero">
          <Hero />
        </Element>
        <About/>
        <Project/>
        <Element name="contact">
          <Contact />
        </Element>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
