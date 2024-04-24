import React from 'react'
import Autocrausel from '../Components/Autocrausal'
import { Box, Button, Flex } from '@chakra-ui/react'
import { keyframes } from '@emotion/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import heroimage5 from '../Assets/banner5.png';
import './Homepage.css';

const Homepage = () => {

  const handleWhatsAppChat = () => {
    const phoneNumber = '918744857352'; // Example: India country code is 91
    const whatsappChatLink = `https://wa.me/${phoneNumber}`;
    
    // Try opening the WhatsApp chat link in a new window
    const newWindow = window.open(whatsappChatLink, '_blank');

    // If the new window couldn't be opened, show a fallback message
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert('Please manually open WhatsApp and initiate a chat with the provided phone number.');
    }
};
const shakeAnimation = keyframes`
  0% { transform: translateX(0) rotate(0);  }
  25% { transform: translateX(-5px) rotate(-2deg); }
  50% { transform: translateX(5px) rotate(2deg);  }
  75% { transform: translateX(-3px) rotate(-1deg);  }
  100% { transform: translateX(3px) rotate(1deg);  }
`;

  return (
    <>
    <div className="homepage-container">
      <Autocrausel />
      <Box className="homepage-data"  >
    <h2 style={{ fontSize: '22px', marginBottom: '16px' , fontWeight: 'bold', fontFamily:'arial'}}>Ayurvedic Power Of Thor Capsule For Sex Time Medicine For Men</h2>
    <p style={{ fontSize: '18px', marginBottom: '12px' }}>Price: <del>Rs. 2,499.00</del> <strong style={{ color: 'green' }}>Rs. 1200.00</strong> (50% OFF)</p>
    <p style={{ fontSize: '20px', marginBottom: '16px' }}><strong>🔥 BUY 1 GET 1 FREE 🔥</strong></p>
    <p style={{ fontSize: '16px', marginBottom: '20px' }}>Unleash Your Inner Strength: TSA Power Of Thor Capsule - Elevating Men's Vitality and Performance</p>
    <Button
  onClick={handleWhatsAppChat}
  color="white"
  bg="#25D366"
  size="lg"
  _hover={{
    bg: 'green.500',
    color: 'white',
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  _active={{
    transform: 'scale(0.95)',
  }}
  _focus={{
    outline: 'none', // Remove default focus outline
  }}
  css={{
    animation: `${shakeAnimation} 0.5s ease`, // Decreased animation duration to 0.2s
    animationIterationCount: 'infinite',
    animationDelay: '0.1s', // Decreased animation delay to 0.1s
  }}
>
<WhatsAppIcon style={{ marginRight: '8px' }} />
  Order Now
</Button>

     </Box>
    </div>
    <div className='homepage-table' >
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <tbody>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Form</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Capsule</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Packaging type</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Bottle</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Packaging size</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>30 Capsules</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Brand</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>DS Ayurweda</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Composition</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Natural Ingredients Shatavari, Safed musli, Ashwagandha, Pipla Mool, Trikatu, Gokhru, Aloe Vera</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Direction of use</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>1 Capsule twice a day or as directed by the physician</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Prescription</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>No</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Shelf life</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>36 months</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>Maximum Order Quantity/User</td>
        <td style={{ border: '2px solid black', padding: '5px', fontWeight: 'bold' }}>100 Bottle</td>
      </tr>
    </tbody>
  </table>
</div>
<div className='hompage-banner' >
         
  <img src={heroimage5} />
</div>


    <div style={{ fontFamily: 'arial', padding: '10px', display: 'flex' }}>
  <div style={{ flex: '1', marginRight: '20px' }}>
    <div style={{ marginBottom: '10px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Product Description :</div>
      <div>DS Ayurveda Power Of Thor Capsule For Men. It can be beneficial for maintaining men's well-being and boost their energy, stamina, and endurance. Helps to fight weakness and increase energy. May assist in the management of testosterone levels. It improves circulation and physical performance.</div>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Dosage :</div>
      <div>1 capsule twice a day or as directed by the physician.</div>
    </div>
  </div>
 
</div>





    </>
  )
}

export default Homepage