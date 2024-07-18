import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Privacy Policy");
	}

	async getHtml(){
		const header = this.createHeader('header', 'Privacy Policy', 'h2');
		const policy = this.createParagraph('policy', 'This is the privacy policy');
		
		window.localStorage.setItem('page', 'PrivacyPolicy');
		this.updateView(header, policy);
		return ;
	}
}