import React, { useMemo } from "react"
import Camera from "./Camera";

const Walls = ({ coords }) => {
    const walls = useMemo(() => 
        coords.map((_, i) => {
            const coord1 = coords[i];
            const coord2 = coords[(i + 1) % coords.length];
            return [coord1, coord2];
        }), 
        [coords]
    );
    return (
        walls.map(([coord1, coord2], i) => 
            <line key={i} x1={coord1.x} y1={coord1.y} x2={coord2.x} y2={coord2.y} stroke="white" strokeWidth={80} />
        )
    )
}

const Cameras = ({ cameras }) => {
    return (
        cameras ? cameras.map((cam, i) => 
            <Camera key={cam.id} x={cam.x} y={cam.y} angle={cam.angle} FOVConfig={cam.FOVConfig} componentColours={cam.componentColours}/>
        ) : null
    )
}

const Room = ({ coords, cameras, id }) => {
    return (
        <React.Fragment>
            <clipPath id={`${id}-content-clip`}>
                <polygon points={coords.map(({x, y}) => `${x},${y}`).join(" ")}/>
            </clipPath>
            <g clipPath={`url(#${id}-content-clip)`}>
                <Cameras cameras={cameras} />
            </g>
            <g>
                <Walls coords={coords}/>
            </g>
        </React.Fragment>
    )
}


const Floorplan = ({ data: {rooms} }) => {
    return rooms.map((room, i) => <Room key={room.id} id={room.id} {...room}/>)
}

export default Floorplan;