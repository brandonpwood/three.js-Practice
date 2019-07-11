var intervalTime = 100; // Miliseconds between update calls
//Update function
function updateRender(){
  // Collect parameters
  var red = Number(document.getElementById('R').value);
  var green = Number(document.getElementById('G').value);
  var blue = Number(document.getElementById('B').value);
  var newSpeed = Number(document.getElementById('speed').value)/1000;
  var newRadius = Number(document.getElementById('radius').value);
  var sides = Number(document.getElementById('sides').value);
  // Update displays
  document.getElementById("rDis").textContent = red;
  document.getElementById("gDis").textContent = green;
  document.getElementById("bDis").textContent = blue;
  document.getElementById("radiusDis").textContent = radius;
  document.getElementById("speedDis").textContent = newSpeed*1000;
  document.getElementById("sidesDis").textContent = sides;

  // Update Geometry of Mesh
  if(newRadius != radius || sides != n){
    // Remove old geometry
    scene.remove(scene.getObjectByName("polygon"));
    // Remake Mesh
    var newMesh = new THREE.Mesh(polygonGeometry(sides, newRadius), polyMat)
    newMesh.name = "polygon"
    // Add to scene
    scene.add(newMesh);
  }
  // Update Global Parameters
  speed = newSpeed;
  radius = newRadius;
  n = sides;
  // Update Material of Mesh
  currentColor.r = red/255;
  currentColor.g = green/255;
  currentColor.b = blue/255;
  polyMat.color = currentColor;
  scene.getObjectByName("polygon").material.color = currentColor;
}

// Event timer
setInterval(updateRender, intervalTime);
