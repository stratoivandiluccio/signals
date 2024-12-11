import React from 'react';
import Node from './Node';

function Main() {
  const [counter, setCounter] = React.useState(1);

  React.useEffect( () => {
    setTimeout( () => setCounter(counter + 1), 2000);
  }, [counter])

  return (
    <>
      <h1>Plain</h1>
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
        <Node/>
      </Node>
    </>
  );
}

export default Main;
