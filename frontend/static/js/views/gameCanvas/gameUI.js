import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

export default class UI {
	static instance;
	constructor () {
		if (!UI.instance){
			UI.instance = this;
		}
		else{
			return UI.instance;
		}
		this.textRenderer = new CSS2DRenderer();
		this.textRenderer.setSize(window.innerWidth/ 1.3, window.innerHeight / 1.3);
		this.textRenderer.domElement.style.position = 'absolute';
		document.body.appendChild(this.textRenderer.domElement);
	}
}