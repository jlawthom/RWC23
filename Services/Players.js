function Player(playerId, name, team, pool, tieBreak, points, pin){
    return {
        "playerId": playerId,
        "name": name,
        "team": team,
        "pool": pool,
        "tieBreak": tieBreak,
        "points": points,
        "pin": pin
    }
}

const PLAYERS = [
    Player(1, "Gramma", "New Zealand", "A",1, 5, 1000),
    Player(2, "Claire", "France", "A", 0, 8, 1234),
    Player(3, "Ci & Jens", "Italy", "A", 0, 5, 1010),
    Player(4, "Naomi", "Uruguay", "A", -1, 0, 2000),
    Player(5, "Chrissy", "Namibia", "A", -2, 0, 9999),
    Player(6, "Ian", "South Africa", "B", 0, 4, 2222),
    Player(7, "Martine", "Ireland", "B", 0, 10, 2345),
    Player(8, "George", "Scotland", "B", 0, 0, 5555),
    Player(9, "Povey", "Tonga", "B", -1, 0, 1111),
    Player(10, "Winters", "Romania", "B", -2, 0, 5678),
    Player(11, "Jack", "Wales", "C", 0, 10, 4321),
    Player(12, "Sonny", "Australia", "C", 0, 5, 6789),
    Player(13, "Connor", "Fiji", "C", 0, 2, 9999),
    Player(14, "Julian", "Georgia", "C", 0, 0, 5432),
    Player(15, "Andrea", "Portugal", "C", -1, 0, 1234),
    Player(16, "Bethan", "England", "D", 0, 4, 5000),
    Player(17, "Josie", "Japan", "D", 0, 5, 2020),
    Player(18, "Louise", "Argentina", "D", 0, 0, 1997),
    Player(19, "Joe","Samoa", "D", 1, 5, 3333),
    Player(20, "Callum", "Chile", "D", -1, 0, 4444)
]

function getPlayer(inputName){
    let name = toTitleCase(inputName);
    return PLAYERS.filter(player => player['name']==name)[0];
}

function getPlayerById(id){
    return PLAYERS.filter(player => player['playerId']==id)[0];
}

function checkPlayerPin(inputName, pin) {
    let name = toTitleCase(inputName);
    if (PLAYERS.filter(player => player['name']==name).length == 0){
        return "Invalid name";
    }
    if (pin.length != 4) {
        return "Please enter 4-digit pin";
    }
    let playerPin = getPlayer(name)['pin'];
    console.log(getPlayer(name));
    console.log(pin, playerPin);

    if (pin == playerPin) {
        return true;
    } else {
        return "Wrong pin";
    }
}