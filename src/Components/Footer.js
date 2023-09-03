// import React, { useState } from 'react';

// const Footer = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const footerStyle = {
//     backgroundColor: isHovered ? 'red' : 'blue',
//     color: 'white',
//     padding: '10px',
//     cursor: 'pointer',
//   };

//   return (
//     <footer
//       style={footerStyle}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       This is the footer
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import Login from './Login/login';
import LikedSongsComponent from "./LikedSongsComponent";


const Footer = () => {

    const CONSTANTS  = {
        'AUTHOR_NAME': "Siddhant Jain",
        'AUTHOR_LINKEDIN_LINK': "https://www.linkedin.com/in/siddhant-jain-13759a1b2",
        'AUTHOR_GITHUB_LINK':"https://github.com/siddhu2010",
    
    }
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handleToggleFooter = () => {
    setIsExpanded(!isExpanded);
  };
  

  const footerStyle = {
    transition: 'height 0.5s ease',
    height: isExpanded ? '200px' : '50px',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle} onClick={handleToggleFooter}>
      {isExpanded ? (
        <>
          <h3>Namaste!!</h3>
          <p>I'm Siddhant Jain</p>
          <li><a
          href={CONSTANTS.AUTHOR_LINKEDIN_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='author-name'
          align="left"
        > 
        <span>Connect on </span>
        <i className='fab fa-linkedin'></i>
         {CONSTANTS.AUTHOR}
        </a>
        </li>
        <li><a 
        href={CONSTANTS.AUTHOR_GITHUB_LINK}
        target='_blank'
        rel='noopener noreferrer'
        className='author-name'
        align="left"
        >
            <span>Connect on </span>
            <i className='fab fa-github'></i>
            {CONSTANTS.AUTHOR}
        </a>
        </li>
        {/* <LikedSongsComponent/> */}
        
        {/* <Login/> */}

        </>
      ) : (
        <h3 align="center">Discover More..</h3>
      )}
    </footer>
  );
};

export default Footer;


