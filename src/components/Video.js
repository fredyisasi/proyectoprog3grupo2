// Video.js
import React from 'react';
import '../pages/App.css';

function Video({ videoId }) {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
}

export default Video;
