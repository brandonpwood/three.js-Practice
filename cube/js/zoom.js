function zoomHandler(e){
  console.log(e.wheelDelta);
  var delta = e.wheelDelta;
  delta *= -1; // INverting direction of zoom
  camera.fov += delta/10;
  camera.updateProjectionMatrix();
}

window.addEventListener('mousewheel', zoomHandler, false);
