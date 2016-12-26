// Drop it

// My Solution::

function dropElements(arr, func) {
  if (arr.filter(func)[0] === undefined) { return []; }
  // return the output of arr.slice() with a bit of tomfoolery added:
  // 1a: use the zero index of the resulting array after running arr.filter()
  // 1b: use dropElement()'s 2nd arg as arr.filter()'s callback function
  // 2: use the output from arr.indexOf() as the argument of arr.slice()
  // this will output the remainder of arr, from the first suitable value through the end...
  // REGARDLESS of whether the rest of the values passed or failed the 2nd args function
  return arr.slice(arr.indexOf(arr.filter(func)[0]));
}

