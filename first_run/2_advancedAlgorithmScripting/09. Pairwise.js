// 09. Pairwise

function pairwise(arr, arg) {
    var acc = 0;
    var testArr = arr.slice();
    for (var i = 0; i < testArr.length; i++) {
        for (var j = i + 1; j < testArr.length; j++) {
            if (testArr[i] + testArr[j] == arg) {
                acc += i + j;
                testArr[i] = testArr[j] = NaN;
            }
        }
    }
    console.log(acc);
    return acc;
}
