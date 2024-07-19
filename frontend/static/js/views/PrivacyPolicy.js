import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Privacy Policy");
	}

	async getHtml(){
		const header = this.createHeader('header', 'Privacy Policy', 'h2');
		const policy = this.createParagraph('policy', 'This is the privacy policy');
		const policy1 = this.createParagraph();
		
		const policy2 = this.createParagraph('policy2', 'This is the privacy policy');
		const policy3 = this.createParagraph('policy3', 'This is the privacy policy');
		const policy4 = this.createParagraph('policy4', 'This is the privacy policy');
		policy1.appendChild(policy2);
		policy1.appendChild(policy3);
		policy1.appendChild(policy4);

		const gdpr = this.createParagraph('gdpr', 'This is the privacy policy');
		const gdprRequests = this.createParagraph('gdpr-requests');
		gdprRequests.classList.add('gdpr-requests')
		const request2 = this.createParagraph('request2', 'This is the privacy request');
		const request3 = this.createParagraph('request3', 'This is the privacy request');
		const request4 = this.createParagraph('request4', 'This is the privacy request');
		const request5 = this.createParagraph('request5', 'This is the privacy request');
		const request6 = this.createParagraph('request6', 'This is the privacy request');
		gdprRequests.appendChild(request2);
		gdprRequests.appendChild(request3);
		gdprRequests.appendChild(request4);
		gdprRequests.appendChild(request5);
		gdprRequests.appendChild(request6);

		const policy11 = this.createParagraph('policy11', 'This is the privacy policy');
		const policy12 = this.createParagraph('policy12', 'This is the privacy policy');
		
		window.localStorage.setItem('page', 'PrivacyPolicy');
		this.updateView(header, 
			policy,
			policy1,
			gdpr,
			gdprRequests,
			policy11,
			policy12,);
		return ;
	}
}