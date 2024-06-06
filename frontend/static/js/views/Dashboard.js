import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Dashboard");
	}

	async getHtml(){
		return `
			<h1>Welcome to Pong game</h1>
			<p>
				You are successfully running a Pong game.	
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

/* <nav class ="nav">
<a href = "/dashboard" class="nave__link" data-link>Dashboard</a><br>
<a href = "/one-vs-one" class="nave__link" data-link>ONE-VS-ONE</a><br>
<a href = "/tournaments" class="nave__link" data-link>Tournaments</a><br>
<a href = "/friends"class="nave__link" data-link>Friends</a><br>
</nav> */