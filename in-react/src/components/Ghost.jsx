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

  export default Ghost;