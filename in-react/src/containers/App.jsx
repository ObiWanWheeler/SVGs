import useMousePosition from '../hooks/useMousePosition';
import './App.css';
import Ghost from '../components/Ghost.jsx';
import Dial from '../components/Dial.jsx';
import Floorplan from '../components/Floorplan';
import data from '../rooms.json';


const App = () => {
  const {x, y} = useMousePosition();

  return (
    <div class="App">
      <svg viewBox="0 0 200 200">
        <Ghost x={50} y={50} colour="blue" onClick={() => alert("woah! blue ghost!")}/>
        <Ghost x={100} y={100} colour="red" onClick={() => alert("woah! red ghost!")}/>
      </svg>
      <svg viewBox="-100 -100 200 200">
        <Dial mouseX={x} mouseY={y} radius={20}/>
      </svg>
      <svg width="500px" height="500px" viewBox="-1000 -1000 14000 11000">
        <Floorplan data={data}/>
      </svg>
    </div>
  );
}

export default App;
