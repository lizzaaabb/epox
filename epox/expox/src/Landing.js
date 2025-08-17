import React, { useState, useEffect } from "react";
import "./Landing.css";

const content = {
  title: "ეპოქსიდისთვის საჭირო მასალები",
  subtitle: "შეკვეთისთვის დაგვიკავშირდით",
  buttons: [
    { label: "Facebook", href: "https://www.facebook.com", type: "fb" },
    { label: "Call Us", href: "tel:+995500000000", type: "call" }
  ]
};

function Landing() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Mouse tracking for interactive background
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleButtonClick = (e) => {
    // Ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div 
      className="landing-container"
      style={{
        minHeight: '100vh',
        position: 'relative',
        backgroundImage: "url('/back.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      {/* Background Effects */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      
      {/* Interactive Mouse Gradient */}
      <div 
        className="mouse-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(141, 110, 99, 0.2) 0%, transparent 50%)`
        }}
      />

      {/* Main Content */}
      <div className={`content-card ${isLoaded ? 'loaded' : ''}`}>
        <h1 className="main-title">
          {content.title}
        </h1>
        
        <p className="subtitle">
          {content.subtitle}
        </p>
        
        <div className="buttons-container">
          {content.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              target={btn.type === "fb" ? "_blank" : undefined}
              rel={btn.type === "fb" ? "noopener noreferrer" : undefined}
              className={`btn btn-${btn.type}`}
              onClick={handleButtonClick}
              style={{ animationDelay: `${0.9 + index * 0.2}s` }}
            >
              <i className={btn.type === "fb" ? "fab fa-facebook-f" : "fas fa-phone"}></i>
              <span>{btn.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;