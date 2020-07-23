const BinarySearchTree = require('./BinarySearchTree');

/*
  1. How many searhes
    a) given [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] array
      seq 1: find middle of entire and compare middle to search value
      seq 2: 11 > 8, so we search through the array of [3, 5, 6, 8]
      seq 3: 5 is the new base and < 8, so we search through the array of [6, 8]
      seq 4: 6 is the new base and < 8, so we return 8 as the last value
    
    b) given [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
      seq 1: find middle of entire and compare middle to search value
      seq 2: 12 > 16, so we search through the array of [14, 15, 17, 18]
      seq 3: 17 is the new base and > 16, so we search through the array of [14, 15]
      seq 4: 15 is the new base and < 16, but when we iterate to the next call,
              the start will now be > end, so it wil return -1 signaling the value
              doesnt't exist.
*/

// 3. Find a book
/* To find a book with the dewey decimal system you'd use the  */

function findDeweyDecimal(library, deweyIndex, title) {
  if (deweyIndex === library.key && library.value === title) {
    return library.value;
  }
  if (library.left.key !== deweyIndex) {
    return findDeweyDecimal(library.left, deweyIndex, title)
  }
  if (library.right.key !== deweyIndex) {
    return findDeweyDecimal(library.right, deweyIndex, title)
  }
}

// 4. Searching in a BST
/*
  a) this would be the reversal of the pre-order 79, 89, 27, 19, 14, 15, 25, 35
  a) this would be the reversal of the pre-order 8, 10, 11, 9, 6, 7, 5
*/

// 5. Implement different tree traversals

function main() {
  const tree = new BinarySearchTree();
  let value = 0;
  const testArray = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

  testArray.forEach(key => tree.insert(key, value++))

  console.log(tree.preOrder())
  // console.log(tree.inOrder())
  // console.log(tree.postOrder())
}

// 6. Find the next commanding officer

function findOfficer(officerTree) {
  return officerTree.preOrder();
}
// This will return a list in order of who'll be next in line

// 7. Max profit

function maxProfit(prices) {
  let low = null;
  let high = null;

  for(let i = 0; i < prices.length; i++) {
    if (!low || prices[i] < low) low = prices[i]
    if (prices[i] > high) high = prices[i]
  }

  return `The max profit you could make would be $${high - low}`
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));