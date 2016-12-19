function work() {
    var currentLocation = {x: 0, y: 0};
    var tripHistory = [];
    calculateHousesWithOnePresent(document.getElementById('input').value);
    console.log('triphistory achieved');
    document.getElementById('output').innerHTML = uniq(tripHistory).length;

    function calculateHousesWithOnePresent(input) {
        for (var i = 0; i < input.length; i++) {
            goToNextHouse(input[i]);
        }
    }

    function goToNextHouse(move) {
        switch (move) {
            case '^':
                currentLocation.y++;
                break;
            case '>':
                currentLocation.x++;
                break;
            case 'v':
                currentLocation.y--;
                break;
            case '<':
                currentLocation.x--;
                break;
        }
        tripHistory.push(currentLocation.x + 'x' + currentLocation.y);
    }

    function uniq(a) {
        var seen = {};
        return a.filter(function (item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }
}