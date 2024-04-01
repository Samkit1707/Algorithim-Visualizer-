document.addEventListener('DOMContentLoaded', function () {
    const syn = document.getElementById('syn');
    const ack = document.getElementById('ack');
    const lines = document.getElementById('lines');
  
    // Function to draw a line between two elements
    function connectElements(start, end) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', start.getBoundingClientRect().left + start.offsetWidth / 2);
      line.setAttribute('y1', start.getBoundingClientRect().top + start.offsetHeight / 2);
      line.setAttribute('x2', end.getBoundingClientRect().left + end.offsetWidth / 2);
      line.setAttribute('y2', end.getBoundingClientRect().top + end.offsetHeight / 2);
      line.setAttribute('stroke', 'blue');
      line.setAttribute('stroke-width', 2);
      lines.appendChild(line);
    }
  
    // Animate the SYN-ACK handshake
    setTimeout(() => {
      syn.style.backgroundColor = 'lightgreen';
      syn.innerText = 'SYN-SENT';
      connectElements(document.getElementById('client'), syn);
    }, 1000);
  
    setTimeout(() => {
      ack.style.backgroundColor = 'lightgreen';
      ack.innerText = 'ACK-RECEIVED';
      connectElements(syn, ack);
    }, 2000);
  });
  