import React from 'react';
import Node from './Node';

// possiamo ovviare all'aggiornamento inutile dei compoenti figli Node
// ricorrendo alla memoizzazione degi stessi 
const MemoizedNodes = React.memo(() => 
  <>
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
  </>);
  
function Main() {
  const [counter, setCounter] = React.useState(1);

  React.useEffect( () => {
    setTimeout( () => setCounter(counter + 1), 2000);
  }, [counter]);

  return (
    <>
      <div>counter: {counter}</div>
      <Node counter={counter}>
        <MemoizedNodes />
      </Node>
    </>
  );
}

export default Main;