import React from 'react';
import './Epox.css';

const e1 = '/epox01.png';
const e2 = '/epox2.png';
const e3 = '/epox3.png';
const e4 = '/epox4.png';
const e5 = '/epox5.png';
const e6 = '/epox6.png';
const e7 = '/epox7.png';
const e8 = '/epox8.png';
const e9 = '/epox9.png';
const e10 = '/epox10.png';
const e11 = '/epox11.png';

// Images array for easier debugging
const images = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11];

const epox = `
ეპოქსიდი არის უნივერსალური მასალა, რომელიც აერთიანებს გამაგრებულ ზედაპირს და გამჭვირვალობას.
მისი საშუალებით შეგიძლიათ შექმნათ მაგიდები, დეკორაციები, სამკაულები, ხელნაკეთობები ან ხის, მინის და
ლითონის ნივთების კრეატიული ინკორპორაცია. იდეალური როგორც დამწყებთათვის, ასევე გამოცდილი ხელოვანებისთვის.
`;

function Epox2() {
  return (
    <div className="epox-body-column">
      <div className="epox-text">
        <h2 className="epox-title">ეპოქსიდი – თქვენი კრეატიული პარტნიორი</h2>
        <p>{epox}</p>
      </div>
      <div className="card-3d">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className={`carousel-card card-${index + 1}`}
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Epox2;