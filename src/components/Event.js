import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Event = ({ year, title, description, source, image }) => {
  const imageRef = useRef();

  useEffect(() => {
    // Animate the image when it comes into view
    gsap.fromTo(
      imageRef.current,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="event">
      <div className="event-content">
        <h3>{year}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
      </div>
      <div className="event-image">
        <img ref={imageRef} src={image} alt={title} />
      </div>
    </div>
  );
};

export default Event;
