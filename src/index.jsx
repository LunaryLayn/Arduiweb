import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hola, mundo!</h1>
      <button id="botonEncender">Encender</button>
        <button id="botonApagar">Apagar</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
