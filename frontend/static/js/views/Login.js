import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Login");
	}

	async getHtml(){
		return `
			<div class="container">
				<h2 class="text-center">Login</h2>
				<br>
				<form action="/login.php" class="loginForm">
					<div class="input-group">
						<label for="username" class="label">Username</label>
						<input type="text" id="username" class="input">
						<span class="error-message"></span>
					</div>
					<br>
					<div class="input-group">
						<label for="password" class="label">Password</label>
						<input type="password" id="password" class="input">
						<span class="error-message"></span>
					</div>
					<button class = "login button" data-action="logged-in">
						Login</button>
					<p>Not registered yet? <a href="/register" id ="registerLink" data-link>Register here</a></p>
				</form>
			</div>
			`;
	}

	// var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
	// var wrapper = document.createElement('div');
	// var doc = new DOMParser().parseFromString(xmlString, "text/xml");
	// console.log(doc.firstChild.innerHTML); // => <a href="#">Link...
	// console.log(doc.firstChild.firstChild.innerHTML); // => Link
}



{/* <div class="container">
<h2 class="text-center">Login</h2>
<br>
<form action="/login.php" class="loginForm">
	<div class="input-group">
		<label for="username" class="label">Username</label>
		<input type="text" id="username" class="input">
		<span class="error-message"></span>
	</div>
	<br>
	<div class="input-group">
		<label for="password" class="label">Password</label>
		<input type="password" id="password" class="input">
		<span class="error-message"></span>
	</div>
	<button class="login-button">
		Login</button>
</form>
</div> */}