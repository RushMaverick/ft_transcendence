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

	updateView( ...elements){
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
		document.dispatchEvent(new CustomEvent('viewUpdated'));
	}

	createHeader(langkey, text, headerSize) {
		const header = document.createElement(headerSize);
        header.textContent = text;
		header.setAttribute('lang-key', langkey);
        return header;
    }

    createParagraph(langkey, text) {
        const p = document.createElement('p');
        p.textContent = text;
		p.setAttribute('lang-key', langkey);
        return p;
    }

    createTestParagraph(langkey) {
        const p = document.createElement('p');
		p.textContent = 'ei vieläkään';
		p.setAttribute('lang-key', langkey);
		p.innerHTML = text.replace(/\t/g, '&emsp;&emsp;');
		p.className = 'p';
        return p;
    }

	// //lets try to figure out if we can make this work somehow? right now, is not used
	// createParagraphWithLink(langkey, additionalText, href) {
    //     const p = document.createElement('p');
	// 	p.textContent = "temp";
	// 	p.setAttribute('lang-key', langkey);
    //     const link = document.createElement('a');
	// 	console.log("WE ADD A LINK NOWWW");
	// 	console.log(href);
	// 	console.log(additionalText);
    //     link.href = href;
    //     link.textContent = "umm hello";
    //     link.dataset.link = true;
    //     p.appendChild(link);
    //     // if (additionalText) {
    //     //     const span = document.createElement('span');
    //     //     span.textContent = additionalText;
    //     //     p.appendChild(span);
    //     // }
    //     return p;
    // }

	createLink(langkey, text, href){
		const link = document.createElement('a');
		link.textContent = text;
		link.href = href;
		link.dataset.link = true;
		link.setAttribute('lang-key', langkey);
		return link;
	}

	createAnchor(langkey, text){
		const a = document.createElement('a');
        a.textContent = text;
		a.setAttribute('lang-key', langkey);
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
		// button.setAttribute('lang-key', langkey);
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