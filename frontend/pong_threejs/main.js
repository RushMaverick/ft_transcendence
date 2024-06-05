import * as THREE from 'three';

const speed = 2.5

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(5, 15, 2)
const material = new THREE.MeshLambertMaterial({color: 0x00FFFF})
const cube = new THREE.Mesh(geometry, material)
cube.position.x = -70
cube.rotation.x = 300

const geometry_sphere = new THREE.SphereGeometry(2, 32, 32)
const material_sphere = new THREE.MeshLambertMaterial({color: 0xFF00FF})
const sphere = new THREE.Mesh(geometry_sphere, material_sphere)

const geometry2 = new THREE.BoxGeometry(5, 15, 2)
const material2 = new THREE.MeshLambertMaterial({color: 0x00FFFF})
const cube2 = new THREE.Mesh(geometry2, material2)
cube2.position.x = 70
cube2.rotation.x = 300

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);

// Setting up camera
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, // left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, // bottom
  0, // near plane
  1000 // far plane
);
camera.position.set(100, 200, 200);
camera.lookAt(0, 2, 0);

scene.add(camera, sphere, cube, cube2, ambientLight, directionalLight)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


//Function for handling keypress
const handleKeyPress = (e) => {
	switch(e.key) {
		case 'w':
			cube.position.z -= speed
			break
		case 's':
			cube.position.z += speed
			break
		//Player 2, up
		case 'ArrowUp':
			cube2.position.y += speed
			break
		//Player 2, down
		case 'ArrowDown':
			cube2.position.y -= speed
			break
		}
}

//Event listener for keypress
document.addEventListener('keydown', handleKeyPress)

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	sphere.position.x += 0.1
	if (sphere.position.x > 70) {
		sphere.position.x = 0
	}
}

animate()