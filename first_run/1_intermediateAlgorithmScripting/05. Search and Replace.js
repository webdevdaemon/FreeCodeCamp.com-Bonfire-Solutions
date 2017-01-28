// Search and Replace

// My Solution::

function myReplace(str, before, after) {
    var edited = after;
    var beforeArray = before.split("");
    var afterArray = after.split("");
    if (beforeArray[0] == beforeArray[0].toUpperCase()) {
        var charUp = afterArray[0].toUpperCase();
        afterArray.splice(0, 1, charUp);
        edited = afterArray.join("");
    }
    return str.replace(before, edited);
}
