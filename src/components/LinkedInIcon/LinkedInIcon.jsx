import React from 'react';
import PropTypes from 'prop-types';
import './LinkedInIcon.css';

const LinkedInIcon = ({ imgSrc, linkUrl, altText }) => {
    return (
        <div className='icons'>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img 
                src={imgSrc}
                alt={altText}
                style={{ cursor: 'pointer' }}
            />
        </a>
        </div>
    );
};

LinkedInIcon.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};
export default LinkedInIcon;
