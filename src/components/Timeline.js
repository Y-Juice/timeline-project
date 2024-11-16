import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import data from '../data/data.json';
import '../index.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Timeline = () => {
  useEffect(() => {
    const timeline = document.querySelector('.timeline');
    const events = document.querySelectorAll('.event');

    // Ensure elements are found
    if (!timeline || events.length === 0) {
      console.warn('Timeline or events not found');
      return;
    }

    const totalWidth = events.length * 500;

    // Horizontal scroll setup
    gsap.to(timeline, {
      x: () => `-${totalWidth}px`, // Corrected template literal
      ease: 'none',
      scrollTrigger: {
        trigger: timeline,
        start: 'top top',
        end: () => `+=${totalWidth}`, // Corrected template literal
        scrub: 1,
        pin: true,
      },
    });

    // Fade in-out animations for individual events
    events.forEach(event => {
      gsap.fromTo(
        event,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: event,
            start: 'left 70%',
            end: 'right 20%',
            scrub: true,
          },
        }
      );
    });

    // Typewriter effect for titles
    const typewriterTargets = document.querySelectorAll('.event h3');
    typewriterTargets.forEach(target => {
      const content = target.textContent;
      target.textContent = ''; // Clear text for animation
      gsap.to(target, {
        text: content, // Animate text content
        duration: 2,
        ease: 'power2.inPut',
        scrollTrigger: {
          trigger: target,
          start: 'left 80%',
          end: 'right 20%', // Trigger animation when text is visible
        },
      });
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
