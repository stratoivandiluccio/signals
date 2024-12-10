import React from 'react';
import Node from './Node';
import { counter } from "./state";

function Main() {
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
    </>);
}

export default Main;
