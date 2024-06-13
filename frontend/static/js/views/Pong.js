import PongGame from "./pongThree.js";
import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Pong");
	}

	async getHtml(){
		const header = this.createHeader1('S U P E R P O N G C H A M P');
		const pong = new PongGame();
		pong.animate();
		const p = this.createParagraph("You are successfully running a Super Pongchamp game.");
		
		this.updateView(header, pong, p);
		return ;
	}
}
