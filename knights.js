function isValidCoord([x, y]) {
    if (isNaN(x) || isNaN(y)) return false;
    if (x < 0 || x > 7 || y < 0 || y > 7) return false;
    return true;
}

function knightMoves(start, destination, queue = []) {
    if (!isValidCoord(start) || !isValidCoord(destination)) throw new Error("invalid coordinates");

    const movementSet = [
        [2, 1], [2, -1],
        [1, -2], [-1, -2],
        [-2, -1], [-2, 1],
        [-1, 2], [1, 2],
    ];

    for (let i = 0; i < movementSet.length; i++) {
        let nextPosition = [start[0] + movementSet[i][0], start[1] + movementSet[i][1]];
        if (!isValidCoord(nextPosition)) return;
        queue.push(nextPosition);
        if (nextPosition[0] === destination[0] && nextPosition[1] === destination[1]) return (queue);
        return knightMoves(nextPosition, destination, queue);

    }
}

export { knightMoves }