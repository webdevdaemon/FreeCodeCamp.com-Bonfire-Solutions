// 07. Make a Person Complete

var Person = function(firstAndLast) {
    var fullName = firstAndLast;
    this.getFirstName = function() {
        return fullName.split(" ")[0]; };
    this.getLastName = function() {
        return fullName.split(" ")[1]; };
    this.getFullName = function() {
        return fullName; };
    this.setFirstName = function(first) { fullName = first + " " + this.getLastName(); };
    this.setLastName = function(last) { fullName = this.getFirstName() + " " + last; };
    this.setFullName = function(full) { fullName = full; };
};
var bob = new Person('Bob Ross');
