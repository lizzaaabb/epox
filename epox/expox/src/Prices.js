import React from 'react'
import './Prices.css'

const products = [
  {
    title: "ეპოქსიდი",
    quantity: "1 კგ",
    price: "60 ლარი",
    image: "/epox2.png"
  },
  {
    title: "სტრუქტურული თაბაშირი",
    quantity: "1 კგ",
    price: "10 ლარი",
    image: "/epox3.png"
  },
  {
    title: "სოიოს ცვილი საყალიბე",
    quantity: "1 კგ",
    price: "40 ლარი",
    image: "/epox4.png"
  },
  {
    title: "საკონტეინერე ცვილი",
    quantity: "1 კგ",
    price: "35 ლარი",
    image: "/epox5.png"
  },
  {
    title: "თაბაშირის ფერები",
    quantity: "30 გრამი",
    price: "10 ლარი",
    image: "/epox6.png"
  },
  {
    title: "ეპოქსიდის და სანთლის ფერები",
    quantity: "8-10 ლ",
    price: "ფასი ცვალებადი",
    image: "/epox7.png"
  },
  {
    title: "ლაქი",
    quantity: "100 გრამი",
    price: "20 ლარი",
    image: "/epox8.png"
  },
  {
    title: "ყალიბები",
    quantity: "12-40 ლ",
    price: "ფასი ცვალებადი",
    image: "/epox9.png"
  }
]

const content = {
  title: "ეპოქსიდისთვის საჭირო მასალები",
  subtitle: "შეკვეთისთვის დაგვიკავშირდით",
  buttons: [
    { label: "Facebook", href: "https://www.facebook.com", type: "fb" },
    { label: "Call Us", href: "tel:+995500000000", type: "call" }
  ]
};

function Prices() {
  const handleButtonClick = () => {
    // Add any tracking or analytics here if needed
  };

  return (
    <div className='prices-body'>
      <h2 className="about-title">პროდუქტები და ფასები</h2>
      <div className="prices-grid">
        {products.map((product, index) => (
          <div key={index} className="card">
            <img src={product.image} alt={product.title} className="card-img" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.quantity}</p>
              <p className="card-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Order Section */}
      <p className="subtitle2">
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
  )
}

export default Prices