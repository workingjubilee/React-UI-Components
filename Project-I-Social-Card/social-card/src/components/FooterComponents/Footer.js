// Create a <Footer/> component that pulls in the icons and displays them properly.
// twitteresque speech bubble, retweet, like, e-mail icons
import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer><i className="far fa-comment"></i><i className="fas fa-retweet"></i><i className="far fa-heart"></i><i className="far fa-envelope"></i></footer>
  );
}

export default Footer;
