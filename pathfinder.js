// pathfinding-worker.js
importScripts('https://cdn.jsdelivr.net/npm/pathfinding@0.5.0/lib/pathfinding-browser.min.js');

self.onmessage = function (event) {
  const { gridArray, start, end } = event.data;
  const graph = new PF.Grid(gridArray);
  const finder = new PF.AStarFinder({
    allowDiagonal: false,
    dontCrossCorners: true
  });

  const path = finder.findPath(start[0], start[1], end[0], end[1], graph);
  self.postMessage(path);
};
