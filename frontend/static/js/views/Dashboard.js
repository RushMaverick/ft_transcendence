import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Dashboard");
	}

	createHeader() {
        const header = document.createElement('h1');
        header.textContent = "Welcome to Pong game";
        return header;
    }

    createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

    createParagraphWithLink(text, href, additionalText) {
        const p = document.createElement('p');
        const link = document.createElement('a');
        link.href = href;
        link.textContent = text;
        link.dataset.link = true;
        p.appendChild(link);
        if (additionalText) {
            const span = document.createElement('span');
            span.textContent = additionalText;
            p.appendChild(span);
        }
        return p;
    }

	async getHtml(){
		const header = this.createHeader();
        const p1 = this.createParagraph("You are successfully running a Pong game.");
        const p2 = this.createParagraphWithLink("Start a one-vs-one game", "/one-vs-one");
        const p3 = this.createParagraphWithLink("Start your tournament", "/tournaments");
        const p4 = this.createParagraphWithLink("Checkout how your friends are doing", "/friends");
		
		this.updateView(header, p1, p2, p3, p4);

		return ;
	}
}

