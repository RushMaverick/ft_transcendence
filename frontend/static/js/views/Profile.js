import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Profile");
	}

	async getHtml(){
		const header = this.createHeader('Welcome User!', 'h1');
        const message = this.createParagraph("Here you could see your profile page.");
        const stats = this.createParagraphWithLink("Check out your game stats", "/statistics");
        const settings = this.createParagraphWithLink("Change settings from here", "/settings");
        const friends = this.createParagraphWithLink("Checkout who is online", "/friends");
		
		this.updateView(header, message, stats, settings, friends);
		return ;
	}
}