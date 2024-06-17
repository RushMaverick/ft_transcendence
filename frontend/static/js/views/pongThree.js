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
        const geometry = new THREE.BoxGeometry(5, 5, 5);
        const material = new THREE.MeshStandardMaterial({
            color: 0xFF0000,
            roughness: 0.5,
            metalness: 0.,
            emissive: 0x00
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.cube.position.x = -70;

        const geometry2 = new THREE.BoxGeometry(5, 5, 5);
        const material2 = new THREE.MeshStandardMaterial({
            color: 0xFF0000,
            roughness: 0.5,
            metalness: 0.,
            emissive: 0x00
        });
        this.cube2 = new THREE.Mesh(geometry2, material2);
        this.cube2.position.x = 70;
    }

    setupLighting() {
        this.light = new THREE.DirectionalLight(0xFFFFFF, 1);
        this.light.position.set(0, 2, 200);
        this.scene.add(this.light);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 50;
        this.scene.add(this.camera);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    handleKeyPresses() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'w':
                    this.cube.position.y += this.speed;
					console.log("w")
                    break;
                case 's':
                    this.cube.position.y -= this.speed;
                    break;
                case 'ArrowUp':
                    this.cube2.position.y += this.speed;
                    break;
                case 'ArrowDown':
                    this.cube2.position.y -= this.speed;
                    break;
            }
        });
    }

    animate() {
		console.log("animate")
		if (!this.isAnimating)
			return ;
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }

	startAnimate(){
		this.isAnimating = true;
	}

	stopAnimate(){
		this.isAnimating = false;
	}
		

}

export default PongGame;