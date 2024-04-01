const nodes = document.querySelectorAll('.node');
const router = document.querySelector('.router');
const lines = document.querySelectorAll('.line');

let animationSpeed = 1500; // Adjust animation speed as needed

function animate() {
  setInterval(() => {
    nodes.forEach((node, index) => {
      setTimeout(() => {
        node.style.left = `${router.offsetLeft + router.offsetWidth / 2}px`;
        node.style.top = `${router.offsetTop + router.offsetHeight / 2}px`;
        setTimeout(() => {
          node.style.left = '';
          node.style.top = '';
        }, 1000);
      }, index * animationSpeed);
    });
  }, nodes.length * animationSpeed);
}

animate();
