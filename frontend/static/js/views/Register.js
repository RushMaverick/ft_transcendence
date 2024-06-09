import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Register");
	}

	async getHtml(){
		return `
		<h1>Register</h1>
			<p>Already have an account? <a href="/login" data-link>Login here</a></p>
			<br>
			<form action="/register.php" class="registerForm">
				<div class="input-group">
					<p>Please type your username and password</p>
					<label for="username" class="label">Username</label>
					<input type="text" id="username" class="input"><br>
					<label for="password" class="label">Password</label>
					<input type="text" id="password" class="input">
				</div>
			<button class = "login button" data-action="registered">
				Register</button>
		`;
	}
}