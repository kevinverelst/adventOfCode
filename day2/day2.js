function work() {
    document.getElementById('output').innerHTML = loopPresents(document.getElementById('input').value);
}

function loopPresents(input) {
    var total = 0;
    var presentArray = input.split(" ");

    for (var i = 0; i < presentArray.length; i++) {
        var present = presentArray[i].split("x");
        total += calculatePresentDimensions(present[0], present[1], present[2]);
    }
    return total;
}

function calculatePresentDimensions(length, width, height) {
    var dimensions = [2 * length * width, 2 * width * height, 2 * height * length];
    return dimensions[0] + dimensions[1] + dimensions[2] + dimensions[indexOfSmallest(dimensions)] / 2;
}

function indexOfSmallest(a) {
    return a.indexOf(Math.min.apply(Math, a));
}