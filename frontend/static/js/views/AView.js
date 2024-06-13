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

	createHeader(text, headerSize) {
		const header = document.createElement(headerSize);
        header.textContent = text;
        return header;
    }

    createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

	createParagraphWithLink(text, href, additionalText) {
        const p = document.createElement('p');
		p.textContent = text;
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