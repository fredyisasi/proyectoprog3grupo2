// Video.js
import React from 'react';
import '../pages/App.css';

const Video = ({ videoId }) => {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>
  );
};

export default Video;