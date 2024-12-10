import React from 'react';
import { useRenderEffect } from './utils';

const Node = (props) => {
  const nodeRef = React.useRef();
  const numberOfRenders = useRenderEffect(nodeRef)

  return (
    <div className='node' ref={nodeRef}>
      <div className='info'>
        <div>render: {numberOfRenders}</div>
        {
          props.counter ? <div>counter: {props.counter}</div> : null
        }
      </div>
      <div className='child'>
        {props.children}
      </div>
    </div>
  )
}



export default Node;
