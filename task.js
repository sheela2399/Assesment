var a = (a[0], a[1], a[2]);
b = (b[0], b[1], b[2])

function getMarks(a, b) {
    var alice; bob
    if (a[0] > b[0] || a[1] > b[1] || a[2] > b[2]) {
        console.log("alice = 1");
    } else if (a[0] < b[0] || a[1] < b[1] || a[2] < b[2]) {
        console.log("bob = 1");
    } else if (a[0] == b[0] || a[1] == b[1] || a[2] == b[2]) {
        console.log("It's A Tie");
    }
    return (alice,bob)
} getMarks([1, 2, 3], [3, 2, 1])




