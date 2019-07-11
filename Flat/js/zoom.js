function scrollHandler(e){
  camera.position.z -= (Math.log(Math.abs(e.wheelDelta))/Math.log(10))*(e.wheelDelta/Math.abs(e.wheelDelta));
  camera.updateProjectionMatrix();
}

window.addEventListener('mousewheel', scrollHandler, false);
