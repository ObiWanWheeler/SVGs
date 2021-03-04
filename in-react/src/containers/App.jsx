import useMousePosition from '../hooks/useMousePosition';
import './App.css';
import Ghost from '../components/Ghost.jsx';
import Dial from '../components/Dial.jsx';
import Floorplan from '../components/Floorplan';
import data from '../rooms.json';


const App = () => {
  const {x, y} = useMousePosition();

  return (
    <div className="App" style={{ backgroundColor: 'lightblue'}}>
      <svg width="500" height="500" viewBox="0 0 200 200">
        <clipPath id="binoculars">
          <circle cx={70} cy={70} r={50} />
          <circle cx={120} cy={110} r={50} />
        </clipPath>
        <g clipPath="url(#binoculars)">
          <rect width="200" height="200" fill="green"></rect>
          <Ghost x={50} y={50} colour="blue" onClick={() => alert("woah! blue ghost!")}/>
          <Ghost x={100} y={100} colour="red" onClick={() => alert("woah! red ghost!")}/>
        </g>
      </svg>
      <svg viewBox="-100 -100 200 200">
        <Dial mouseX={x} mouseY={y} radius={20}/>
        <Dial mouseX={x} mouseY={y} radius={10} />
      </svg>
      <svg width="1000" height="1000" viewBox="-7000 -5500 14000 11000">
        <Floorplan data={data}/>
      </svg>
    </div>
  );
}

export default App;
