import { useEffect, useRef } from 'react';

export const useRenderEffect = (ref) => {
  const random = Math.random();
  const numberOfRenders = useRef(1)

  useEffect( () => {
    ref.current.className = 'node render';
    setTimeout( () => ref.current.className = 'node', 1000);
    numberOfRenders.current++
  }, [random, ref, numberOfRenders])

  return numberOfRenders.current
}

function truncate (num, places) {
  return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
}

const intervalOfRenderings = 5;
let targetRender = intervalOfRenderings;
let totalDurationTime = 0;
let actualRenderNumber = 0;

export const measure = (_id, _phase, actualDuration) => {
  actualRenderNumber++;
  if(actualRenderNumber <= targetRender) {
    totalDurationTime += actualDuration;
  }
  if(actualRenderNumber === targetRender) {
    console.log('AVG update DOM time (ms): ', truncate(totalDurationTime/targetRender, 2));
    targetRender += intervalOfRenderings;
  }
}