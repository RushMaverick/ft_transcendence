import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Login");
	}

	async getHtml(){
		return `
			<h1>Welcome to Pong game</h1>
			<p>
				Please Login to access the game.
			</p>
			<p>
				<a href="/one-vs-one" data-link>Start a one-vs-one game</a>.
			</p>
			<p>
				<a href="/tournaments" data-link>Start your tournament</a>.
			</p>
			<p>
				<a href="/friends" data-link>Checkout how your friends are doing</a>.
			</p>
			`;
	}
}