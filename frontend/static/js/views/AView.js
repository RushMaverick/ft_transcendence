import PongGame from "./gameCanvas/pongThree.js";

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

	clearView() {
		const container = document.querySelector('main');
		container.innerHTML = '';
	}

	updateView(...elements){
		const container = document.querySelector('main');
		const canvas = document.querySelector('canvas');
		const pong = document.querySelector('pong');
		if (canvas && window.location.pathname != '/pong' && PongGame.instance){
			canvas.remove();
			PongGame.instance.stopAnimate();
		}
		container.innerHTML = '';
		elements.forEach((element) => {
			if (element)
				container.appendChild(element);
		});
	}

	createHeader(text, headerSize) {
		const header = document.createElement(headerSize);
        header.textContent = text;
		header.className = 'h1';
        return header;
    }

    createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
		p.innerHTML = text.replace(/\t/g, '&emsp;&emsp;');
		p.className = 'p';
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

	async fetchJsonData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch JSON data:", error);
            return null;
        }
    }

	createGame(name){
		// Create the game div
		const gameDiv = document.createElement('div');
		gameDiv.id = name; // Assign an ID to easily select the game later
		gameDiv.classList.add(name);
	
		// Create a new PongGame instance
		const pong = new PongGame();
		pong.animate();

		// Append the game div to the body (or another element)
		document.body.appendChild(gameDiv);
		document.body.appendChild(pong.renderer.domElement);
		
		// Return the game div for potential further manipulation
		return gameDiv;
	}
}