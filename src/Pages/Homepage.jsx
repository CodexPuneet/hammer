import React from 'react'
import Autocrausel from '../Components/Autocrausal'
import { Box, Button, Flex } from '@chakra-ui/react'
import { keyframes } from '@emotion/react';

const Homepage = () => {

  const handleWhatsAppChat = () => {
    // Replace 'YOUR_PHONE_NUMBER' with the actual phone number you want to chat with
    const phoneNumber = '8744857352';
    
    // Constructing the WhatsApp chat link with the phone number
    const whatsappChatLink = `https://wa.me/${phoneNumber}`;
    
    // Open the WhatsApp chat link in a new window
    window.open(whatsappChatLink, '_blank');
};
const shakeAnimation = keyframes`
  0% { transform: translateX(0) rotate(0); background-color: #1e90ff; }
  25% { transform: translateX(-5px) rotate(-2deg); background-color: #a5d3d0; }
  50% { transform: translateX(5px) rotate(2deg); background-color: #1e90ff; }
  75% { transform: translateX(-3px) rotate(-1deg); background-color: #a5d3d0; }
  100% { transform: translateX(3px) rotate(1deg); background-color: #1e90ff; }
`;

  return (
    <>
    <div style={{display:'flex', marginTop:"70px"}}>
      <Autocrausel />
      <Box p="4" mt={'2%'} w={'45%'} >
    <h2 style={{ fontSize: '22px', marginBottom: '16px' , fontWeight: 'bold', fontFamily:'arial'}}>Ayurvedic Power Of Thor Capsule For Sex Time Medicine For Men</h2>
    <p style={{ fontSize: '18px', marginBottom: '12px' }}>Price: <del>Rs. 2,499.00</del> <strong style={{ color: 'green' }}>Rs. 1200.00</strong> (50% OFF)</p>
    <p style={{ fontSize: '20px', marginBottom: '16px' }}><strong>🔥 BUY 1 GET 1 FREE 🔥</strong></p>
    <p style={{ fontSize: '16px', marginBottom: '20px' }}>Unleash Your Inner Strength: TSA Power Of Thor Capsule - Elevating Men's Vitality and Performance</p>
    <Button
  onClick={handleWhatsAppChat}
  color="white"
  bg="blue.500"
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
  Order Now
</Button>

     </Box>
    </div>
    <div style={{ width: '90%', margin: '50px auto' ,display:'flex',fontFamily:'arial'}}>
      
 <h2 style={{fontFamily:'arial', fontWeight:'bold',width: '50%'}}>Product Description :</h2>
  <p style={{fontFamily:'arial',justifyContent:'left'}}>DS Ayurweda Power Of Thor Capsule For Men it can be beneficial for maintaining men well being and boost their energy, stamina, and endurance helps to fight weakness and increase energy May assist in the management of testosterone level. It improves circulation and physical performance</p>
    
 
</div>
<div style={{ width: '90%', margin: '20px auto' ,display:'flex',fontFamily:'arial'}}>
      
      <h2 style={{fontFamily:'arial', fontWeight:'bold'}}>Dosage :</h2>
       <p style={{fontFamily:'arial',justifyContent:'left'}}>1 capsule twice a day or as directed by the physician</p>
         
      
     </div>

    </>
  )
}

export default Homepage