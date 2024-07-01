import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

export default class PongGame {
	static instance;
    constructor() {
		if (!PongGame.instance){
			PongGame.instance = this;
		}
		else{
			PongGame.instance.startAnimate();
			return PongGame.instance;
		}
		this.joinGame();
        this.speed = 2.5;
		this.isAnimating = true;
        this.scene = new THREE.Scene();
        this.createCubes();
        this.setupLighting();
        this.setupCamera();
        this.setupRenderer();
        this.handleKeyPresses();
		this.createBorders();
		this.setupBall();
    }

	joinGame() {
		let roomname = 'testroom';
		this.socket = new WebSocket(`ws://localhost:8000/ws/game/${roomname}/`);
		this.socket.onopen = function() {
			console.log('WebSocket connection established.');
		  };
		this.socket.onmessage = function(event) {
			const message = JSON.parse(event.data);
			console.log('Received message:', message);
		  };
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
		
        this.geometry2 = new THREE.BoxGeometry(5, 15, 2);
		this.cube2 = new THREE.Mesh(this.geometry2, this.material);
		this.cube2.position.x = 70;
		this.cube2.rotation.x = 300
		this.cube2.castShadow = true;
		this.cube2.receiveShadow = true;

		//Setup cube2 bounding box
		this.cube2Bounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
		this.cube2Bounds.setFromObject(this.cube2);

        this.scene.add(this.cube, this.cube2);
    }

    createBorders() {
        this.borderGeo = new THREE.BoxGeometry(200, 1, 2);
        this.planeGeo = new THREE.PlaneGeometry(200, 150, 2);
        
        this.borderMaterial = new THREE.MeshLambertMaterial({
            color: 0xaeaa97
        });
        this.border3Material = new THREE.MeshLambertMaterial({
			transparent: true,
			opacity: 0.0,
        });

        this.border = new THREE.Mesh(this.borderGeo, this.borderMaterial);
        this.border2 = new THREE.Mesh(this.borderGeo, this.borderMaterial);
        this.plane = new THREE.Mesh(this.planeGeo, this.border3Material);
        
        this.border.position.x = 0;
        this.border.position.y = 0;
        this.border.position.z = 75;
        
        this.border2.position.x = 0;
        this.border2.position.y = 0;
        this.border2.position.z = -75;

        this.plane.rotateOnAxis(new THREE.Vector3(-1, 0, 0), Math.PI / 2);

        //Setup border bounding box
        this.borderBounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        this.borderBounds.setFromObject(this.border);

        //Setup border2 bounding box
        this.border2Bounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        this.border2Bounds.setFromObject(this.border2);

        this.scene.add(this.border, this.border2, this.plane);
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
		this.ballBounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());;
		this.ballBounds.setFromObject(this.ball);

		this.ball.castShadow = true;
		this.ball.receiveShadow = true;
		this.scene.add(this.ball);
	}

    setupCamera() {
		// Setting up camera
		this.aspectRatio = window.innerWidth / window.innerHeight;
		this.cameraWidth = 350;
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
					this.socket.send(JSON.stringify({
						'cmd': 'move',
						'cmd_args': 'up'
					}));
                    break;
                case 's':
					this.socket.send(JSON.stringify({
						'cmd': 'move',
						'cmd_args': 'down'
					}));
                    break;
                case 'ArrowUp':
					this.socket.send(JSON.stringify({
						'cmd': 'move',
						'cmd_args': 'up'
					}));
                    break;
                case 'ArrowDown':
					this.socket.send(JSON.stringify({
						'cmd': 'move',
						'cmd_args': 'down'
					}));
                    break;
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
	
	cubeFlash() {
		this.cube.material.transparent = true;
		this.cube.material.opacity = 0.5;
		this.cube.material.color = new THREE.Color(Math.random() * 0xffffff);
	}

	sphereFlash() {
		this.ball.material.transparent = true;
		this.ball.material.opacity = 0.5;
		this.ball.material.color = new THREE.Color(Math.random() * 0xffffff);
	}

	collisionChecking() {
		if (this.cube1Bounds.intersectsBox(this.borderBounds) || this.cube1Bounds.intersectsBox(this.border2Bounds)
			|| this.cube2Bounds.intersectsBox(this.borderBounds) || this.cube2Bounds.intersectsBox(this.border2Bounds)
			|| this.ballBounds.intersectsBox(this.cube1Bounds) || this.ballBounds.intersectsBox(this.cube2Bounds)){
			
				//Debug feature
			this.cubeFlash();
		}
		else {
			this.cube.material.opacity = 1;
			this.cube.material.color = new THREE.Color(0xaeaa97);
		}
		if (this.ballBounds.intersectsBox(this.cube1Bounds) || this.ballBounds.intersectsBox(this.cube2Bounds)){
			this.sphereFlash();
		}
		else {
			this.ball.material.opacity = 1;
			this.ball.material.color = new THREE.Color(0xaeaa97);
		}
	}

    animate() {
		if (!this.isAnimating)
			return;
		requestAnimationFrame(() => this.animate());
		if (this.ball.position.x > 70 || this.ball.position.x < -70)
			this.ball.position.x = 0;
		this.cube1Bounds.copy(this.cube.geometry.boundingBox).applyMatrix4(this.cube.matrixWorld);
		this.cube2Bounds.copy(this.cube2.geometry.boundingBox).applyMatrix4(this.cube2.matrixWorld);
		this.ballBounds.copy(this.ball.geometry.boundingBox).applyMatrix4(this.ball.matrixWorld);
		this.collisionChecking();
		
		this.ball.position.x += 0.25;
		this.renderer.render(this.scene, this.camera);
		window.addEventListener('resize', () => {
			if (window.innerWidth > window.innerHeight) 
			{
				this.camera.aspectRatio = window.innerWidth / window.innerHeight; // static aspect ratio for the canvas?
				this.camera.updateProjectionMatrix();
				this.renderer.setSize(window.innerWidth/ 1.3, window.innerHeight / 1.3); // static aspect ratio for the canvas would be implemented here?
			}
					
		},false)
    }

    startAnimate() {
		this.isAnimating = true;
    }

    stopAnimate() {
		this.isAnimating = false;
    }
}
