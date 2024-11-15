import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from '../data/data.json';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  useEffect(() => {
    const timeline = document.querySelector('.timeline');
    const events = document.querySelectorAll('.event');

    // Ensure elements are found
    if (!timeline || events.length === 0) {
      console.warn('Timeline or events not found');
      return;
    }

    // Horizontal scroll setup
    const totalWidth = events.length * 400; // Assuming each event is 400px wide

    gsap.to(timeline, {
      x: () => `-${totalWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: timeline,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="timeline">
      {data.map((period, index) => (
        <div key={index} className="period">
          <h2>{period.period}</h2>
          <div className="events-container">
            {period.events.map((event, idx) => (
              <div key={idx} className="event">
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <h3>{event.year}</h3>
                  <p>{event.description}</p>
                  <a href={event.source} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                </div>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
