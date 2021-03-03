import { useMemo } from "react"

const Room = ({ coords }) => {
    const walls = useMemo(() => 
        coords.map((_, i) => {
            const coord1 = coords[i];
            const coord2 = coords[(i + 1) % coords.length];
            return [coord1, coord2];
        }), 
        [coords]
    );
    return (
        <g>
            { walls.map(([coord1, coord2], i) => 
                <line key={i} x1={coord1.x} y1={coord1.y} x2={coord2.x} y2={coord2.y} stroke="white" strokeWidth={80}></line>
            )}
        </g>
    )
}


const Floorplan = ({ data: {rooms} }) => {
    return rooms.map((r, i) => <Room key={i} {...r}/>)
}

export default Floorplan;