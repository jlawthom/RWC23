function Fixture(id, homeName, awayName, homeScore, awayScore, stage, day, date, time, venue){
    return {
        "id": id,
        "homeName": homeName,
        "awayName": awayName,
        "homeScore": homeScore,
        "awayScore": awayScore,
        "stage": stage,
        "day": day,
        "date": date,
        "time": time,
        "venue": venue
    }
}

const FIXTURES = [
    Fixture(1, "Claire", "Gramma", 27, 13, "pool", "fri", "08 september", "20:15", "Stade de France, Saint-Denis"),
    Fixture(2, "Ci & Jens", "Chrissy", 52, 8, "pool", "sat", "09 september", "12:00", "Stade Geoffroy-Guichard, Saint-Etienne" ),
    Fixture(3, "Martine", "Winters", 82, 8, "pool", "Sat", "09 september", "14:30", "Stade de Bordeaux, Bordeaux"),
    Fixture(4, "Sonny", "Julian", 35, 15, "pool", "sat", "09 september", "17:00", "Stade de France, Saint-Denis"),
    Fixture(5, "Bethan", "Louise", 27, 10, "pool", "sat", "09 september", "20:00", "Stade de Marseille, Marseille"),
    Fixture(6, "Josie", "Callum", 42, 12, "pool", "sun", "10 september", "12:00", "Stadium de Toulouse, Toulouse"),
    Fixture(7, "Ian", "George", 18, 3, "pool", "sun", "10 september", "16:45", "Stade de Marseille, Marseille"),
    Fixture(8, "Jack", "Connor", 32, 26, "pool", "sun", "10 september", "20:00", "Stade de Bordeaux, Bordeaux"),
    Fixture(9, "Claire", "Naomi", 27, 12, "pool", "thur", "14 september", "20:00", "Stade Pierre-Mauroy, Lille"),
    Fixture(10, "Gramma", "Chrissy", null, null, "pool", "fri", "15 september", "20:00", "Stadium de Toulouse, Toulouse"),
    Fixture(11, "Joe", "Callum", null, null, "pool", "sat", "16 september", "14:00", "Stade de Bordeaux, Bordeaux"),
    Fixture(12, "Jack", "Andrea", null, null, "pool", "sat", "16 september", "16:45", "Stade de Nice, Nice"),
    Fixture(13, "Martine", "Povey", null, null, "pool", "sat", "16 september", "20:00", "Stade de la Beaujoire, Nantes"),
    Fixture(14, "Ian", "Winters", null, null, "pool", "sun", "17 september", "14:00", "Stade de Bordeaux, Bordeaux"),
    Fixture(15, "Sonny", "Connor", null, null, "pool", "sun", "17 september", "16:45", "Stade Geoffroy-Guichard, Saint-Etienne"),
    Fixture(16, "Bethan", "Josie", null, null, "pool", "sun", "17 september", "20:00", "Stade de Nice, Nice"),
    Fixture(17, "Ci & Jens", "Naomi", null, null, "pool", "wed", "20 september", "16:45", "Stade de Nice, Nice"),
    Fixture(18, "Claire", "Chrissy", null, null, "pool", "thur", "21 september", "20:00", "Stade de Marseille, Marseille"),
    Fixture(19, "Louise", "Joe", null, null, "pool", "fri", "22 september", "16:45", "Stade Geoffroy-Guichard, Saint-Etienne"),
    Fixture(20, "Julian", "Andrea", null, null, "pool", "sat", "23 september", "13:00", "Stadium de Toulouse, Toulouse"),
    Fixture(21, "Bethan", "Callum", null, null, "pool", "sat", "23 september", "16:45", "Stade Pierre-Mauroy, Lille"),
    Fixture(22, "Ian", "Martine", null, null, "pool", "sat", "23 september", "20:00", "Stade de France, Saint-Denis"),
    Fixture(23, "George", "Povey", null, null, "pool", "sun", "24 september", "16:45", "Stade de Nice, Nice"),
    Fixture(24, "Jack", "Sonny", null, null, "pool", "sun", "24 september", "20:00", "OL Stadium, Lyon"),
    Fixture(25, "Naomi", "Chrissy", null, null, "pool", "wed", "27 september", "16:45", "OL Stadium, Lyon"),
    Fixture(26, "Josie", "Joe", null, null, "pool", "thur", "28 september", "20:00", "Stadium de Toulouse, Toulouse"),
    Fixture(27, "Gramma", "Ci & Jens", null, null, "pool", "fri", "29 september", "20:00", "OL Stadium, Lyon"),
    Fixture(28, "Louise", "Callum", null, null, "pool", "sat", "30 september", "14:00", "Stade de la Beaujoire, Nantes"),
    Fixture(29, "Connor", "Julian", null, null, "pool", "sat", "30 september", "16:45", "Stade de Bordeaux, Bordeaux"),
    Fixture(30, "George", "Winters", null, null, "pool", "sat", "30 september", "20:00", "Stade Pierre-Mauroy, Lille"),
    Fixture(31, "Sonny", "Andrea", null, null, "pool", "sun", "01 october", "16:45", "Stade Geoffroy-Guichard, Saint-Etienne"),
    Fixture(32, "Ian", "Povey", null, null, "pool", "sun", "01 october", "20:00", "Stade de Marseille, Marseille"),
    Fixture(33, "Gramma", "Naomi", null, null, "pool", "thur", "05 october", "20:00", "OL Stadium, Lyon"),
    Fixture(34, "Claire", "Ci & Jens", null, null, "pool", "fri", "06 october", "20:00", "OL Stadium, Lyon"),
    Fixture(35, "Jack", "Julian", null, null, "pool", "sat", "07 october", "14:00", "Stade de la Beaujoire, Nantes"),
    Fixture(36, "Bethan", "Joe", null, null, "pool", "sat", "07 october", "16:45", "Stade Pierre-Mauroy, Lille"),
    Fixture(37, "Martine", "George", null, null, "pool", "sat", "07 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(38, "Josie", "Louise", null, null, "pool", "sun", "08 october", "12:00", "Stade de la Beaujoire, Nantes"),
    Fixture(39, "Povey", "Winters", null, null, "pool", "sun", "08 october", "16:45", "Stade Pierre-Mauroy, Lille"),
    Fixture(40, "Connor", "Andrea", null, null, "pool", "sun", "08 october", "20:00", "Stadium de Toulouse, Toulouse"),
    Fixture(41, "Winner Pool C", "Runner-Up Pool D", null, null, "Quarter Final 1", "sat", "14 october", "16:00", "Stade de Marseille, Marseille"),
    Fixture(42, "Winner Pool B", "Runner-Up Pool A", null, null, "Quarter Final 2", "sat", "14 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(43, "Winner Pool D", "Runner-Up Pool C", null, null, "Quarter Final 3", "sun", "15 october", "16:00", "Stade de Marseille, Marseille"),
    Fixture(44, "Winner Pool A", "Runner-Up Pool B", null, null, "Quarter Final 4", "sun", "15 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(45, "Winner QF1", "Winner QF2", null, null, "Semi Final 1", "fri", "20 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(46, "Winner QF3", "Winner QF4", null, null, "Semi Final 2", "sat", "21 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(47, "Loser SF1", "Loser SF2", null, null, "Bronze Final", "fri", "27 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(48, "Winner SF1", "Winner SF2", null, null, "Final", "sat", "28 november", "20:00", "Stade de France, Saint-Denis")


]

function getFixture(id){
    return FIXTURES.filter(fixture => fixture['id']==id)[0];
}