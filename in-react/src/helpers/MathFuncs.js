export const toRadians = (angleInDegrees) => {
    return (angleInDegrees * Math.PI) / 180;
} 

export const REFERENCE_DIRECTION = -90;
export const polarToCartesian = (distance, angleInDegrees) => {
  const angleInRadians = toRadians(REFERENCE_DIRECTION + angleInDegrees);
  return {    
    x: distance * Math.cos(angleInRadians),
    y: distance * Math.sin(angleInRadians)  
  };
};