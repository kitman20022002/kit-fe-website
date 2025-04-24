import React, { useRef, useEffect, useState } from "react";
import style from "./Canvas.module.css";

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};

export const GRID1 =
  "+--++" + "-----" + "---++" + "---++" + "+--++" + "+-+++" + "+-+++" + "-++++";

export const GRID2 =
  "++-++" + "-++--" + "+--+-" + "---+-" + "+--++" + "+-+-+" + "+-+--" + "--+++";

export const COLORS = [
  "239,50,57",
  // "165,22,28",
  "1,187,190",
  // "12,120,163",
  "249,114,17",
  // "247,151,42",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Canvas = () => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const [colors, setColors] = useState([]);
  const [alpha, setAlpha] = useState(0);

  // Handle resizing
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
    }
  };

  // Initialize colors only once
  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < GRID1.length; i++) {
      newColors[i] = COLORS[getRandomInt(COLORS.length)];
    }
    setColors(newColors);
  }, []);

  // Set up resize listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation function
  const render = React.useCallback(
    (currentAlpha) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      let positionX = 0;
      let positionY = 10;
      let width = 100;
      let height = 110;
      let space = width;

      context.clearRect(0, 0, canvas.width, canvas.height);
      let direction = 1;

      for (let i = 0; i < GRID1.length; i++) {
        if (i % 5 === 0 && i !== 0) {
          positionY += height / 2;
          positionX = 0;
        }
        if (GRID1[i] !== "+") {
          let centerX = positionX + width / 2;
          let centerY = positionY + height / 2;

          context.beginPath();
          context.moveTo(
            centerX - (width / 2) * direction,
            centerY - height / 2
          );
          context.lineTo(
            centerX - (width / 2) * direction,
            centerY + height / 2
          );
          context.lineTo(centerX + (width / 2) * direction, centerY);
          context.closePath();

          context.lineWidth = 5;
          context.strokeStyle = "#F5F8F9";
          context.stroke();

          context.fillStyle =
            "rgba(" +
            colors[i] +
            "," +
            Math.cos(currentAlpha + i * -0.02) +
            ")";
          context.fill();
        }
        positionX += space;
        direction = direction === 1 ? -1 : 1;
      }

      positionX = canvas.width - 5 * width;
      positionY = canvas.height - 5 * height;

      for (let i = 0; i < GRID2.length; i++) {
        if (i % 5 === 0 && i !== 0) {
          positionY += height / 2;
          positionX = canvas.width - 5 * width;
        }
        if (GRID2[i] !== "+") {
          let centerX = positionX + width / 2;
          let centerY = positionY + height / 2;

          context.beginPath();
          context.moveTo(
            centerX - (width / 2) * direction,
            centerY - height / 2
          );
          context.lineTo(
            centerX - (width / 2) * direction,
            centerY + height / 2
          );
          context.lineTo(centerX + (width / 2) * direction, centerY);
          context.closePath();

          context.lineWidth = 5;
          context.strokeStyle = "#F5F8F9";
          context.stroke();

          context.fillStyle =
            "rgba(" +
            colors[i] +
            "," +
            Math.cos(currentAlpha + i * -0.02 - 1.1) +
            ")";
          context.fill();
        }
        positionX += space;
        direction = direction === 1 ? -1 : 1;
      }
    },
    [colors]
  );

  // Animation loop
  useEffect(() => {
    if (colors.length === 0) return;

    let frameCount = 0;
    let animationAlpha = alpha;

    const animate = () => {
      frameCount++;
      animationAlpha += 0.01;
      render(animationAlpha);
      requestIdRef.current = requestAnimationFrame(animate);
    };

    requestIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
      requestIdRef.current = null;
    };
  }, [colors, render, alpha]);

  return <canvas ref={canvasRef} className={style.bg__canvas} />;
};

export default Canvas;
