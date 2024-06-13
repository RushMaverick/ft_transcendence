export default class {
	constructor(params){
		this.params = params;
	}

	setTitle(title){
		document.title = title;
	}

	async getHtml(){
		return "";
	}

	updateView(...elements){
		const container = document.querySelector('main');
		container.innerHTML = '';
		elements.forEach((element) => {
			if (element)
				container.appendChild(element);
		});
	}

	createHeader1(text) {
        const header = document.createElement('h1');
        header.textContent = text;
        return header;
    }

	createHeader2(text) {
        const header = document.createElement('h2');
        header.textContent = text;
        return header;
    }

    createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

	createAnchor(text){
		const a = document.createElement('a');
        a.textContent = text;
        return a;
	}

	createForm(name){
		const form = document.createElement('form');
		form.classList.add(name);
		return form
	}

	createButton(functionality, text){
		const button = document.createElement('button');
		button.classList.add(functionality, 'button');
		button.textContent = text;
		return button;
	}


}