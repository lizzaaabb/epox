import React, { useState, useEffect } from 'react';
import { FaAward, FaStar } from 'react-icons/fa';
import './About.css';

const aboutContent = {
  description: `ჩვენთან იპოვით ყველაფერს, რაც ეპოქსიდის, თაბაშირისა და სანთლის ხელნაკეთობებისთვის გჭირდებათ —
    მაღალი ხარისხის მასალებიდან დაწყებული ონლაინ ვიდეოგაკვეთილებით დამთავრებული.
    თუ გსურთ შექმნათ ლამაზი დეკორატიული ნივთები სახლსა თუ ეზოში,
    ჩვენ გთავაზობთ როგორც საჭირო მასალებს, ასევე სასწავლო კურსებს,
    სადაც ნაბიჯ-ნაბიჯ ისწავლით ყველა დეტალს — როგორც დამწყები ხელოვანები, ასევე გამოცდილები. ✨`
};

function About() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev >= 5) {
          clearInterval(timer); // Stop the timer when reaching 5
          return 5;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='about-body'>
      <h2 className='about-title'>ჩვენს შესახებ</h2>
      <div className='about-flex'>
        <div className='about-experience'>
          <FaAward className='experience-icon' />
          <div className='counter-text'>+{counter} წლიანი</div>
          <div className='experience-label'>გამოცდილება</div>
        </div>
        <div 
          className='about-description'
          style={{
            '--bg-image': "url('/back.png')"
          }}
        >
          {aboutContent.description}
        </div>
      </div>
    </div>
  );
}

export default About;