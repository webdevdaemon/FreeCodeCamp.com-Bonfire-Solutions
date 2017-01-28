// Sum All Numbers In a Range

// My Solution::

function sumAll(arr) {
    var num1 = arr[0];
    var num2 = arr[1];
    var numFor = 0;
    var numRev = 0;

    if (num1 < num2) {
        numFor = 0;
        for (var i = num1; i <= num2; i++) {
            numFor += i;
        }
        return numFor;
    } else if (num2 < num1) {
        numRev = 0;
        for (var j = num2; j <= num1; j++) {
            numRev += j;
        }
        return numRev;
    } else {
        return (num1 + num2);
    }
}
