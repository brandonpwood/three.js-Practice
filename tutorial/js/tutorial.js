// TUNING
var speed = .02;// Speed of rotation in degrees per refresh
var cap = 15; //Number of steps to be animated in trace
var modifier = 1; // Ratio between border box speeds
// Initialize Three.js scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Add to body
document.body.appendChild(renderer.domElement);

// Generate Cube
var geometry = new THREE.BoxGeometry(1, 1, 1); // Basic cube geometry
var material = new THREE.MeshBasicMaterial({color:0x808080}) // Green, lightless material
var cube = new THREE.Mesh(geometry, material); // Applies material to geometry
scene.add( cube )
// Generate Border for Cube
var edges = new THREE.EdgesGeometry(geometry)
var lines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00ff00}))
scene.add(lines)
// Position Camera
camera.position.z = 2;

// Initialize storage variables for traces
var vertices = [];
for(var i = 0; i < 8; i++){
  vertices.push([]);
}
var traceMaterial = new THREE.Material({color: 0xff0000});

function animate(){
  requestAnimationFrame( animate ); // Establishes loop
  // Increment Rotation
  cube.rotation.x += speed;
  cube.rotation.y += speed;
  lines.rotation.x += speed*modifier;
  lines.rotation.y += speed*modifier;
  // Find vertex positions
  var vector = [];
  for(var i = 0; i < 8; i++){
    vector = cube.geometry.vertices[i].clone();
    vector.applyMatrix4(cube.matrixWorld);
    vertices[i].push(vector)
  }
  // Draw vectors
  for(var i = 0; i < vertices.length; i++){
    var Path = new THREE.Path()
    for(var j = 1; j < vertices[i].length; j++ ){
      var lineGeometry = new THREE.Geometry();
      lineGeometry.vertices.push(vertices[i][j-1], vertices[i][j]);
      scene.add(new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({color:0x808080})));
    }
  }
  // Cap size of vertices
  if(vertices[0].length >= cap){
    for(var i = 0; i < 8; i++){
        vertices[i].shift();
    }
  }
  // Renders everything in scene to camera
  renderer.render( scene, camera );
}

animate();


function scrollHandler(e){
  camera.fov -= (e.wheelDelta/10);
  camera.updateProjectionMatrix();
}
window.addEventListener('mousewheel', scrollHandler, false);
