// 03. Exact Change Complete

var moneyz = [
    { name: "ONE HUNDRED", val: 100.00 },
    { name: "TWENTY", val: 20.00 },
    { name: "TEN", val: 10.00 },
    { name: "FIVE", val: 5.00 },
    { name: "ONE", val: 1.00 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.10 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var drawer = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });
    if (drawer.total === change) {
        return "Closed"; }
    if (drawer.total < change) {
        return "Insufficient Funds"; }
    var change_arr = moneyz.reduce(function(acc, curr) {
        var value = 0;
        while (drawer[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            drawer[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);
    if (change_arr.length < 1 || change > 0) {
        return "Insufficient Funds";
    }
    return change_arr;
}
