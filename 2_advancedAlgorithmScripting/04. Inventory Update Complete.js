// 04. Inventory Update Complete

function updateInventory(arr1, arr2) {
    // Create an empty object
    var obj = {};
    // combine the two input arrays
    var concat = arr1.concat(arr2);
    // map the new array (concat)
    concat.map(function(item) {
        // assign vars to name (string) and qty (number) of each index
        var name = item[1];
        var qty = item[0];
        // if name doesnt match any key in obj, then add name/qty as a key/value pair
        if (!obj[name]) { obj[name] = qty;
            return; }
        // if obj[name] already exists, add current qty to existing qty at obj[name]
        obj[name] = obj[name] + qty;
    });
    // METHOD CHAIN!!! - return the resulting array after...
    // first, list all keys from obj as an array
    // second, sort the array alphabetically
    // third, map the key list, returning a new array of 2-part arrays [qty from obj, current name]
    return Object.keys(obj).sort().map(function(item) {
        return [obj[item], item];
    });
}
