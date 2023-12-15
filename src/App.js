import React, { useState } from 'react';
import './index.css';

function App() {
  const [colorSquare1, setColorSquare1] = useState('red');
  const [colorSquare2, setColorSquare2] = useState('blue');

  const handleSquareClick = () => {
    // Меняем цвета квадратов местами
    const tempColor = colorSquare1;
    setColorSquare1(colorSquare2);
    setColorSquare2(tempColor);
  };

  return (
    <div className="App">
      <div
        className="square"
        style={{ backgroundColor: colorSquare1 }}
        onClick={handleSquareClick}
      ></div>
      <div
        className="square"
        style={{ backgroundColor: colorSquare2 }}
        onClick={handleSquareClick}
      ></div>
    </div>
  );
}

export default App;
