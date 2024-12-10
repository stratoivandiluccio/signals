import React from 'react';
import Node from './Node';
//import useRenderEffect from './hook';

// Sappiamo che con l'aumentare della complessità di un'applicazione le prestazioni della stessa possono iniziare a
// degradare. Ciò è dovuto principalmente all'eccessiva mole rendering dei vari componenti, spesso eseguite
// inutilmente. React mette a disposizione diverse api per realiazzare la memoizzazione di valori e/o componenti per ovviare
// a tale inconveniente. Sappiamo che con il 'compilatore' che verrà introdotto queste procedure che al momento sono demandate
// allo sviluppatore saranno eseguite automaticamente in fase di 'compilazione'.

// Sappiamo che ogni cambiamento di stato o proprietà di un componente causa un rendering dello stesso
// e un aggiornamento a cascata di tutti i componenti 'figli'. Nell'esempio che segue I tre componenti figli Node
// del component padre Main si 'aggiornano' senza una reale esigenza (non ricevo proprietà dall'alto, per esempio)
// ad ogni incremento dello state counter
function Main() {
  const [counter, setCounter] = React.useState(1);

  React.useEffect( () => {
    setTimeout( () => setCounter(counter + 1), 2000);
  }, [counter])

  return (
    <>
      <div>counter: {counter}</div>
      <Node counter={counter}>
        <Node>
          <Node />
          <Node />
          <Node />
        </Node>
        <Node>
          <Node/>
          <Node>
            <Node/>
            <Node/>
          </Node>
        </Node>
      </Node>
    </>
  );
}

export default Main;
