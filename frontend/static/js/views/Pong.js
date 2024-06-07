import PongGame from "./pongThree.js";
import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Pong");
	}

	async getHtml(){
		const pong = new PongGame();
		pong.animate();
	}
}
