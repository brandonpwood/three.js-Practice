// Parameters
var speed = .01; // Rotation speed about z-axis
var n = 5; // Number of sides for polygon
var radius = 10; // pixel radius of polygon
// Initialize scene, renderer and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth/window.innerHeight,
  0.1,
  10000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// Add to body
document.body.appendChild(renderer.domElement);

// Helper Functions
function polygonGeometry(n, radius){
  var geo = new THREE.Geometry();
  var theta = 2*Math.PI/n;
  geo.vertices.push(new THREE.Vector3(0, 0, 0));
  for(var i = 0; i < n; i++){
    geo.vertices.push(new THREE.Vector3(radius*Math.cos(theta*i), radius*Math.sin(theta*i), 0))
  }
  for(var i = 2; i <= n; i++){
    geo.faces.push(new THREE.Face3(0, i-1, i));
  }
  geo.faces.push(new THREE.Face3(0, n, 1));
  return geo;
}
// Generate Geometries
var polyGeo = polygonGeometry(n, radius);
// Generate Materials
var currentColor = new THREE.Color(0x080808)
var polyMat = new THREE.MeshBasicMaterial({color: currentColor});
// Generate Meshes
var polygon = new THREE.Mesh(polyGeo, polyMat);
polygon.name = "polygon";
// Add to Scene
scene.add( polygon );

// Set Z-distance
camera.position.z = 20;
// Rendering loop
function animate(){
  requestAnimationFrame( animate ); // Update on refresh
  scene.getObjectByName('polygon').rotation.z += speed;
  renderer.render(scene, camera); // Render scene to camera
}
animate();
