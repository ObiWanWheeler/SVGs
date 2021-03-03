import useMousePosition from '../hooks/useMousePosition';
import './App.css';
import Ghost from '../components/Ghost.jsx';
import Dial from '../components/Dial.jsx';
import Floorplan from '../components/Floorplan';
import data from '../rooms.json';
import Camera from '../components/Camera.jsx'


const App = () => {
  const {x, y} = useMousePosition();

  return (
    <div className="App" style={{ backgroundColor: 'lightblue'}}>
      <svg viewBox="0 0 200 200">
        <Ghost x={50} y={50} colour="blue" onClick={() => alert("woah! blue ghost!")}/>
        <Ghost x={100} y={100} colour="red" onClick={() => alert("woah! red ghost!")}/>
      </svg>
      <svg viewBox="-100 -100 200 200">
        <Dial mouseX={x} mouseY={y} radius={20}/>
      </svg>
      <svg width="500px" height="500px" viewBox="-7000 -5500 14000 11000">
        <Floorplan data={data}/>
        <Camera x={150} y={150} size={200} FOVConfig={{angle: 90, range: 15}} componentColours={{body: "green", enclosure: "black", fieldOfView: "red"}} angle={45}/>
        <Camera x={5000} y={5000} angle={-45}/>
      </svg>
    </div>
  );
}

export default App;
