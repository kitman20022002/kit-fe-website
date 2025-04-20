import { useRef, useEffect } from 'react';
import style from './CanvasTri.module.css';

export const GRID1 = `+--++--------++---+++--+++-++++-+++-++++`;

export const COLORS = [
  '239,50,57',
  // "165,22,28",
  // '1,187,190',
  '99,123,255',
  // "12,120,163",
  // '249,114,17',
  '40,20,131',
  '247,151,42',
];

// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
interface ICanvasTriProps {
  selectColor: any;
  delay: number;
}

const CanvasTri = ({ selectColor, delay = 0 }: ICanvasTriProps) => {
  const ref: any = useRef();
  let canvas: any;
  let context: any;
  const colors: any = [];
  let requestId: any;
  let alpha = 0;
  const render = () => {
    let positionX = 0;
    let positionY = 10;
    const renderTriPreTime = 1;
    const width = 10;
    const height = 10;
    let col = 0;
    const space = width;
    context.clearRect(0, 0, canvas.width, canvas.height);
    let direction = 1;

    for (let i = 0; i < 20; i += 1) {
      const renderNextCol = i % renderTriPreTime === 0 && i !== 0;
      if (renderNextCol) {
        positionY += height / 2;
        positionX = 0;
        col += 1;
      }

      const centerX = positionX + width / 2;
      const centerY = positionY + height / 2;
      const alp = (col + 1) * (0.3 / renderTriPreTime) + alpha;

      // #F5F8F9
      context.beginPath();
      context.moveTo(centerX - (width / 2) * direction, centerY - height / 2);
      context.lineTo(centerX - (width / 2) * direction, centerY + height / 2);
      context.lineTo(centerX + (width / 2) * direction, centerY);
      context.closePath();
      context.fillStyle = `rgba(${colors[i]},${Math.cos(alp)}`;
      context.fill();

      // context.fillStyle = `rgba(255,0,0,1)`;
      // context.fillText(Math.cos(alp), 50, positionY + 25);

      positionX += space;
      direction = direction === 1 ? -1 : 1;
      // alpha -= 0.0001;
    }

    alpha -= 0.02;
    requestId = requestAnimationFrame(render);
  };
  // 20

  const resized = () => {
    // ref.current.width = document.body.clientWidth;
    // ref.current.height = document.body.clientHeight;
  };

  useEffect(() => {
    window.addEventListener('resize', resized);
    return () => window.removeEventListener('resize', resized);
  });

  useEffect(() => {
    setTimeout(() => {
      canvas = ref.current;
      context = canvas.getContext('2d');

      for (let i = 0; i < GRID1.length; i += 1) {
        colors[i] = selectColor;
      }
      resized();
      render();

      return () => {
        cancelAnimationFrame(requestId);
      };
    }, delay);
  }, []);

  return <canvas ref={ref} className={style.bg__canvas} id="recttri" />;
};

export default CanvasTri;
