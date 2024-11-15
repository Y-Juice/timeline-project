import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Event from './Event';
import data from '../data/data.json';
import {ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





const Timeline = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scrolling
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0,
    });

    ScrollTrigger.defaults({
      markers: false,
      start: 'top center',
      end: 'bottom center',
    });
  }, []);

  return (
    <div className="timeline">
      {data.map((period, index) => (
        <div key={index}>
          <h2>{period.period}</h2>
          {period.events.map((event, idx) => (
            <Event
              key={idx}
              year={event.year}
              title={event.title}
              description={event.description}
              source={event.source}
              image={event.image}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
