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
		this.setupBall();
        this.setupLighting();
        this.setupCamera();
        this.setupRenderer();
        this.handleKeyPresses();
		this.createBorders();
    }

    createCubes() {
        this.geometry = new THREE.BoxGeometry(5, 15, 2);
        this.material = new THREE.MeshLambertMaterial({
            color: 0xaeaa97
        });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.position.x = -70;
		this.cube.rotation.x = 300
		this.cube.castShadow = true;
		this.cube.receiveShadow = true;

		//Setup cube1 bounding box
		this.cube1Bounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
		this.cube1Bounds.setFromObject(this.cube);
		console.log(this.cube1Bounds);
		
        this.geometry2 = new THREE.BoxGeometry(5, 15, 2);
		this.cube2 = new THREE.Mesh(this.geometry2, this.material);
		this.cube2.position.x = 70;
		this.cube2.rotation.x = 300
		this.cube2.castShadow = true;
		this.cube2.receiveShadow = true;

		//Setup cube2 bounding box
		this.cube2Bounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
		this.cube2Bounds.setFromObject(this.cube2);
		console.log(this.cube2Bounds);

        this.scene.add(this.cube, this.cube2);
    }

	createBorders() {
		this.geometry3 = new THREE.BoxGeometry(200, 1, 2);
		this.geometry4 = new THREE.BoxGeometry(200, 1, 2);

		this.border = new THREE.Mesh(this.geometry3, this.material);
		this.border2 = new THREE.Mesh(this.geometry4, this.material);
		
		this.border.position.x = 10;
		this.border.position.y = 0;
		this.border.position.z = 50;
		
		this.border2.position.x = 5;
		this.border2.position.y = 0;
		this.border2.position.z = -50;

		//Setup border bounding box
		this.borderBounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
		this.borderBounds.setFromObject(this.border);

		//Setup border2 bounding box
		this.border2Bounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
		this.border2Bounds.setFromObject(this.border2);

		this.scene.add(this.border, this.border2);
	}

    setupLighting() {
		this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);

		this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
		this.directionalLight.position.set(200, 500, 300);
        this.scene.add(this.directionalLight, this.ambientLight);
    }

	setupBall() {
		this.geometry5 = new THREE.SphereGeometry(2, 32, 32);
		this.material = new THREE.MeshLambertMaterial({
			color: 0xaeaa97
		});
		this.ball = new THREE.Mesh(this.geometry5, this.material);
		this.ball.position.x = 0;
		this.ball.position.y = 0;
		this.ball.position.z = 0;

		//setup ball bounding box
		this.ballBounds = new THREE.Sphere(this.ball.position.add, 2);

		this.ball.castShadow = true;
		this.ball.receiveShadow = true;
		this.scene.add(this.ball);
	}

    setupCamera() {
	// Setting up camera
	this.aspectRatio = window.innerWidth / window.innerHeight;
	this.cameraWidth = 250;
	this.cameraHeight = this.cameraWidth / this.aspectRatio;

	this.camera = new THREE.OrthographicCamera(
		this.cameraWidth / -2, // left
		this.cameraWidth / 2, // right
		this.cameraHeight / 2, // top
		this.cameraHeight / -2, // bottom
		0, // near plane
		100000 // far plane
	);
	this.camera.position.set(100, 200, 200);
	this.camera.lookAt(0, 2, 0);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth/ 1.3, window.innerHeight / 1.3);
		this.renderer.setClearColor( 0xc7c2a9, 1 );
		this.renderer.shadowMap.enabled = true;
		this.renderer.setPixelRatio( window.devicePixelRatio );
        document.body.appendChild(this.renderer.domElement);
    }

    handleKeyPresses() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'w':
                    this.cube.position.z -= this.speed;
					console.log("w");
                    break;
                case 's':
                    this.cube.position.z += this.speed;
                    break;
                case 'ArrowUp':
                    this.cube2.position.z -= this.speed;
                    break;
                case 'ArrowDown':
                    this.cube2.position.z += this.speed;
                    break;
				//cycle through camera views
				case 'p':
					// Camera view 1
					this.camera.position.set(0, 200, 0);
					this.camera.lookAt(0, 0, 0);
					break;
				case 'o':
					// Camera view 2
					this.camera.position.set(100, 200, 200);
					this.camera.lookAt(0, 2, 0);
					break;
				//case 'i' takes the camera position to the side of the game:
				case 'i':
					this.camera.position.set(0, 0, 0);
					this.camera.lookAt(0, 0, 0);
					break;i
            }
        });
    }

	checkCollision() {

	}

    animate() {
		// console.log("animate");
		if (!this.isAnimating)
			return;
		requestAnimationFrame(() => this.animate());
		if (this.ball.position.x > 70 || this.ball.position.x < -70)
			this.ball.position.x = 0;
		this.cube1Bounds.copy(this.cube.geometry.boundingBox).applyMatrix4(this.cube.matrixWorld);
		this.cube2Bounds.copy(this.cube2.geometry.boundingBox).applyMatrix4(this.cube2.matrixWorld);
		
		console.log(this.cube1Bounds);
		// checkCollision();
		this.ball.position.x += 0.25;
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