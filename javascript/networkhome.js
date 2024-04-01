var network;

function setup() {
  createCanvas(640, 360);
  network = new Network(width/2, height/2);
  
  var a = new Neuron(-275, 0);
  var b = new Neuron(-150, 0);
  var c = new Neuron(0, 75);
  var d = new Neuron(0, -75);
  var e = new Neuron(150, 0);
  var f = new Neuron(275, 0);
  
  network.connect(a, b,1);
  network.connect(b, c,random(1));
  network.connect(b, d,random(1));
  network.connect(c, e,random(1));
  network.connect(d, e,random(1));
  network.connect(e, f,1);
  
  network.addNeuron(a);
  network.addNeuron(b);
  network.addNeuron(c);
  network.addNeuron(d);
  network.addNeuron(e);
  network.addNeuron(f);
}

function draw() {
  background(255);
  network.update();
  network.display();
  
  if (frameCount % 30 == 0) {
    network.feedforward(random(1));
  }
}

function Connection(from, to,w) {
  
  this.a = from;
  this.b = to;
  this.weight = w;
  this.sending = false;
  this.sender = null;
  this.output = 0;
  
  
  this.feedforward = function(val) {
    this.output = val*this.weight;
    this.sender = this.a.position.copy();
    this.sending = true;
  }
  
  this.update = function() {
    if (this.sending) {
      this.sender.x = lerp(this.sender.x, this.b.position.x, 0.1);
      this.sender.y = lerp(this.sender.y, this.b.position.y, 0.1);
      var d = p5.Vector.dist(this.sender, this.b.position);
      if (d < 1) {
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }
  
  this.display = function() {
    stroke(0);
    strokeWeight(this.weight*4);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
    
    if (this.sending) {
      fill(0);
      strokeWeight(1);
      ellipse(this.sender.x, this.sender.y, 16, 16);
    }
  }
}

function Network(x, y) {
  
  this.neurons = [];
  this.connections = [];
  this.position = createVector(x, y);
  
  this.addNeuron = function(n) {
    this.neurons.push(n);
  }
  
  this.connect = function(a, b, weight) {
    var c = new Connection(a, b, weight);
    a.addConnection(c);
    this.connections.push(c);
  }
  
  this.feedforward = function(input) {
    var start = this.neurons[0];
    start.feedforward(input);
  }
  
  this.update = function() {
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
  }
  
  this.display = function() {
    push();
    translate(this.position.x, this.position.y);
    for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].display();
    }
    
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].display();
    }
    pop();
  }
}

function Neuron(x, y) {
  
  this.position = createVector(x, y);
  this.connections = [];
  this.sum = 0;
  this.r = 32;
  
  this.addConnection = function(c) {
    this.connections.push(c);
  }
  
  this.feedforward = function(input) {
    this.sum += input;
    if (this.sum > 1) {
      this.fire();
      this.sum = 0;
    }
  }
  
  this.fire = function() {
    this.r = 64;
    
    for (var i = 0; i < this.connections.length; i++) {
       this.connections[i].feedforward(this.sum);
    }
  }
  
  this.display = function() {
    stroke(0);
    strokeWeight(1);
    var b = map(this.sum,0,1,255,0);
    fill(b);
    ellipse(this.position.x, this.position.y, this.r, this.r);
    
    this.r = lerp(this.r,32,0.1);
  }
}