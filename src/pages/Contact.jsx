import React from 'react';
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <main>
      <Mouse/>
      <div className="contact">
        <Navigation/>
        <Logo/>
        <ContactForm/>
      </div>
    </main>
  );
};

export default Contact;