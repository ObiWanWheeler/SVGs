import { polarToCartesian } from "../helpers/MathFuncs";

const defaultColorScheme = { 
    body: 'black', 
    enclosure: 'rgb(255,255,255)', 
    fieldOfView: 'rgb(0,0,255)'
}

const defaultFOV = {
    range: 10,
    angle: 45,
}

const FieldOfView = ({ angle, range, size, colour }) => {
    const point1 = polarToCartesian(range, -angle/2);
    const point2 = polarToCartesian(range, angle/2);

    return (
      <path
        transform={`scale(${size})`}
        d={`
          M0,0
          L${point1.x},${point1.y}
          A${range}, ${range} 0, ${angle > 180 ? '1' : '0'}, 1, ${point2.x},${point2.y}
          Z
        `}
        fill={colour}
        fillOpacity={0.5}
      />
    );
  };


const CameraEnclosure = ({ size, colour }) => 
    <circle
    transform={`scale(${size})`}
    cx="0"
    cy="0"
    r="3.5"
    fill={colour}
    fillOpacity={0.25}
    stroke="#fff"
    strokeWidth={0.25}
    />

const CameraBody = ({ size, colour }) => 
    <path 
        transform={`scale(${size}) translate(-2, -2)`} 
        d={`M0,0 L4,0 L3,1 L4,1 L4,4 L0,4 L0,1 L1,1 Z`} 
        fill={colour}
    />

const Camera = ({ x=0, y=0, angle=0, size=250, componentColours=defaultColorScheme, FOVConfig=defaultFOV}) => 
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
        <CameraEnclosure size={size} colour={componentColours.enclosure} />
        <CameraBody size={size} colour={componentColours.body} />
        <FieldOfView range={FOVConfig.range} angle={FOVConfig.angle} size={size} colour={componentColours.fieldOfView} />
    </g>


export default Camera;