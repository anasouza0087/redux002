import React from 'react'
import Intervalo from './componentes/Intervalo';
import Media from './componentes/Media';
import Soma from './componentes/Soma';
import Sorteio from './componentes/Sorteio';

function App() {

  const styles = {
    textAlign: 'center',
    marginTop: '20px',
  }

  return (
    <div className="App" style={styles}>
      <h1>React Redux - Simples</h1>
      <Intervalo></Intervalo>
      <Media></Media>
      <Soma></Soma>
      <Sorteio></Sorteio>
    </div>
  );
}

export default App;
