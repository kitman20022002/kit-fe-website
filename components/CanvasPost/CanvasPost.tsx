import { useCallback, useEffect, useRef } from 'react';
import style from './CanvasPost.module.css';

interface ICanvasPost {
  width: number;
  height: number;
}

const CanvasPost = ({ width, height }: ICanvasPost) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // function GetRandNum(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  function getPoint(p1: any, p2: any) {
    const xDist = p2.x - p1.x;
    const yDist = p2.y - p1.y;
    const dist = Math.sqrt(xDist * xDist + yDist * yDist);

    const fractionOfTotal = 550 / dist;
    return {
      x: p1.x + xDist * fractionOfTotal,
      y: p1.y + yDist * fractionOfTotal,
    };
  }

  const draw = useCallback((ctx: CanvasRenderingContext2D | null) => {
    if (ctx) {
      const positionX: number = 90;
      const positionY: number = 100;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = '#01d1a7';
      ctx.strokeStyle = '#01d1a7';

      const d = getPoint(
        { x: 1000 - positionX, y: 75 - positionY },
        { x: 1300 - positionX, y: height + positionY }
      );

      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(1000 - positionX, 75 - positionY);
      ctx.lineTo(1300 - positionX, height + positionY);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(1943 - positionX, 300 - positionY);
      ctx.lineTo(d.x, d.y);
      ctx.stroke();
      ctx.closePath();
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
      width={width}
      height={height}
      className={style.bg__canvas}
    />
  );
};

export default CanvasPost;
