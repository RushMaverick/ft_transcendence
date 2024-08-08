import AView from "./AView.js";

export default class extends AView {
    constructor(params) {
        super(params);
        this.setTitle("Match History");
    }

    async getHtml() {
        const header = this.createHeader('header', 'Match History', 'h1');
        const matchHistoryTable = await this.createMatchHistory('static/js/views/matches.json');

        this.updateView(header, matchHistoryTable);
        return;
    }

    async createMatchHistory(url) {
        const matchHistoryData = await this.fetchJsonData(url);
        const table = document.createElement('table');
        table.classList.add('match-history-table');

		if (matchHistoryData === null)
			return(this.createParagraph('no-match', "No match history to be found"));

        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Player 1', 'Player 2', 'Winner', 'Score', 'Date'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        matchHistoryData.forEach(match => {
            const row = document.createElement('tr');

            const player1Cell = document.createElement('td');
            player1Cell.textContent = match.player1.username;
            row.appendChild(player1Cell);

            const player2Cell = document.createElement('td');
            player2Cell.textContent = match.player2.username;
            row.appendChild(player2Cell);

            const winnerCell = document.createElement('td');
            winnerCell.textContent = match.winner.username;
            row.appendChild(winnerCell);

            const scoreCell = document.createElement('td');
            scoreCell.textContent = `${match.player1_score} - ${match.player2_score}`;
            row.appendChild(scoreCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = new Date(match.date).toLocaleDateString();
            row.appendChild(dateCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        return table;
    }
}
