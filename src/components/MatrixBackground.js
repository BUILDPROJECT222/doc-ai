import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);

    // Doctor silhouette coordinates (simplified)
    const doctorSilhouette = [
      // Head
      { x: 0.5, y: 0.2, radius: 0.05 },
      // Body
      { x: 0.5, y: 0.4, width: 0.2, height: 0.3 },
      // Arms
      { x: 0.4, y: 0.4, width: 0.05, height: 0.2 },
      { x: 0.65, y: 0.4, width: 0.05, height: 0.2 },
      // Legs
      { x: 0.45, y: 0.7, width: 0.05, height: 0.2 },
      { x: 0.55, y: 0.7, width: 0.05, height: 0.2 },
    ];

    const isInSilhouette = (x, y) => {
      const relX = x / canvas.width;
      const relY = y / canvas.height;
      
      return doctorSilhouette.some(part => {
        if (part.radius) { // Head
          const dx = relX - part.x;
          const dy = relY - part.y;
          return (dx * dx + dy * dy) < (part.radius * part.radius);
        } else { // Body parts
          return relX >= part.x - part.width/2 &&
                 relX <= part.x + part.width/2 &&
                 relY >= part.y &&
                 relY <= part.y + part.height;
        }
      });
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        if (isInSilhouette(x, y)) {
          ctx.fillStyle = '#00ff00';
          ctx.fillText(char, x, y);
        } else {
          ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
          ctx.fillText(char, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.8,
        pointerEvents: 'none',
      }}
    />
  );
};

export default MatrixBackground; 