import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <Helmet>
        <title>About Page</title>
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our About page! We are a team of passionate individuals committed to delivering high-quality products and services. Our mission is to provide exceptional value to our customers through innovation and dedication.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our team is comprised of experts in various fields who work together to achieve our goals. We believe in the power of collaboration and strive to create a positive and productive work environment.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Thank you for visiting our About page. If you have any questions or need further information, feel free to contact us. We look forward to connecting with you!
        </p>
      </div>
    </div>
  );
};

export default About;
