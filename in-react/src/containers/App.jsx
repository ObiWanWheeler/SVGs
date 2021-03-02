import React, { useEffect, useRef, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import './App.css';

const Eyes = ({x, y}) => {
  return (
    <g>
      <circle cx={x - 10} cy={y} r={20} fill="white" />
      <circle cx={x + 10} cy={y} r={20} fill="white" />
      <circle cx={x - 10} cy={y} r={10} fill="black" />
      <circle cx={x + 10} cy={y} r={10} fill="black" />
    </g>
  )
}

const Body = ({x, y, colour}) => {
  return (
    <g>
      <circle cx={x} cy={y} r={50} fill={colour}/>
      <rect x={x-50} y={y} width={100} height={80} fill={colour}/>
    </g>
  )
}

const Ghost = ({x, y, colour, onClick}) => {
  return (
    <g onClick={onClick}>
      <Body x={x} y={y} colour={colour}/>
      <Eyes x={x} y={y}/>
    </g>
  )
}

const radiansToDegrees = (angle) => {
  return angle * 180 / Math.PI;
}

const Dial = ({mouseX=0, mouseY=0}) => {
  const dialEl = useRef(null); 
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const { left, top, height, width } = dialEl.current.getBoundingClientRect();
    const [xCenter, yCenter] = [left + (width/2), top + (height/2)];
    const [xDist, yDist] = [mouseX - xCenter, mouseY - yCenter];
    setAngle(radiansToDegrees(Math.atan2( yDist, xDist )));
  }, [mouseX, mouseY])
  
  return (
    <g ref={dialEl} transform={`rotate(${angle})`}>
      <circle cx={0} cy={0} r={50} fill="grey" stroke="black"/>
      <circle cx={35} cy={0} r={5} fill="black" />
    </g>
  )
}

const App = () => {
  const {x, y} = useMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  return (
    <div class="App">
      <svg viewBox="0 0 200 200">
        <Ghost x={50} y={50} colour="blue" onClick={() => alert("woah! blue ghost!")}/>
        <Ghost x={100} y={100} colour="red" onClick={() => alert("woah! red ghost!")}/>
      </svg>
      <svg viewBox="-100 -100 200 200">
        {hasMovedCursor ? <Dial mouseX={x} mouseY={y}/> : <Dial />}
      </svg>
    </div>
  );
}

export default App;
