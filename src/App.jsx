// import React from 'react'
// import './App.css';

// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Skills from './components/Skills/Skills';
// import WorkExp from './components/WorkExp/WorkExp';
// import Contact from './components/Contact/Contact';
// import LinkedInIcon from './components/LinkedInIcon/LinkedInIcon';
// import ContactForm from './components/Contact/ContactForm/ContactForm';
// import Footer from './components/Footer/Footer';
// const App = () => {
//   return (
//     <>
//       <Navbar/>
//       <div className='container'>
//         <Hero/>
//         <Skills/>
//         <WorkExp/>
//         <Contact/>
//         <div className='icons'>
//         <LinkedInIcon
//           imgSrc="/public/assets/images/linkedin_145807.png" 
//           linkUrl="https://www.linkedin.com/in/harstuti/" 
//           altText="LinkedIn" 
//         />
//         <LinkedInIcon
//           imgSrc="/public/assets/images/email_873388.png" 
//           linkUrl="harstuti121@gmail.com" 
//           altText="Email"
//         />
//         <LinkedInIcon
//           imgSrc="/public/assets/images/github_5968866.png" 
//           linkUrl="" 
//           altText="Github"
//         />   
//         </div>  
//         <ContactForm/> 
//       </div>
//       <Footer/> 
//     </>
//   )
// }

// export default App

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExp from './components/WorkExp/WorkExp';
import Contact from './components/Contact/Contact';
import LinkedInIcon from './components/LinkedInIcon/LinkedInIcon';
import ContactForm from './components/Contact/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="work-exp">
          <WorkExp />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <div className='icons'>
          <LinkedInIcon
            imgSrc="/public/assets/images/linkedin_145807.png"
            linkUrl="https://www.linkedin.com/in/harstuti/"
            altText="LinkedIn"
          />
          <LinkedInIcon
            imgSrc="/public/assets/images/email_873388.png"
            linkUrl="harstuti121@gmail.com"
            altText="Email"
          />
          <LinkedInIcon
            imgSrc="/public/assets/images/github_5968866.png"
            linkUrl=""
            altText="Github"
          />
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
