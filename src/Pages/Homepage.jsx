import React from 'react'
import Autocrausel from '../Components/Autocrausal'
import { Box, Button, Flex } from '@chakra-ui/react'

const Homepage = () => {

  const handleWhatsAppChat = () => {
    // Replace 'YOUR_PHONE_NUMBER' with the actual phone number you want to chat with
    const phoneNumber = '7607147144';
    
    // Constructing the WhatsApp chat link with the phone number
    const whatsappChatLink = `https://wa.me/${phoneNumber}`;
    
    // Open the WhatsApp chat link in a new window
    window.open(whatsappChatLink, '_blank');
};

  return (
    <>
    <div style={{display:'flex', marginTop:"70px"}}>
      <Autocrausel />
      <Box p="4" mt={'2%'} >
    <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#3182ce' , fontWeight: 'bold'}}> Ayurvedic Herbal Adivasi Hair Oil</h2>
    <p style={{ fontSize: '18px', marginBottom: '12px' }}>Price: <del>Rs. 1,299.00</del> <strong style={{ color: 'green' }}>Rs. 649.00</strong> (50% OFF)</p>
    <p style={{ fontSize: '20px', marginBottom: '16px' }}><strong>🔥 BUY 1 GET 1 FREE 🔥</strong></p>
    <p style={{ fontSize: '18px', marginBottom: '20px' }}>Get your confidence back with your hair with our natural Adivasi Herbal Hair Oil!</p>
    <Button onClick={handleWhatsAppChat} colorScheme="blue" size="lg" _hover={{ bg: 'green.500', color: 'white', transform: 'scale(1.05)', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' }}>Order Now - Cash on Delivery</Button>
     </Box>
    </div>
    {/* <div style="display: flex; justify-content: space-between; margin: 2%;">
  <div style="width: 30%;">
    <h2 style="font-weight: bold;">Adivasi Herbal Hair Oil</h2>
  </div>
  <div style="width: 65%;">
    <p style="text-align: justify; margin-bottom: 10px;">
      Adivasi Herbal Hair Oil is basically made by purely Adivasi ayurvedic herbs which effectively prevent the hairs fall and help to grow long hairs with no side effect. This Hair Oil is used for Hair Problems like Hair Loss, Dandruff, Hair Growth, Grey Hair, New Hair Alopecia Dry Hair Spit Ends Dull Hair Frizzy Hair. Use this Oil 2 to 3 times a week. Used to make your Hair and to control Dandruff. Apply the oil 2 to 3 times a week Before Bath to stop the Dandruff And Healthy long Hair.
    </p>
    <h2 style="font-weight: bold;">CONTAINS:</h2>
    <p style="text-align: justify; margin-bottom: 10px;">
      The powerful blend of 101 rare herbs including Neelambari, Bringraj, Amla, Aloe vera, Tulsi, dasawala, jetamasi lavancha, kasturi, changalkushtu, baniman tree, lotus flower, indigo plants, athimadura, net grass, Loliswala, Soapnut extra Helps in controlling hair loss & actively stimulates new hair growth. Fresh herbs are curated from the dense forest of NAAGARAHOLE forest (Mysore).
    </p>
    <h2 style="font-weight: bold;">DIRECTION TO USE:</h2>
    <p style="text-align: justify;">
      Apply Thoroughly & Deeply hair roots and Leave Over Night for Good Results. Use at least 3 days per week for Better Results.
    </p>
  </div>
</div> */}


    </>
  )
}

export default Homepage