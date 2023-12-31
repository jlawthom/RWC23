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
    Fixture(10, "Gramma", "Chrissy", 71, 3, "pool", "fri", "15 september", "20:00", "Stadium de Toulouse, Toulouse"),
    Fixture(11, "Joe", "Callum", 43, 10, "pool", "sat", "16 september", "14:00", "Stade de Bordeaux, Bordeaux"),
    Fixture(12, "Jack", "Andrea", 28, 8, "pool", "sat", "16 september", "16:45", "Stade de Nice, Nice"),
    Fixture(13, "Martine", "Povey", 59, 16, "pool", "sat", "16 september", "20:00", "Stade de la Beaujoire, Nantes"),
    Fixture(14, "Ian", "Winters", 76, 0, "pool", "sun", "17 september", "14:00", "Stade de Bordeaux, Bordeaux"),
    Fixture(15, "Sonny", "Connor", 15, 22, "pool", "sun", "17 september", "16:45", "Stade Geoffroy-Guichard, Saint-Etienne"),
    Fixture(16, "Bethan", "Josie", 34, 12, "pool", "sun", "17 september", "20:00", "Stade de Nice, Nice"),
    Fixture(17, "Ci & Jens", "Naomi", 38, 17, "pool", "wed", "20 september", "16:45", "Stade de Nice, Nice"),
    Fixture(18, "Claire", "Chrissy", 96, 0, "pool", "thur", "21 september", "20:00", "Stade de Marseille, Marseille"),
    Fixture(19, "Louise", "Joe", 19, 10, "pool", "fri", "22 september", "16:45", "Stade Geoffroy-Guichard, Saint-Etienne"),
    Fixture(20, "Julian", "Andrea", 18, 18, "pool", "sat", "23 september", "13:00", "Stadium de Toulouse, Toulouse"),
    Fixture(21, "Bethan", "Callum", 71, 0, "pool", "sat", "23 september", "16:45", "Stade Pierre-Mauroy, Lille"),
    Fixture(22, "Ian", "Martine", 8, 13, "pool", "sat", "23 september", "20:00", "Stade de France, Saint-Denis"),
    Fixture(23, "George", "Povey", 45, 17, "pool", "sun", "24 september", "16:45", "Stade de Nice, Nice"),
    Fixture(24, "Jack", "Sonny", 40, 6, "pool", "sun", "24 september", "20:00", "OL Stadium, Lyon"),
    Fixture(25, "Naomi", "Chrissy", 36, 26, "pool", "wed", "27 september", "16:45", "OL Stadium, Lyon"),
    Fixture(26, "Josie", "Joe", 28, 22, "pool", "thur", "28 september", "20:00", "Stadium de Toulouse, Toulouse"),
    Fixture(27, "Gramma", "Ci & Jens", 96, 17, "pool", "fri", "29 september", "20:00", "OL Stadium, Lyon"),
    Fixture(28, "Louise", "Callum", 59, 5, "pool", "sat", "30 september", "14:00", "Stade de la Beaujoire, Nantes"),
    Fixture(29, "Connor", "Julian", 17, 12, "pool", "sat", "30 september", "16:45", "Stade de Bordeaux, Bordeaux"),
    Fixture(30, "George", "Winters", 84, 0, "pool", "sat", "30 september", "20:00", "Stade Pierre-Mauroy, Lille"),
    Fixture(31, "Sonny", "Andrea", 34, 14, "pool", "sun", "01 october", "16:45", "Stade Geoffroy-Guichard, Saint-Etienne"),
    Fixture(32, "Ian", "Povey", 49, 18, "pool", "sun", "01 october", "20:00", "Stade de Marseille, Marseille"),
    Fixture(33, "Gramma", "Naomi", 73, 0, "pool", "thur", "05 october", "20:00", "OL Stadium, Lyon"),
    Fixture(34, "Claire", "Ci & Jens", 60, 7, "pool", "fri", "06 october", "20:00", "OL Stadium, Lyon"),
    Fixture(35, "Jack", "Julian", 43, 19, "pool", "sat", "07 october", "14:00", "Stade de la Beaujoire, Nantes"),
    Fixture(36, "Bethan", "Joe", 18, 17, "pool", "sat", "07 october", "16:45", "Stade Pierre-Mauroy, Lille"),
    Fixture(37, "Martine", "George", 36, 14, "pool", "sat", "07 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(38, "Josie", "Louise", 27, 39, "pool", "sun", "08 october", "12:00", "Stade de la Beaujoire, Nantes"),
    Fixture(39, "Povey", "Winters", 45, 24, "pool", "sun", "08 october", "16:45", "Stade Pierre-Mauroy, Lille"),
    Fixture(40, "Connor", "Andrea", 23, 24, "pool", "sun", "08 october", "20:00", "Stadium de Toulouse, Toulouse"),
    Fixture(41, "Jack", "Louise", 17, 29, "Quarter Final 1", "sat", "14 october", "16:00", "Stade de Marseille, Marseille"),
    Fixture(42, "Martine", "Gramma", 24, 28, "Quarter Final 2", "sat", "14 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(43, "Bethan", "Connor", 30, 24, "Quarter Final 3", "sun", "15 october", "16:00", "Stade de Marseille, Marseille"),
    Fixture(44, "Claire", "Ian", 28, 29, "Quarter Final 4", "sun", "15 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(45, "Louise", "Gramma", null, null, "Semi Final 1", "fri", "20 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(46, "Bethan", "Ian", null, null, "Semi Final 2", "sat", "21 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(47, "Loser SF1", "Loser SF2", null, null, "Bronze Final", "fri", "27 october", "20:00", "Stade de France, Saint-Denis"),
    Fixture(48, "Winner SF1", "Winner SF2", null, null, "Final", "sat", "28 november", "20:00", "Stade de France, Saint-Denis")


]

function getFixture(id){
    return FIXTURES.filter(fixture => fixture['id']==id)[0];
}