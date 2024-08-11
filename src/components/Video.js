import React from 'react';

const Video = ({ videoId, description }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`; // URL de la vista previa del video

  return (
    <div className="video-preview">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailUrl} alt="Video thumbnail" />
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Video;