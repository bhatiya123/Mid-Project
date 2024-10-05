import React from 'react';
import { Star } from 'lucide-react';
import cc1 from '../../components/assets/cc1.png'
import cc2 from '../../components/assets/cc2.png'
import cc3 from '../../components/assets/cc3.png'

const TestimonialCard = ({ rating, text, name, role, imageSrc }) => (
  <div className="testimonial-card">
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="star-icon" />
      ))}
    </div>
    <p className="testimonial-text">{text}</p>
    <div className="client-info">
      <img src={imageSrc} alt={name} className="client-image" />
      <div className="client-details">
        <h4 className="client-name">{name}</h4>
        <p className="client-role">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur cupidatatproident, culpa qui officia deserunt mollit",
      name: "Nora Fateha",
      role: "Designer",
      imageSrc: cc1
    },
    {
      rating: 5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur cupidatatproident, culpa qui officia deserunt mollit",
      name: "Niro Markusa",
      role: "Designer",
      imageSrc:cc2
    },
    {
      rating: 5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur cupidatatproident, culpa qui officia deserunt mollit",
      name: "Nicolas Mark",
      role: "Designer",
      imageSrc: cc3
    }
  ];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-subtitle">Testimonial</h2>
      <h3 className="testimonial-title">What Our Clients Say</h3>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const styles = `
  .testimonial-section {
    background-color: #f3f4f6;
    padding: 4rem 1rem;
  }
  
  .testimonial-subtitle {
    text-align: center;
    color: #dc2626;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .testimonial-title {
    text-align: center;
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }
  
  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .testimonial-card {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .star-rating {
    display: flex;
    margin-bottom: 1rem;
  }
  
  .star-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #fbbf24;
    fill: #fbbf24;
  }
  
  .testimonial-text {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #4b5563;
  }
  
  .client-info {
    display: flex;
    align-items: center;
  }
  
  .client-image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  .client-name {
    font-weight: bold;
    margin: 0;
  }
  
  .client-role {
    color: #6b7280;
    margin: 0;
  }
`;

const Contact3 = () => (
  <>
    <style>{styles}</style>
    <TestimonialSection />
  </>
);

export default Contact3;