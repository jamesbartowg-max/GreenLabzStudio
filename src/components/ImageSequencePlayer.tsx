import React, { useEffect, useRef, useState } from 'react';

interface ImageSequencePlayerProps {
  startCount: number;
  middleCount: number;
  endCount: number;
  className?: string;
}

const ImageSequencePlayer: React.FC<ImageSequencePlayerProps> = ({ startCount, middleCount, endCount, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'start' | 'middle' | 'ende'>('start');
  const [currentFrame, setCurrentFrame] = useState(1);
  const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const fps = 30;

  const preloadImage = (p: 'start' | 'middle' | 'ende', frame: number) => {
    const frameStr = frame.toString().padStart(3, '0');
    const path = `/Video/${p}/ezgif-frame-${frameStr}.jpg`;
    if (!imagesRef.current[path]) {
      const img = new Image();
      img.src = path;
      imagesRef.current[path] = img;
    }
  };

  useEffect(() => {
    for (let i = 1; i <= Math.min(startCount, 20); i++) preloadImage('start', i);
    for (let i = 1; i <= Math.min(middleCount, 20); i++) preloadImage('middle', i);
    for (let i = 1; i <= Math.min(endCount, 20); i++) preloadImage('ende', i);
  }, [startCount, middleCount, endCount]);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const deltaTime = time - lastTimeRef.current;

      if (deltaTime > 1000 / fps) {
        lastTimeRef.current = time;

        setCurrentFrame((prev) => {
          let next = prev + 1;
          if (phase === 'start') {
            if (next > startCount) {
              setPhase('middle');
              return 1;
            }
          } else if (phase === 'middle') {
            if (next > middleCount) {
              setPhase('ende');
              return 1;
            }
          } else if (phase === 'ende') {
            if (next > endCount) {
              setPhase('start'); // Loop back to the very beginning
              return 1;
            }
          }
          
          const preloadNext = next + 10;
          if (phase === 'start' && preloadNext <= startCount) preloadImage('start', preloadNext);
          else if (phase === 'middle' && preloadNext <= middleCount) preloadImage('middle', preloadNext);
          else if (phase === 'ende' && preloadNext <= endCount) preloadImage('ende', preloadNext);
          
          return next;
        });
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [phase, startCount, middleCount, endCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameStr = currentFrame.toString().padStart(3, '0');
    const path = `/Video/${phase}/ezgif-frame-${frameStr}.jpg`;
    const img = imagesRef.current[path];

    if (img && img.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } else if (img) {
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [currentFrame, phase]);

  return (
    <canvas 
      ref={canvasRef} 
      width={1920} 
      height={1080} 
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

export default ImageSequencePlayer;
