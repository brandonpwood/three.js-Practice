var intervalTime = 100; // Miliseconds between color updates

function updateColors(){
  /*
    Pulls input from sliders,
    updates cube color
  */

  // Pull settings
  var R = Number(document.getElementById("R").value);
  var G = Number(document.getElementById("G").value);
  var B = Number(document.getElementById("B").value);

  // Update Displays
  document.getElementById('rdis').textContent = R.toString();
  document.getElementById('gdis').textContent = G.toString();
  document.getElementById('bdis').textContent = B.toString();

  // Update cube colors
  var color = new THREE.Color("rgb(" + R.toString(10) + ","  + G.toString(10) + ", " + B.toString(10) + ")");

  cube.material.color = color;
}

setInterval(updateColors, intervalTime)
