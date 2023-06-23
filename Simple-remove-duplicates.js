/*
Remove the duplicates from a list of integers, 
keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]
  remove the 3 at index 0
  remove the 4 at index 1
  remove the 3 at index 3
Expected output: [4, 6, 3]
*/


//Solution

function solve(arr) {
  return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}

// or

const solve = arr => [...new Set(arr.reverse())].reverse()

// or

function solve(arr) {
  let a=[];
  let ar=arr.reverse();
  for (let i = 0; i < ar.length; ++i)
    if (a.indexOf(ar[i])==-1)
      a.push(ar[i]);
  return a.reverse();
}