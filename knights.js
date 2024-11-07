function isValidCoord([x, y]) {
    if (isNaN(x) || isNaN(y)) return false;
    if (x < 0 || x > 7 || y < 0 || y > 7) return false;
    return true;
}


function knightMoves(start, destination) {
    if (!isValidCoord(start) || !isValidCoord(destination)) throw new Error("invalid coordinates");

    const movementSet = [
        [2, 1], [2, -1],
        [1, -2], [-1, -2],
        [-2, -1], [-2, 1],
        [-1, 2], [1, 2],
    ];

    // the coordinates inside the visitedSquare need to be strings  or the .has() function doesn't work. can't look into an array.
    const visitedSquares = new Set();
    visitedSquares.add(start.toString());

    // every element in the queue is structured as  "key: current_square_coordinantes,  value :[path_to_get_there]"
    const queue = new Map();
    queue.set(start, [start]);

    while (queue.size) {
        const currentPosition = queue.keys().next().value;  // only way to retrieve a key (the first one)
        const pathToCurrentPosition = queue.get(currentPosition);
        queue.delete(currentPosition);
        if (currentPosition[0] === destination[0] && currentPosition[1] === destination[1]) return pathToCurrentPosition;

        for (let i = 0; i < movementSet.length; i++) {
            const nextPosition = [currentPosition[0] + movementSet[i][0], currentPosition[1] + movementSet[i][1]];
            if (isValidCoord(nextPosition) && !visitedSquares.has(nextPosition.toString())) {
                visitedSquares.add(nextPosition.toString());
                const newPath = pathToCurrentPosition.concat([nextPosition])
                queue.set(nextPosition, newPath);
            }
        }
    }
    return null;
}

// with an array instead of the Map for the queue
function knightMoves2(start, destination) {
    if (!isValidCoord(start) || !isValidCoord(destination)) throw new Error("invalid coordinates");

    const movementSet = [
        [2, 1], [2, -1],
        [1, -2], [-1, -2],
        [-2, -1], [-2, 1],
        [-1, 2], [1, 2],
    ];

    const visitedSquares = new Set();
    visitedSquares.add(start.toString());
    const queue = [[start, [start]]];

    while (queue.length) {
        const [currentPosition, pathToCurrentPosition] = queue.shift();
        if (currentPosition[0] === destination[0] && currentPosition[1] === destination[1]) return pathToCurrentPosition;

        for (let i = 0; i < movementSet.length; i++) {
            const nextPosition = [currentPosition[0] + movementSet[i][0], currentPosition[1] + movementSet[i][1]];
            if (isValidCoord(nextPosition) && !visitedSquares.has(nextPosition.toString())) {
                visitedSquares.add(nextPosition.toString());
                const newPath = pathToCurrentPosition.concat([nextPosition])
                queue.push([nextPosition, newPath]);
            }
        }
    }
    return null;
}

export { knightMoves }