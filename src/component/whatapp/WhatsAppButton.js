import React from 'react';
import Image from 'next/image';
import logo from '../../image/whatsapp.svg' // Update with your image path

const StickyWhatsAppButton = ({ phoneNumber, message }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Inline styles for sticky button
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px', // Adjust as needed
    right: '20px', // Adjust as needed
    zIndex: 1000, // Ensure it's on top of other elements
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white', // Text color
    backgroundColor: '#25D366', // WhatsApp green color
    borderRadius: '100px', // Rounded border
    padding: '10px 20px', // Adjust padding for better spacing
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional shadow for better visibility
  };

  const logoStyle = {
    width: '30px', // Adjust size as needed
    height: '30px', // Adjust size as needed
    borderRadius: '100%', // Round the logo itself
    marginRight: '', // Spacing between logo and text
  };

  const textStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
      <Image src={logo} alt="WhatsApp Logo" style={logoStyle} width={90} height={90} />
      <span style={textStyle}></span>
    </a>
  );
};

export default StickyWhatsAppButton;
