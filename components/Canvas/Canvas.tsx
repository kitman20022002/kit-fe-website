import { useCallback, useEffect, useRef } from 'react';
import style from './Canvas.module.css';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function GetRandNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const draw = useCallback((ctx: CanvasRenderingContext2D | null) => {
    if (ctx) {
      const positionX: number = 90;
      const positionY: number = 100;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = '#01d1a7';
      ctx.strokeStyle = '#01d1a7';

      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(
        GetRandNum(50, 100) - positionX,
        GetRandNum(50, 100) - positionY
      );
      ctx.lineTo(
        GetRandNum(120, 200) - positionX,
        GetRandNum(120, 150) - positionY
      );
      ctx.lineTo(
        GetRandNum(120, 150) - positionX,
        GetRandNum(170, 200) - positionY
      );
      ctx.lineTo(
        GetRandNum(70, 100) - positionX,
        GetRandNum(170, 190) - positionY
      );
      ctx.lineTo(
        GetRandNum(30, 50) - positionX,
        GetRandNum(110, 190) - positionY
      );
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      let frameCount: number = 0;
      let animationFrameId: number;

      // Our draw came here
      const render = () => {
        frameCount += 1;
        if (frameCount === 2) {
          draw(context);
        }
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
    return () => {};
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      className={style.bg__canvas}
    />
  );
};

export default Canvas;
