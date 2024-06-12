import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournaments");
	}

	createHeader() {
        const header = document.createElement('h1');
        header.textContent = "Tournaments";
        return header;
    }

    createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

	async getHtml(){
		const header = this.createHeader();
		const p = this.createParagraph("You have no tournaments.");
		this.updateView(header, p);
		return ;
	}
}