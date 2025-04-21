import React, {useRef, useEffect, useCallback} from 'react'
import style from './Canvas.module.css';


const getPixelRatio = context => {
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
    "+--++" +
    "-----" +
    "---++" +
    "---++" +
    "+--++" +
    "+-+++" +
    "+-+++" +
    "-++++";

export const GRID2 =
    "++-++" +
    "-++--" +
    "+--+-" +
    "---+-" +
    "+--++" +
    "+-+-+" +
    "+-+--" +
    "--+++";

export const COLORS = [
    "239,50,57",
    // "165,22,28",
    "1,187,190",
    // "12,120,163",
    "249,114,17",
    // "247,151,42",
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const Canvas = () => {
    let ref = useRef();
    let canvas = '';
    let context = '';
    let colors = [];
    let requestId, alpha = 0;
    const render = () => {
        let positionX = 0;
        let positionY = 10;
        let width = 100;
        let height = 110;
        let space = width
        context.clearRect(0, 0, canvas.width, canvas.height);
        // context.beginPath();
        // context.moveTo(positionX, positionY);
        // context.lineTo(positionX, positionY + height);
        // context.lineTo(positionX + width, positionY + height);
        // context.closePath();
        // context.fillStyle = "rgba(0,255,0," + Math.cos(i);
        // context.fill();
        let direction = 1;


        for (let i = 0; i < GRID1.length; i++) {
            //GRID1[i] !== '+'
            if (i % 5 === 0 && i !== 0) {
                positionY += height / 2;
                positionX = 0;
            }
            if (GRID1[i] !== '+') {
                let centerX = positionX + width / 2;
                let centerY = positionY + height / 2;
                //#F5F8F9
                context.beginPath();
                context.moveTo(centerX - width / 2 * direction, centerY - height / 2);
                context.lineTo(centerX - width / 2 * direction, centerY + height / 2);
                context.lineTo(centerX + width / 2 * direction, centerY);
                context.closePath();


                context.lineWidth = 5;
                context.strokeStyle = "#F5F8F9";
                context.stroke();
                //alpha + i * -0.02
                context.fillStyle = "rgba(" + colors[i] + "," + Math.cos(alpha + i * -0.02) + ")";
                context.fill();
            }
            positionX += space;
            direction = direction === 1 ? -1 : 1;
        }
        positionX = canvas.width - 5 * width
        positionY = canvas.height - 5 * height


        for (let i = 0; i < GRID2.length; i++) {
            //GRID1[i] !== '+'
            if (i % 5 === 0 && i !== 0) {
                positionY += height / 2;
                positionX = canvas.width - 5 * width;
            }
            if (GRID2[i] !== '+') {
                let centerX = positionX + width / 2;
                let centerY = positionY + height / 2;
                //#F5F8F9
                context.beginPath();
                context.moveTo(centerX - width / 2 * direction, centerY - height / 2);
                context.lineTo(centerX - width / 2 * direction, centerY + height / 2);
                context.lineTo(centerX + width / 2 * direction, centerY);
                context.closePath();

                context.lineWidth = 5;
                context.strokeStyle = "#F5F8F9";
                context.stroke();
                //alpha + i * -0.02
                context.fillStyle = "rgba(" + colors[i] + "," + Math.cos((alpha + i * -0.02) - 1.1) + ")";
                context.fill();
            }
            positionX += space;
            direction = direction === 1 ? -1 : 1;
        }

        alpha += 0.010;
        requestId = requestAnimationFrame(render);
    }
    //20

    const resized = () => {
        ref.current.width = document.body.clientWidth;
        ref.current.height = document.body.clientHeight;
    };

    useEffect(() => {
        const currentCanvas = ref.current;
        window.addEventListener("resize", resized);
        return () => window.removeEventListener("resize", resized);
    });

    useEffect(() => {
        canvas = ref.current;
        context = canvas.getContext('2d');

        for (let i = 0; i < GRID1.length; i++) {
            colors[i] = COLORS[getRandomInt(6)];
        }
        resized();
        render();

        return () => {
            cancelAnimationFrame(requestId);
        };
    });




    return (
        <canvas
            ref={ref}
            className={style.bg__canvas}
        />
    );
};

const scaleWidth = 500;
const scaleHeight = 500;

// function draw(ctx, scaleX, scaleY) {
//     if (ctx) {
//         // let positionX = 90;
//         // let positionY = 100;
//         ctx.clearRect(0, 0, document.body.clientWidth, document.body.clientHeight);
//         ctx.globalAlpha = 1;
//         ctx.fillStyle = 'white';
//         ctx.strokeStyle = "white";
//
//         ctx.beginPath();
//         ctx.moveTo(100, 100);
//         ctx.lineTo(100, 300);
//         ctx.lineTo(300, 300);
//         ctx.closePath();
//
//         // the outline
//         ctx.lineWidth = 10;
//         ctx.strokeStyle = "rgba(0,255,0,0.1)";
//         ctx.stroke();
//
//         // the fill color
//         ctx.fillStyle = "rgba(0,255,0,0.1)";
//         ctx.fill();

// let y = 200;
// let x = 100;
// ctx.lineWidth = 20;
// ctx.beginPath();
// ctx.quadraticCurveTo(0, y, x, y + 20);
// ctx.quadraticCurveTo(x += 200, y + 50, x += 200, y);
// ctx.quadraticCurveTo(x += 200, y - 50, x += 200, y - 100);
// ctx.quadraticCurveTo(x += 100, y - 120, x += 100, y - 75);
// ctx.quadraticCurveTo(x += 100, y - 25, x += 10, y);
// ctx.quadraticCurveTo(x += 20, y + 10, x += 20, y + 200);
// ctx.stroke();
//
//
// ctx.beginPath();
// ctx.arc(100, 100, 80, 0, Math.PI * 2, true);
// ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
// ctx.fill('evenodd');
//
// ctx.beginPath();
// ctx.arc(500, 100, 30, 0, Math.PI * 2, true);
// ctx.fill('evenodd');
//
// ctx.beginPath();
// ctx.arc(300, 10, 10, 0, Math.PI * 2, true);
// ctx.fill('evenodd');
//
// ctx.beginPath();
// ctx.arc(document.body.clientWidth - 300, document.body.clientHeight - 500, 20, 0, Math.PI * 2, true);
// ctx.fill('evenodd');
//
//
// ctx.beginPath();
// ctx.arc(document.body.clientWidth - 150, 500, 80, 0, Math.PI * 2, true);
// ctx.arc(document.body.clientWidth - 150, 500, 60, 0, Math.PI * 2, true);
// ctx.fill('evenodd');

// y = ctx.canvas.height - 50;
// x = ctx.canvas.width;
// ctx.lineWidth = 20;
// ctx.beginPath();
// ctx.moveTo(x, y);
// ctx.quadraticCurveTo(x -= 100, y -= 50, x -= 100, y += 60);
// ctx.quadraticCurveTo(x -= 10, y, x -= 90, y += 100);

//ctx.quadraticCurveTo(x , y , x += 200, y - 100);
// ctx.quadraticCurveTo(x += 100, y - 120, x += 100, y - 75);
// ctx.quadraticCurveTo(x += 100, y - 25, x += 10, y);
// ctx.quadraticCurveTo(x += 20, y + 10, x += 20, y + 200);
// ctx.stroke();
//     }
// }

// const Canvas = () => {
//     const [scale, setScale] = React.useState({x: 1, y: 1});
//     const canvasRef = useRef();
//
//     const calculateScaleX = () => (!canvasRef.current ? 0 : canvasRef.current.clientWidth / scaleWidth);
//     const calculateScaleY = () => (!canvasRef.current ? 0 : canvasRef.current.clientHeight / scaleHeight);
//
//     const resized = () => {
//         canvasRef.current.width = document.body.clientWidth;
//         canvasRef.current.height = document.body.clientHeight;
//         //setScale({x: calculateScaleX(), y: calculateScaleY()});
//     };
//
//     React.useEffect(() => resized(), []);
//
//     React.useEffect(() => {
//         const currentCanvas = canvasRef.current;
//         currentCanvas.addEventListener("resize", resized);
//         return () => currentCanvas.removeEventListener("resize", resized);
//     });
//
//     useEffect(() => {
//         draw(canvasRef.current.getContext('2d'), scale.x, scale.y);
//     }, [scale]);
//
//     return (
//         <canvas ref={canvasRef} className={style.bg__canvas}/>
//     );
// };

export default Canvas;
