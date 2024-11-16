import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import data from '../data/data.json';
import '../index.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Timeline = () => {
  const ballRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const timeline = document.querySelector('.timeline');
    const events = document.querySelectorAll('.event');
    const ball = ballRef.current;
    const indicator = indicatorRef.current;

    if (!timeline || events.length === 0) {
      console.warn('Timeline or events not found');
      return;
    }

    const totalWidth = events.length * 600;

    // Horizontal scroll setup
    gsap.to(timeline, {
      x: () => `-${totalWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: timeline,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        onUpdate: self => {
          const progress = self.progress;
          const maxX = indicator.clientWidth - ball.clientWidth;
          ball.style.left = `${progress * maxX}px`;
        },
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
            start: 'left 80%',
            end: 'right 30%',
            scrub: true,
          },
        }
      );
    });

    // Typewriter effect for dates
    const typewriterTargets = document.querySelectorAll('.event h3.date');
    typewriterTargets.forEach(target => {
      const content = target.dataset.text;
      target.textContent = '';
      gsap.to(target, {
        text: content,
        duration: 2,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: target,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Enable draggable behavior for the ball
    const onDrag = e => {
      const rect = indicator.getBoundingClientRect();
      const maxX = rect.width - ball.offsetWidth;
      let newX = e.clientX - rect.left - ball.offsetWidth / 2;

      // Clamp the ball's position within the indicator bounds
      newX = Math.max(0, Math.min(newX, maxX));
      ball.style.left = `${newX}px`;

      // Scroll the timeline based on the ball's position
      const progress = newX / maxX;
      const scrollY = progress * (document.body.scrollHeight - window.innerHeight);
      window.scrollTo({ top: scrollY, behavior: 'smooth' });
    };

    ball.addEventListener('mousedown', () => {
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', onDrag);
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ball.removeEventListener('mousedown', onDrag);
    };
  }, []);

  return (
    <>
      <div className="timeline">
        {data.map((period, index) => (
          <div key={index} className="period">
            <h2>{period.period}</h2>
            <div className="events-container">
              {period.events.map((event, idx) => (
                <div key={idx} className="event">
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <h3 className="date" data-text={event.year}>{event.year}</h3>
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
      <div className="scroll-indicator" ref={indicatorRef}>
        <div className="scroll-indicator-line"></div>
        <div className="scroll-indicator-circle" ref={ballRef}></div>
      </div>
    </>
  );
};

export default Timeline;
