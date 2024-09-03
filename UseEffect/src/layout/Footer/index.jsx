import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://github.com/fuadcode" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/fuad-isk%C9%99nd%C9%99rov" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-linkedin-in"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <p className="text-sm text-black">
          Designed with ❤️ by Fuad İskəndərov!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
