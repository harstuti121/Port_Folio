import React from 'react';
import './Contact.css';
import ContactInfoCard from './ContactCard/ContactInfoCard';
const Contact = () => {
  return (
    <section className='contact-container'>

        <div className='contact-content'>
        <h5>Contact Me</h5>
            <div style={{flex:1}}>
                {/* <ContactInfoCard
                    iconUrl="../../../public/assets/images/email_873388.png"
                    text="harstuti121@gmail.com"
                />
                <ContactInfoCard
                    iconUrl="../../../public/assets/images/linkedin_145807.png"
                    text="https://www.linkedin.com/in/harstuti/"
                /> */}
            </div>
            <div style={{flex:1}}></div>
        </div>
    </section>
  )
}

export default Contact