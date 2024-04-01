document.addEventListener("DOMContentLoaded", function() {
    const pointA = document.getElementById("pointA");
    const pointB = document.getElementById("pointB");
    const line = document.getElementById("line");
  
    const pointAPosition = pointA.getBoundingClientRect();
    const pointBPosition = pointB.getBoundingClientRect();
  
    const distance = Math.sqrt(Math.pow(pointBPosition.left - pointAPosition.left, 2) +
                                Math.pow(pointBPosition.top - pointAPosition.top, 2));
    
    line.style.width = distance + "px";
  });
  