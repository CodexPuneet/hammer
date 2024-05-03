import React, { useState } from 'react'
import Autocrausel from '../Components/Autocrausal'
import { Box, Button, Flex } from '@chakra-ui/react'
import { keyframes } from '@emotion/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import heroimage5 from '../Assets/banner5.png';
import heroimage8 from '../Assets/banner8.png';
import heroimage9 from '../Assets/banner9.png';
import phonering from '../Assets/phone.gif';
import whatsappgif from '../Assets/whatsapp.gif';
import adult1 from '../Assets/adult1.png'
import adult2 from '../Assets/adult2.png'
import adult from '../Assets/adult.png'
import review1 from '../Assets/review1.png'
import review2 from '../Assets/review2.png'
import review3 from '../Assets/review3.png'
import review4 from '../Assets/review4.png'
import review5 from '../Assets/review5.png'
import review6 from '../Assets/review6.png'
import './Homepage.css';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [newReview, setNewReview] = useState({ author: '', comment: '', rating: 0 });
  const [reviews, setReviews] = useState([
    { 
      id: 1,
      author: 'Shankar Maurya',
      comment: 'Amazing product! It helped me boost my energy and stamina significantly.',
      productImage: review1,
      rating: 5,
    },
    {
      id: 2,
      author: 'Sunil Yadav',
      productImage: review3,
      comment: 'I\'ve been using this product for a month now, and I can feel the difference already. Highly recommend!',
      rating: 4,
    },
    {
      id: 3,
      author: 'Amit Sharma',
      productImage: review2,
      comment: 'यह उत्पाद मेरे व्यायाम को और भी बेहतर बना दिया है। मुझे इसकी गुणवत्ता बहुत पसंद आई है।',
      rating: 5,
    },
    {
      id: 4,
      author: 'Rahul Gupta',
      productImage: review4,
      comment: 'This product is a game-changer for me. I feel more focused and energetic throughout the day.',
      rating: 5,
    },
    {
      id: 5,
      author: 'Abhi Singh',
      productImage: review5,
      comment: 'I was skeptical at first, but this product exceeded my expectations. Will definitely buy again!',
      rating: 4,
    },
    {
      id: 6,
      author: 'Sagar Patel',
      productImage: review6,
      comment: 'I did not notice any difference after using this product. Disappointed!',
      rating: 2,
    },
    {
      id: 7,
      author: 'Ankit Verma',
      comment: 'यह उत्पाद मेरी उम्मीदों से बाहर निकला। मुझे इसका उपयोग बिल्कुल नहीं करना था।',
      rating: 1,
    },
    // Add more reviews as needed
  ]);

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
const handleDialpadCall = () => {
  // Replace 'yourPhoneNumber' with the actual phone number you want to dial
  const phoneNumber = '918744857352';
  window.location.href = `tel:${phoneNumber}`;
};
const shakeAnimation = keyframes`
  0% { transform: translateX(0) rotate(0);  }
  25% { transform: translateX(-5px) rotate(-2deg); }
  50% { transform: translateX(5px) rotate(2deg);  }
  75% { transform: translateX(-3px) rotate(-1deg);  }
  100% { transform: translateX(3px) rotate(1deg);  }
`;
const handleReviewSubmit = () => {
  // Check if any input field is empty
  if (!newReview.author || !newReview.comment || !newReview.rating) {
    alert('Please fill in all fields before submitting the review.');
    return; // Exit the function if any field is empty
  }

  // Logic to handle review submission
  // For simplicity, let's just add the new review to the reviews array
  const updatedReviews = [...reviews, newReview];
  // Update the reviews state with the new review
  setReviews(updatedReviews);

  // Clear form fields after submission
  setNewReview({ author: '', comment: '', rating: 0 });

  console.log('New Review:', newReview);
};



const renderReviews = () => {
  if (showAllReviews) {
    return reviews.map(review => (
      <div key={review.id} className="review-card">
        <div className="review-header">
          <div className="review-author">{review.author}</div>
          <div className="review-rating">{renderRatingStars(review.rating)}</div>
          <img src={review.productImage}  className="product-image" />
        </div>
        <div className="review-comment">{review.comment}</div>
      </div>
    ));
  } else {
    // Only render the first three reviews
    return reviews.slice(0, 3).map(review => (
      <div key={review.id} className="review-card">
        <div className="review-header">
          <div className="review-author">{review.author}</div>
          <div className="review-rating">{renderRatingStars(review.rating)}</div>
          <img src={review.productImage}  className="product-image" />
        </div>
        <div className="review-comment">{review.comment}</div>
        
      </div>
    ));
  }
};


// Function to render reviews
const renderRatingStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} className="star">&#9733;</span>);
  }
  return stars;
};
  return (
    <>
    <div className="homepage-container">
      <Autocrausel />
      <Box className="homepage-data"  >
    <h2 style={{ fontSize: '22px', marginBottom: '16px' , fontWeight: 'bold', fontFamily:'arial'}}>Ayurvedic Hammer Of Thor Capsule For Sex Time Medicine For Men</h2>
    {/* <p style={{ fontSize: '18px', marginBottom: '12px' }}>Price: <del>Rs. 2,499.00</del> <strong style={{ color: 'green' }}>Rs. 1200.00</strong> (50% OFF)</p> */}
    {/* <p style={{ fontSize: '20px', marginBottom: '16px' }}><strong>🔥 BUY 1 GET 1 FREE 🔥</strong></p> */}
    <p style={{ fontSize: '16px', marginBottom: '20px' }}>Unleash Your Inner Strength: DS Ayurweda Hammer Of Thor Capsule - Elevating Men's Vitality and Performance</p>
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

<Button
     className='call_now'
        onClick={handleDialpadCall}
        color="white"
        bg="#007bff"
        size="lg"
        _hover={{
          bg: 'blue.500',
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
        disabled={isLoading}
      >
        <CallIcon style={{ marginRight: '8px' }} />
         Call Now
      </Button>
     </Box>
    
    </div>
  {/* Floating button */}

  <div className="floating-call-button">     
        <img src={phonering}  onClick={handleDialpadCall} alt="phone" style={{width:'40px'}} />
      </div>
      <div className="floating-whatsapp-button">     
        <img src={whatsappgif}  onClick={handleWhatsAppChat} alt="whatsapp" style={{width:'60px'}} />
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
<div className='hompage-banner2' >
         
  <img src={heroimage8} />
</div>
<div className='adult1' >
         
  <img src={adult1} />
  <h1>एक हफ्ते में फर्क देखे और जीवन का सुख उठाए ।</h1>
</div>

<div className='adult1' >
         
  <img src={adult2} />
  <h1>टाइमिंग के साथ साइज भी बड़े गारंटी के साथ मात्रा 2 हफ्तों में ।</h1>
</div>
<div className='adult1' >
         
  <img src={adult} />
  <h1>गैरिंटेड साइज की वृद्धि होगी वार्न पैसा वापस ।</h1>
</div>
<div className='hompage-banner3' >
         
  <img src={heroimage9} />
</div>
    <div style={{ fontFamily: 'arial', padding: '10px', display: 'flex' }}>
  <div style={{ flex: '1', marginRight: '20px' }}>
    <div style={{ marginBottom: '10px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Product Description :</div>
      <div>DS Ayurveda Hammer Of Thor Capsule For Men. It can be beneficial for maintaining men's well-being and boost their energy, stamina, and endurance. Helps to fight weakness and increase energy. May assist in the management of testosterone levels. It improves circulation and physical performance.</div>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Dosage :</div>
      <div>1 capsule twice a day or as directed by the physician.</div>
    </div>
  </div>
 
</div>

<div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">{renderReviews()}</div>
        {!showAllReviews && reviews.length > 3 && (
          <Button onClick={() => setShowAllReviews(true)} variant="link" color="blue.500">
            Read More
          </Button>
        )}
      </div>
        {/* Review form */}
        <div className="review-form">
        <h2>Your Feedback is important for us !</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.author}
          onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
        />
        <textarea
          placeholder="Your Comment"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
        />
        <Button onClick={handleReviewSubmit}>Submit Review</Button>
      </div>

    </>
  )
}

export default Homepage