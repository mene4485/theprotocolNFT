import { GLTFLoader } from "../three_import/GLTFLoader.js";
import { OrbitControls } from "../three_import/OrbitControls.js";

let scene, camera, renderer, controls;
var obj;
var mouseCliqued = false;
var turning = 0.02;
var lastScrollTop = 0;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(
    3,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 10;

  var ambientLight = new THREE.AmbientLight(0xffbb73, 0.5);
  scene.add(ambientLight);

  const light = new THREE.DirectionalLight(0xffe692, 0.5);
  light.position.set(-100, -10, 50);
  light.target.position.set(0, 0, 0);
  scene.add(light);

  const light2 = new THREE.DirectionalLight(0xff9717, 5.5);
  light2.position.set(100, 100, 130);
  light2.target.position.set(0, 0, 0);
  scene.add(light2);

  const light3 = new THREE.DirectionalLight(0xff9717, 1.5);
  light3.position.set(50, -100, -50);
  light3.target.position.set(0, 0, 0);
  scene.add(light3);

  const light4 = new THREE.PointLight(0xffe692, 0.5);
  light4.position.set(-10, 30, -10);
  scene.add(light4);

  const light5 = new THREE.PointLight(0xffe692, 0.5);
  light5.position.set(0, 100, -10);
  scene.add(light5);

  const light6 = new THREE.DirectionalLight(0xffe692, 0.5);
  light6.position.set(-5, -10, -10);
  light6.target.position.set(0, 0, 0);
  scene.add(light6);

  /*const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    scene.background = new THREE.Color(0x000000);*/

  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.getElementById("tdContainer").appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.minPolarAngle = 1.5;
  controls.maxPolarAngle = 1.6;
  controls.enablePan = false;
  //controls.addEventListener('change', renderer);

  var loader = new GLTFLoader();
  loader.load("../Image/USB.glb", function (gltf) {
    obj = gltf.scene;
    scene.add(gltf.scene);
    animate();
  });
}

/*window.addEventListener("resize",()=>{
  let box = document.getElementById("tdContainer");
  let width = box.offsetWidth;
  let height = box.offsetHeight;
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  console.log({ width, height });
  console.log({ windowHeight, windowWidth });
  var size = window.innerHeight > window.innerWidth ? window.innerWidth / 2 : window.innerHeight/2;
  renderer.setSize(width/2,height/2);
})*/

window.addEventListener("mousedown", () => {
  mouseCliqued = true;
});

window.addEventListener("mouseup", (e) => {
  mouseCliqued = false;
  var width = document.getElementById("element").offsetWidth;
  var x = e.clientX - width;
  /*document.getElementById("test").innerHTML = "x =" + x + ", width = " + width;*/
  if (x < 326) {
    turning = -0.02;
  } else {
    turning = 0.02;
  }
});

/*
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      turning = -0.02;
   } else {
      turning = 0.02;
   }
   obj.rotateY(turning);
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
*/

function animate() {
  if (!mouseCliqued) {
    obj.rotateY(turning);
  }

  if (window.innerWidth < 1160 && window.innerWidth >= 960) {
    renderer.setSize(470, 264.5);
  } else if (window.innerWidth < 960) {
    renderer.setSize(400, 225);
  } else {
    renderer.setSize(650, 366);
  }

  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
}

init();
