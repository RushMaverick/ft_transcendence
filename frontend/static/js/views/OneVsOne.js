import AView from "./AView.js";
import PongGame from "./gameCanvas/pongThree.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("One-vs-one");
	}

	async getHtml(){

		const test = this.createHeader('header', 'FIGHT ME ONE ON ONE!', 'h2');

		const gameDiv = this.createGame('pong');

		window.localStorage.setItem('page', 'OneVsOne');
		this.updateView(test, gameDiv);
		return ;
	}
}