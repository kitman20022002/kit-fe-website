import React, { useEffect, useState } from 'react';


interface IRandomMatric{
  style?: any;
  className?: string;
}

const defaultStyle = {
  color: 'white',
  textAlign: 'center',
  width: '30px',
  fontSize:'25px'
}



function RandomMatrix(props: IRandomMatric) {
  const [matrix, setMatrix] = useState<number[][]>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [randomCell, setRandomCell] = useState({ row: 0, col: 0 });
  const { style = defaultStyle , className= ''} = props;

  useEffect(() => {
    // Function to generate a random 0 or 1
    function getRandomBinary() {
      return Math.round(Math.random());
    }

    // Function to update a random cell in the matrix
    function updateRandomCell() {
      const randomRow = Math.floor(Math.random() * 4);
      const randomCol = Math.floor(Math.random() * 4);
      const updatedMatrix = [...matrix];
      updatedMatrix[randomRow][randomCol] = getRandomBinary();
      setMatrix(updatedMatrix);
      setRandomCell({ row: randomRow, col: randomCol });
    }

    // Generate the initial random matrix
    const initialMatrix: number[][] = [];
    for (let i = 0; i < 4; i++) {
      const row: number[] = [];
      for (let j = 0; j < 4; j++) {
        row.push(getRandomBinary());
      }
      initialMatrix.push(row);
    }
    setMatrix(initialMatrix);

    // Start a timer to update the entire matrix every 2000ms (2 seconds)
    const matrixUpdateInterval = setInterval(() => {
      const updatedMatrix: number[][] = [];
      for (let i = 0; i < 4; i++) {
        const row: number[] = [];
        for (let j = 0; j < 4; j++) {
          row.push(getRandomBinary());
        }
        updatedMatrix.push(row);
      }
      setMatrix(updatedMatrix);
    }, 2000);

    // Start a timer to update the random cell every 1000ms (1 second)
    const cellUpdateInterval = setInterval(updateRandomCell, 10);

    // Clean up the intervals when the component unmounts
    return () => {
      clearInterval(matrixUpdateInterval);
      clearInterval(cellUpdateInterval);
    };
  }, []);

  return (
    <div className={className}>
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={style}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RandomMatrix;