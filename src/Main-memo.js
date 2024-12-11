import React from 'react';
import Node from './Node';

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
    <Node />
  </>);
  
function Main() {
  const [counter, setCounter] = React.useState(1);

  React.useEffect( () => {
    setTimeout( () => setCounter(counter + 1), 2000);
  }, [counter]);

  return (
    <>
      <h1>Memo</h1>
      <Node counter={counter}>
        <MemoizedNodes />
      </Node>
    </>
  );
}

export default Main;