import * as THREE from "three";

const speed = 2.5;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshStandardMaterial({
	color: 0xff0000,
	roughness: 0.5,
	metalness: 0,
	emissive: 0x00,
});
const cube = new THREE.Mesh(geometry, material);
cube.position.x = -70;

const geometry2 = new THREE.BoxGeometry(5, 5, 5);
const material2 = new THREE.MeshStandardMaterial({
	color: 0xff0000,
	roughness: 0.5,
	metalness: 0,
	emissive: 0x00,
});
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.x = 70;

const ball_geometry = new THREE.CircleGeometry(5, 7);
const ball_material = new THREE.MeshStandardMaterial({
	color: 0xffff00,
	roughness: 0.5,
	metalness: 0,
	emissive: 0x00,
});
const ball = new THREE.Mesh(ball_geometry, ball_material);
ball.position.x = 80;
ball.position.y = 80;

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 2, 200);

const camera = new THREE.PerspectiveCamera(
	80,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.z = 50;

scene.add(camera, cube, cube2, ball, light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Function for handling keypress
const handleKeyPress = (e) => {
	switch (e.key) {
		case "w":
			cube.position.y += speed;
			socket.send("{'cmd':'move', 'action','up'}");
			break;
		case "s":
			cube.position.y -= speed;
			socket.send("{'cmd':'move', 'action','down'}");
			break;
		//Player 2, up
		case "ArrowUp":
			cube2.position.y += speed;
			break;
		//Player 2, down
		case "ArrowDown":
			cube2.position.y -= speed;
			break;
	}
};

//Event listener for keypress
document.addEventListener("keydown", handleKeyPress);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8000/ws/game/test/");

// Connection opened
socket.addEventListener("open", (event) => {
	//   socket.send("Hello Server!");
	console.log("connected!");
});

// Listen for messages. Game loop
socket.addEventListener("message", (event) => {
	console.log("Message from server ", event.data);
	let state = JSON.parse(event.data);
	console.log(state.ball);
});

animate();
