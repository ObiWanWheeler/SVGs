import { useState, useRef, useEffect } from 'react';

const radiansToDegrees = (angle) => {
    return angle * 180 / Math.PI;
}
  
const Dial = ({mouseX=0, mouseY=0, radius}) => {
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
        <circle cx={0} cy={0} r={radius} fill="grey" stroke="black"/>
        <circle cx={radius * 0.7} cy={0} r={radius/10} fill="black" />
        </g>
    )
}

export default Dial;