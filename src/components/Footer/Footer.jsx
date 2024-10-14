import React from 'react'
import './Footer.css'
import LinkedInIcon from '../LinkedInIcon/LinkedInIcon'
const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <h5>Let's Connect</h5>
            <div className="icons">
                <LinkedInIcon 
                    imgSrc="/assets/images/linkedin_145807.png" 
                    linkUrl="https://www.linkedin.com/in/harstuti/" 
                    altText="LinkedIn"
                />
                <LinkedInIcon 
                    imgSrc="/public/assets/images/email_873388.png" 
                    linkUrl="https://github.com/harstuti" 
                    altText="GitHub"
                />
                <LinkedInIcon 
                    imgSrc="/public/assets/images/github_5968866.png" 
                    linkUrl="https://twitter.com/harstuti" 
                    altText="Twitter"
                />
            </div>
            <div className="footer-info">
                <p>Made By Harstuti</p>
            </div>
        </footer>
    </>
  )
}

export default Footer