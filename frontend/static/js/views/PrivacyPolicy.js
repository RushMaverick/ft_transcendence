import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Privacy Policy");
	}

	async getHtml(){
		const header = this.createHeader('header', 'Privacy Policy', 'h2');
		const policy = this.createParagraph('policy', 'This is the privacy policy');
		const policy2 = this.createParagraph('policy2', 'This is the privacy policy');
		const policy3 = this.createParagraph('policy3', 'This is the privacy policy');
		const policy4 = this.createParagraph('policy4', 'This is the privacy policy');
		const policy5 = this.createParagraph('policy5', 'This is the privacy policy');
		const policy6 = this.createParagraph('policy6', 'This is the privacy policy');
		const policy7 = this.createParagraph('policy7', 'This is the privacy policy');
		const policy8 = this.createParagraph('policy8', 'This is the privacy policy');
		const policy9 = this.createParagraph('policy9', 'This is the privacy policy');
		const policy10 = this.createParagraph('policy10', 'This is the privacy policy');
		const policy11 = this.createParagraph('policy11', 'This is the privacy policy');
		const policy12 = this.createParagraph('policy12', 'This is the privacy policy');
		
		window.localStorage.setItem('page', 'PrivacyPolicy');
		this.updateView(header, 
			policy,
			policy2,
			policy3,
			policy4,
			policy5,
			policy6,
			policy7,
			policy8,
			policy9,
			policy10,
			policy11,
			policy12,);
		return ;
	}
}