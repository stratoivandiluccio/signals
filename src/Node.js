import React from 'react';
import { useRenderEffect } from './utils';

const Node = (props) => {
  const nodeRef = React.useRef();
  const numberOfRenders = useRenderEffect(nodeRef)

  return (
    <div className='node'>
      <div className='itself' ref={nodeRef}>
        <div><span>{numberOfRenders}</span>
        {
          props.counter ? <span className='counter'>:{props.counter}</span> : null
        }
        </div>
      </div>
      <div className='child'>
        {props.children}
      </div>
    </div>
  )
}



export default Node;
