import { useState, useEffect } from "react";

/* 
  Drop your images in /src/assets/ named:
    banner1.jpg  banner2.jpg  banner3.jpg
  and update the imports below.

  Each slide also has a tag, heading, and subtitle
  overlaid on top for a premium corporate look.
*/

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const slides = [
  {
    image: banner1,
   
  },
  {
    image: banner2,
   
  },
  {
    image: banner3,
    
  },
  {
    image: banner4,
  }
  

];

function Banner() {
  const [current, setCurrent] = useState(0);

  /* Auto-advance every 5 seconds — same logic you had */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="banner-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark gradient overlay */}
            <div className="banner-slide-overlay" />

            {/* Text content */}
            <div className="banner-content">
              <span className="banner-tag">{slide.tag}</span>
              <h1 className="banner-heading">{slide.heading}</h1>
              <p className="banner-sub">{slide.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slim progress bar at very bottom — auto-resets with each slide */}
      <div className="banner-progress" key={current} />

      {/* Minimal dot indicators — no clickable buttons, purely visual */}
      <div className="banner-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`banner-dot ${i === current ? "banner-dot--active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
