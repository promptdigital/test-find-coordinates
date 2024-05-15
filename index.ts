export interface Coordinate {
    x: number;
    y: number;
}

export const findCoordinate = (coordinates: Coordinate[], totalDuration: number, atDuration: number): Coordinate[] => {
    let totalMoves = 0;
    let previousCoordinate = {x: 0, y: 0};
    const allCoordinates: Coordinate[] = [];

    coordinates.forEach(({x, y}) => {
        if (x === 0 && y === 0) {
            allCoordinates.push({x, y});
        }

        if (x !== previousCoordinate.x) {
            totalMoves += x - previousCoordinate.x;
            for (let i = previousCoordinate.x+1; i <= x; i++) {
                allCoordinates.push({
                    x: i,
                    y,
                })
            }
        }

        if (y !== previousCoordinate.y) {
            totalMoves += y - previousCoordinate.y;
            for (let i = previousCoordinate.y+1; i <= y; i++) {
                allCoordinates.push({
                    x,
                    y: i,
                })
            }
        }

        previousCoordinate = { x, y };
    });

    const position = totalMoves/totalDuration * atDuration;

    if (Number.isInteger(position)) {
        return [allCoordinates[position]];
    } else {
        return [allCoordinates[Math.floor(position)], allCoordinates[Math.ceil(position)]]; 
    }

}
