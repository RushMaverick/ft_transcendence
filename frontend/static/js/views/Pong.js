import PongGame from "./pongThree.js";
import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Pong");
	}

	createHeader() {
        const header = document.createElement('h1');
        header.textContent = "S U P E R P O N G C H A M P";
        return header;
    }

    createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

	async getHtml(){
		const header = this.createHeader();
		const pong = new PongGame();
		pong.animate();
		const p1 = this.createParagraph("You are successfully running a Super Pongchamp game.");
		this.updateView(header, pong, p1);
		return ;
	}
}
