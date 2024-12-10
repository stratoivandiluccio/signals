import React from 'react';
import Node from './Node';
import { counter } from "./state";

function Main() {
  return (
    <>
      <h1>Signals</h1>
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
    </>);
}

export default Main;
