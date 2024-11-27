import React from 'react';
import gif from '../assets/academia1.gif'; // Certifique-se de que o caminho está correto

function VideoBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${gif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}
    ></div>
  );
}

export default VideoBackground;
