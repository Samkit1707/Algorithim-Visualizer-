let packet = "Sample Packet";

let applicationLayer = document.getElementById("layer7");
let presentationLayer = document.getElementById("layer6");
let sessionLayer = document.getElementById("layer5");
let transportLayer = document.getElementById("layer4");
let networkLayer = document.getElementById("layer3");
let dataLinkLayer = document.getElementById("layer2");
let physicalLayer = document.getElementById("layer1");

// Sample Packet Travel Function
function sendPacket() {
 applicationLayer.style.backgroundColor = "lightgreen";
 setTimeout(() => {
    applicationLayer.style.backgroundColor = "";
    presentationLayer.style.backgroundColor = "lightgreen";
 }, 1000);

 //... Implement other layers similarly
}

// Start the simulation
sendPacket();