// Select the source, destination, and packet elements
const source = document.querySelector('.source');
const dest = document.querySelector('.destination');
const packet = document.querySelector('.packet');

// Add event listeners to the source and destination elements
source.addEventListener('click', () => {
    // Simulate the SYN request
    sendPacket();
});

dest.addEventListener('click', () => {
    // Simulate the SYN-ACK response
    sendAckPacket();
});

function sendPacket() {
    // Create a new packet element
    const newPacket = document.createElement('div');
    newPacket.classList.add('packet');
    newPacket.innerHTML = ' Packet 1';
    document.body.appendChild(newPacket);

    // Animate the packet movement
    animatePacket(newPacket, source, dest);
}

function sendAckPacket() {
    // Create a new packet element
    const newPacket = document.createElement('div');
    newPacket.classList.add('packet');
    newPacket.innerHTML = ' Packet 2';
    document.body.appendChild(newPacket);

    // Animate the packet movement
    animatePacket(newPacket, dest, source);
}

function animatePacket(packet, source, dest) {
    // Move the packet from the source to the destination
    packet.style.transform = `translateX(${source.offsetLeft}px)`;
    packet.style.transition = 'all 0.5s ease-in-out';

    setTimeout(() => {
        packet.style.transform = `translateX(${dest.offsetLeft}px)`;
        packet.style.transition = 'all 0.5s ease-in-out';
    }, 500);
}