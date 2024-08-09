import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("One-vs-one");
	}

	async getHtml(){

		const gameDiv = this.createGame('pong');

		window.localStorage.setItem('page', 'OneVsOne');
		this.updateView(gameDiv);
		return ;
	}
}