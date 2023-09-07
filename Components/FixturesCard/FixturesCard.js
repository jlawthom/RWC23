function renderFixturesCard(){
    tags = document.getElementsByClassName("FixturesCard");
    for (let i of tags) {
        let fixtureId = i.getAttribute("FixtureId");

        let fixture = getFixture(fixtureId);
        let homePlayer = getPlayer(fixture['homeName']);
        let awayPlayer = getPlayer(fixture['awayName']);
        
        let score;
        if(fixture['homeScore']!=null){
            score = `${fixture['homeScore']}-${fixture['awayScore']}`;
        } else {
            score = `v`;
        }
        
        let stage;
        if(fixture['stage']=="pool"){
            stage = "Pool " + homePlayer['pool'];
            stageLabel = homePlayer['pool'];
        } else {
            stage = fixture['stage']
            stageLabel = stage.replace(' ','-');
        }

        let homeName;
        let awayName;
        homePlayer ? homeName = homePlayer['name'] : homeName = fixture['homeName']; 
        awayPlayer ? awayName = awayPlayer['name'] : awayName = fixture['awayName'];

        let HTML = ` 
        <div class="fixture-label pool-header-${stageLabel}"></div>
        <div class="card">
            <div class="card-header fixtures-header-container">
                <h1>${fixture['day'].toUpperCase()} ${fixture['date'].toUpperCase()}</h1>
                <h1>${fixture['time']}</h1>
            </div>
            <div class="fixture-details">
            `
        if (homePlayer) {
            HTML += `            
                <div class="fixture-images">
                    <img src="./img/Players/${homeName}Sqr.png" class="fixture-element-img"></img>
                    <img src="./img/Teams/${homePlayer['team']}_logo.png" class="fixture-element-logo"></img>
                </div>
                <div class="fixture-text-container">
                    <h3 class="fixture-detail">${stage}</h3>
                    <div class="fixture-names-score">
                        <div>
                            <h1 class="fixture-name">${homeName.toUpperCase()}</h1>
                            <h3 class="fixture-team">${homePlayer['team']}</h3>
                        </div>
                `
        } else {
            HTML += `            
                <div class="fixture-text-container">
                    <h3 class="fixture-detail">${stage}</h3>
                    <div class="fixture-names-score">
                        <div>
                            <h1 class="fixture-name">${homeName.toUpperCase()}</h1>
                        </div>
                `
        }

        HTML += `
                        <h1 class="fixture-score">${score}</h1>

        `
        if (awayPlayer) {
            HTML += `
                        <div>
                            <h1 class="fixture-name">${awayName.toUpperCase()}</h1>
                            <h3 class="fixture-team">${awayPlayer['team']}</h3>
                        </div>
                    </div>
                    <h3 class="fixture-detail">${fixture['venue']}</h3>
                </div>
                <div class="fixture-images">
                    <img src="./img/Players/${awayName}Sqr.png" class="fixture-element-img"></img>
                    <img src="./img/Teams/${awayPlayer['team']}_logo.png" class="fixture-element-logo"></img>
                </div>
            </div>
        `
        } else {
            HTML += `
                        <div>
                            <h1 class="fixture-name">${awayName.toUpperCase()}</h1>
                        </div>
                    </div>
                    <h3 class="fixture-detail">${fixture['venue']}</h3>
                </div>
            </div>
            `
        }

        if (homePlayer && awayPlayer) {
            let matchInfoLink;
            if (fixture['stage']=="pool"){
                matchInfoLink = `https://www.rugbyworldcup.com/match/${homePlayer['team'].replace(/\s/g, '')}-${awayPlayer['team'].replace(/\s/g, '')}`;
            } else {
                matchInfoLink = `https://www.rugbyworldcup.com/match/${fixture['stage'].replace(/ /g, '-')}`;
            }
            HTML += `
                    <div class="card-footer fixtures-footer">
                    <h1><a href="${matchInfoLink}" target="_blank">Match Info ></a></h1>
                </div>
            </div>
            `
        }

        i.innerHTML = HTML;
    }
    renderPlayerElement();
}