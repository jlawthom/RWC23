function renderTournamentBoard(){
    tags = document.getElementsByClassName("TournamentBoard");
    for (let i of tags) {

        let HTML = `
        <div class="tournament-grid-container">
            <div class="TournamentTable" Pool="A"></div>
            <div class="TournamentTable" Pool="D"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Gary" namePlayer2="Connor"></div>
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Rhiannon" namePlayer2="Josie"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="Connor" namePlayer2="Rhiannon"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentFinalMatch" RoundLabel="Final" namePlayer1="Connor" namePlayer2="Naomi"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="Leah" namePlayer2="Naomi"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Leah" namePlayer2="Claire"></div>
            <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Naomi" namePlayer2="Lili"></div>
        </div>

        <div class="tournament-grid-container">
            <div class="TournamentTable" Pool="B"></div>
            <div class="TournamentTable" Pool="C"></div>
        </div>

        `;

        i.innerHTML = HTML;
    }

    renderTournamentTable();
    renderTournamentKnockoutMatch();
    renderTournamentFinalMatch();
}