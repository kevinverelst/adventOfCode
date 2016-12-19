function work() {
    loopPresents(document.getElementById('input').value);
}

function loopPresents(input) {
    var total = 0;
    var ribbon = 0;
    var presentArray = input.split(" ");

    for (var i = 0; i < presentArray.length; i++) {
        var present = presentArray[i].split("x");
        total += calculatePresentDimensions(present[0], present[1], present[2]);
        ribbon += calculateRibbon(present);
    }
    document.getElementById('output').innerHTML = total;
    document.getElementById('ribbon').innerHTML = ribbon;
}

function calculatePresentDimensions(length, width, height) {
    var dimensions = [2 * length * width, 2 * width * height, 2 * height * length];
    return dimensions[0] + dimensions[1] + dimensions[2] + dimensions[indexOfSmallest(dimensions)] / 2;
}

function indexOfSmallest(a) {
    return a.indexOf(Math.min.apply(Math, a));
}

function calculateRibbon(a) {
    a.sort(function (a, b) {
        return a - b
    });
    var test = parseInt(a[0]) + parseInt(a[0]) + parseInt(a[1]) + parseInt(a[1]);
    var cubic = (a[0] * a[1] * a[2]);
    return  test + cubic;
}