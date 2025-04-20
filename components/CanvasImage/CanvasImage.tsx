import { useRef, useEffect, useCallback } from 'react';

const CanvasImage = () => {
  const width: number = 350;
  const height: number = 350;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const img = new Image();
  // img.src =
  //   'https://blog.iplayerhd.com/wp-content/uploads/2017/05/black-and-white-code-programming-tech-79290.jpeg';

  function GetRandNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const draw = useCallback((ctx: CanvasRenderingContext2D | null) => {
    if (ctx) {
      const positionX: number = 0;
      const positionY: number = 0;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      // ctx.drawImage(img, -75, -100, 500, 500);

      ctx.fillStyle = '#01d1a7';
      ctx.strokeStyle = '#01d1a7';
      ctx.globalAlpha = 0.7;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1.0;

      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(GetRandNum(50, 100) - positionX, 0);
      ctx.lineTo(
        GetRandNum(120, 200) - positionX,
        GetRandNum(120, height) - positionY
      );
      ctx.lineTo(width, GetRandNum(30, height));
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      // eslint-disable-next-line no-unused-vars
      let frameCount: number = 0;
      let animationFrameId: number;

      // Our draw came here
      const render = () => {
        frameCount += 1;
        // img.onload = () => {
        //
        // };
        draw(context);
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
      className="title__bg-image"
    />
  );
};

export default CanvasImage;
