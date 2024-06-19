import * as THREE from 'three';

class PongGame {
	static instance;
    constructor() {
		if (!PongGame.instance){
			PongGame.instance = this;
		}
		else{
			PongGame.instance.startAnimate();
			return PongGame.instance;
		}
        this.speed = 2.5;
		this.isAnimating = true;
        this.scene = new THREE.Scene();
        this.createCubes();
        this.setupLighting();
        this.setupCamera();
        this.setupRenderer();
        this.handleKeyPresses();
    }

    createCubes() {
        this.geometry = new THREE.BoxGeometry(5, 15, 2);
        this.material = new THREE.MeshLambertMaterial({
            color: 0xaeaa97
        });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.position.x = -70;
		this.cube.rotation.x = 300
		
        this.geometry2 = new THREE.BoxGeometry(5, 15, 2);
        this.material2 = new THREE.MeshLambertMaterial({
			color: 0xaeaa97,
			});
		this.cube2 = new THREE.Mesh(this.geometry2, this.material2);
		this.cube2.position.x = 70;
		this.cube2.rotation.x = 300
        this.scene.add(this.cube); // Add this line
        this.scene.add(this.cube2); // Add this line
    }

    setupLighting() {
		this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);

		this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
		this.directionalLight.position.set(200, 500, 300);
        this.scene.add(this.directionalLight, this.ambientLight);
    }

    setupCamera() {
	// Setting up camera
	this.aspectRatio = window.innerWidth / window.innerHeight;
	this.cameraWidth = 150;
	this.cameraHeight = this.cameraWidth / this.aspectRatio;

	this.camera = new THREE.OrthographicCamera(
		this.cameraWidth / -2, // left
		this.cameraWidth / 2, // right
		this.cameraHeight / 2, // top
		this.cameraHeight / -2, // bottom
		0, // near plane
		1000 // far plane
	);
	this.camera.position.set(100, 200, 200);
	this.camera.lookAt(0, 2, 0);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth/ 1.5, window.innerHeight / 1.5);
		this.renderer.setClearColor( 0xc7c2a9, 1 );
        document.body.appendChild(this.renderer.domElement);
    }

    handleKeyPresses() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'w':
                    this.cube.position.z += this.speed;
					console.log("w");
                    break;
                case 's':
                    this.cube.position.z -= this.speed;
                    break;
                case 'ArrowUp':
                    this.cube2.position.z += this.speed;
                    break;
                case 'ArrowDown':
                    this.cube2.position.z -= this.speed;
                    break;
            }
        });
    }

    animate() {
		console.log("animate");
		if (!this.isAnimating)
			return;
		requestAnimationFrame(() => this.animate());
		this.renderer.render(this.scene, this.camera);
    }

    startAnimate() {
		this.isAnimating = true;
    }

    stopAnimate() {
		this.isAnimating = false;
    }
}

export default PongGame;