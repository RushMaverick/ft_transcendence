import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import {Text} from 'troika-three-text'

export default class PongGame {
	static instance;
    constructor() {
		if (!PongGame.instance){
			PongGame.instance = this;
			PongGame.instance.startAnimate();
			PongGame.instance.enterView();
		}
		else{
			PongGame.instance.startAnimate();
			return PongGame.instance;
		}
		//Check if WebGL2 is available, error means WebGL2 is not available on the browser
		if ( WebGL.isWebGL2Available() ) {
			console.log('WebGL2 is available')
		} else {

			const warning = WebGL.getWebGL2ErrorMessage();
			document.getElementById( 'container' ).appendChild( warning );
		}
		this.handleKeyPresses();
		this.joinGame();
    }

	enterView() {
		this.container = document.querySelector('pong');
		this.scene = new THREE.Scene();
		this.waitingScene = new THREE.Scene();
		this.waitingForPlayers = true;
		this.menuSetup();
		this.setupUI();
        this.createCubes();
		this.createBorders();
        this.setupLighting();
        this.setupCamera();
        this.setupRenderer();
		this.setupBall();
		this.animate();
	}

	menuSetup() {
		this.menuCam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

		this.startButton = new Text();
		this.startButton.text = 'Awaiting Players...';
		this.startButton.font = 'static/js/views/gameCanvas/fonts/Tiny5-Regular.ttf';
		this.startButton.fontSize = 50.0;
		this.startButton.position.x = -1;
		this.startButton.position.y = 0;
		this.startButton.color = 0x000000;

		this.menuCam.position.z = 550;
		this.menuCam.position.x = 180;

		this.waitingScene.add(this.menuCam, this.startButton);
	}

	displayGameEnd(message) {
		this.endText = new Text();
		this.endCam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

		this.endText.text = message;
		this.endText.font = 'static/js/views/gameCanvas/fonts/Tiny5-Regular.ttf';
		this.endText.fontSize = 50.0;
		this.endText.position.x = -1;
		this.endText.position.y = 0;
		this.endText.color = 0x000000;

		this.endCam.position.z = 550;
		this.endCam.position.x = 180;

		this.waitingScene.add(this.endText, this.endCam);
		this.renderer.render(this.waitingScene, this.endCam);
	}


	joinGame() {
		let match_id = sessionStorage.getItem('match_id');
		let room_name = sessionStorage.getItem('room_name');
		console.log('joinGame()');
		console.log(match_id);
		console.log(room_name);
		if (match_id){
			this.socket = new WebSocket(`ws://localhost:8000/ws/game/${room_name}/?token=${sessionStorage.getItem('access')}&match_id=${match_id}`);
		} else {
			this.socket = new WebSocket(`ws://localhost:8000/ws/game/${room_name}/?token=${sessionStorage.getItem('access')}`);
		}
		this.socket.onerror = function(error) {
			console.error("WebSocket Error:", error);
		};
		this.socket.onopen = function() {
			console.log('WebSocket connection established.');
			//Start screen before players have connected.
		};
		//This will be used instead of animate() to update the game state.
		this.socket.onmessage = function(event) {
			PongGame.instance.waitingForPlayers = false;
			PongGame.instance.message = JSON.parse(event.data);
			if (PongGame.instance.message.winner) {
				PongGame.instance.stopAnimate();
				const myId = sessionStorage.getItem('userId');
				console.log('My ID:', myId, 'Winner ID:', PongGame.instance.message.winner);
				this.displayGameEnd(myId == PongGame.instance.message.winner ? 'You win!' : 'You lose!');
				// render winner/loser screen
				return;
			}
			PongGame.instance.collisionChecking();
			PongGame.instance.updateUI();
			PongGame.instance.updatePositions();
			PongGame.instance.renderer.render(PongGame.instance.scene, PongGame.instance.camera);
		};
		this.socket.onclose = function() {
			console.log('POng WebSocket connection closed.');
		};
	}

	updateUI() {
		this.p1Score.text = `P1: ${this.message['1'].score}`;
		this.p2Score.text = `P2: ${this.message['2'].score}`;
	}

	setupUI() {

		this.p1Score = new Text()
		this.p2Score = new Text()

		// Set properties to configure:
		// this.p1Score.text = ''
		this.p1Score.font = 'static/js/views/gameCanvas/fonts/Tiny5-Regular.ttf'
		this.p1Score.fontSize = 15.0
		this.p1Score.position.x = 10
		this.p1Score.color = 0x000000

		// this.p2Score.text = ''
		this.p2Score.font = 'static/js/views/gameCanvas/fonts/Tiny5-Regular.ttf'
		this.p2Score.fontSize = 15.0
		this.p2Score.position.x = 160
		this.p2Score.color = 0x000000

		// Update the rendering:
		this.scene.add(this.p1Score, this.p2Score)
	}

    createCubes() {
        this.geometry = new THREE.BoxGeometry(5, 15, 2);
        this.material = new THREE.MeshLambertMaterial({
            color: 0xaeaa97
        });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.position.x = 10;
		this.cube.castShadow = true;
		this.cube.receiveShadow = true;

		//Setup cube1 bounding box
		this.cube1Bounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
		this.cube1Bounds.setFromObject(this.cube);

        this.geometry2 = new THREE.BoxGeometry(5, 15, 2);
		this.cube2 = new THREE.Mesh(this.geometry2, this.material);
		this.cube2.position.x = 190;
		this.cube2.castShadow = true;
		this.cube2.receiveShadow = true;

		//Setup cube2 bounding box
		this.cube2Bounds = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
		this.cube2Bounds.setFromObject(this.cube2);

        this.scene.add(this.cube, this.cube2);
    }

    createBorders() {
        this.borderGeo = new THREE.BoxGeometry(200, 2, 2);

        this.borderMaterial = new THREE.MeshLambertMaterial({
            color: 0xaeaa97
        });

        this.border = new THREE.Mesh(this.borderGeo, this.borderMaterial);
        this.border2 = new THREE.Mesh(this.borderGeo, this.borderMaterial);

        this.border.position.x = 100;
        this.border.position.y = 0;
        this.border.position.z = 0;

        this.border2.position.x = 100;
        this.border2.position.y = 150;
        this.border2.position.z = 0;

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
		this.camera.position.set(100, 75, 100);
		this.camera.lookAt(100, 75, 0);
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
		document.addEventListener('click', (e) => {
			console.log(e.clientX, e.clientY);
		});
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
					break;
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
		//Update bounding boxes
		this.cube1Bounds.copy(this.cube.geometry.boundingBox).applyMatrix4(this.cube.matrixWorld);
		this.cube2Bounds.copy(this.cube2.geometry.boundingBox).applyMatrix4(this.cube2.matrixWorld);
		this.ballBounds.copy(this.ball.geometry.boundingBox).applyMatrix4(this.ball.matrixWorld);

		//Check for collisions
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

		//Check for collisions with ball
		if (this.ballBounds.intersectsBox(this.cube1Bounds) || this.ballBounds.intersectsBox(this.cube2Bounds)){
			this.sphereFlash();
		}
		else {
			this.ball.material.opacity = 1;
			this.ball.material.color = new THREE.Color(0xaeaa97);
		}
	}
	updatePositions() {
		//Update cube positions

		this.cube.position.y = this.message['1'].y;
		this.cube2.position.y = this.message['2'].y;
		this.ball.position.y = this.message['ball'].y;
		this.cube.position.x = this.message['1'].x;
		this.cube2.position.x = this.message['2'].x;
		this.ball.position.x = this.message['ball'].x;

	}

    animate() {
		if (!this.isAnimating)
			return;
		requestAnimationFrame(() => this.animate());
		if (this.waitingForPlayers == true)
			this.renderer.render(this.waitingScene, this.menuCam);
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
