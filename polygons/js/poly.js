function polygonGenerator(n){
  var geo = new THREE.Geometry();
  var theta = 2*Math.PI/n
  var vertices = [];
  for(var i = 0; i < n; i++){
    vertices.push([Math.cos(theta*i), Math.sin(theta*i)])
  }
  vertices.forEach(function(vertex){
    geo.vertices.push(vertex);
  });
  return geo;
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 20, window.innerWidth/window.innerHeight, 0.3, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = polygonGenerator(10);
var material = new THREE.MeshBasicMaterial({color:0x808080});
var polygon = new THREE.Mesh(geometry, material);

scene.add(polygon);

camera.position.z = 5;


var animate = function () {
  requestAnimationFrame( animate );

  renderer.render( scene, camera );
};
animate();
