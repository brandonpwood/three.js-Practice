// Settings
var draw = false;
// Storage
var vector = [];
// Initialize Three.js Resources
var scene = new THREE.Scene();
rwterthj69uiplp98
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// Add Canvas to the Document
document.body.appendChild(renderer.domElement);
// Initial Camera Position
camera.position.z = 20;
// Initialize Material
var color = new THREE.Color(0x0000ff);
var traceMat = new THREE.Material({color: color});

// Rendering loop
function animate(){
  requestAnimationFrame( animate ); // Update on refresh
  renderer.render(scene, camera); // Render scene to camera
}
animate();
// User Interface Bindings
function swap(e){
  draw = !draw;
}
function trace(e){
  if(draw){
    var vector = new THREE.Vector3(e.x, e.y, 0);
    vectors.push(vector);
    var geometry = new THREE.Geometry();
    for(var i = 0; i < vectors.length; i++){
      geometry.vertices.push(vectors[i]);
    }
    var mesh = new THREE.Mesh(geometry, traceMat);
    mesh.name = "trace";
    scene.remove(scene.getObjectByName("trace"));
    scene.add(mesh);
  }
}
window.addEventListener('click', swap, false);
window.addEventListener('mousemove', trace, false);
