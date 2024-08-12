import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Privacy Policy");
	}

	async getHtml(){
		const container = document.createElement('div');
		container.classList.add('container');
		const header = this.createHeader('header', 'Privacy Policy', 'h2');
		const policy = this.createParagraph('policy');
		const policy1 = this.createParagraph();
		
		const policy2 = this.createParagraph('policy2');
		const policy3 = this.createParagraph('policy3');
		const policy4 = this.createParagraph('policy4');
		policy1.appendChild(policy2);
		policy1.appendChild(policy3);
		policy1.appendChild(policy4);

		const gdpr = this.createParagraph('gdpr', 'This is the privacy policy');
		gdpr.classList.add('gdpr-intro');
		const gdprRequests = this.createParagraph('gdpr-requests');
		gdprRequests.classList.add('gdpr-requests')
		const request2 = this.createParagraph('request2');
		const request3 = this.createParagraph('request3');
		const request4 = this.createParagraph('request4');
		const request5 = this.createParagraph('request5');
		const request6 = this.createParagraph('request6');
		const request7 = this.createParagraph('policy7');
		gdprRequests.appendChild(request2);
		gdprRequests.appendChild(request3);
		gdprRequests.appendChild(request4);
		gdprRequests.appendChild(request5);
		gdprRequests.appendChild(request6);
		gdprRequests.appendChild(request7);

		const policy5 = this.createParagraph('policy5', 'This is the privacy policy');
		container.appendChild(header);
		container.appendChild(policy);
		container.appendChild(policy1);
		container.appendChild(gdpr);
		container.appendChild(gdprRequests);
		container.appendChild(policy5);
		
		window.localStorage.setItem('page', 'PrivacyPolicy');
		this.updateView(container);
		return ;
	}
}