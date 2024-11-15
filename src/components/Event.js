import React from 'react';
import PropTypes from 'prop-types';
import './Event.css';

const Event = ({ year, title, description, source, image }) => {
  if (!year || !title || !description) {
    console.warn('Missing event data');
    return null; // Avoid rendering if critical props are missing
  }

  return (
    <div className="event">
      <div className="event-content">
        <h3>{title}</h3>
        <p><strong>{year}</strong>: {description}</p>
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
      </div>
      {image && (
        <div className="event-image">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
};

Event.propTypes = {
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
  image: PropTypes.string,
};

Event.defaultProps = {
  year: 'Unknown Year',
  title: 'Untitled Event',
  description: 'No description available.',
  source: '',
  image: '',
};

export default Event;
