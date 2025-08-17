import React from 'react';
import { FaFire, FaShapes } from 'react-icons/fa'; // these exist
import './Candle.css';

const candleTitle = "სანთლის მასალები";
const candleText = "ყველაფერი, რაც გჭირდება ხარისხიანი სანთლების დასამზადებლად — ცვილი, ფერები, სურნელები და აქსესუარები. იდეალურია როგორც მცირე ბიზნესისთვის, ისე ფართო წარმოებისთვის.";

const plasterTitle = "თაბაშირი";
const plasterText = "მაღალი ხარისხის თაბაშირი და აქსესუარები, რომ შექმნა განსხვავებული დეკორი ან ინტერიერის ნივთები. მარტივი გამოსაყენებელია და იდეალურია როგორც პატარა, ისე დიდი ბიზნესისთვის.";

function Candle() {
  return (
    <div 
      className='candle-body'
      style={{
        backgroundImage: "url('/candle.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <div className='candle-text-wrapper'>
        <div className='candle-text-inner'>

          <div className='candle-section'>
            <h2>
              <FaFire style={{ marginRight: '10px' }} />
              {candleTitle}
            </h2>
            <p>{candleText}</p>
          </div>

          <div className='plaster-section'>
            <h2>
              <FaShapes style={{ marginRight: '10px' }} />
              {plasterTitle}
            </h2>
            <p>{plasterText}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Candle;
