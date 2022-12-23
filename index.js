// Higher Order Functions JavaScript
// Here we are going to see the commonly used higher order function in JavaScript and those are foreach(),
//  filter(), map(), and  reduce(). Especially when it comes to ReactJs those HOF are the main concept
//  of it. Let’s start with foreach().

// forEach() is similar to what does the for-loop do. It loops through the array and can make a change
// to the original array.Compare to for-loop it makes the code cleaner  for viewers. forEach() takes three pararmetes
// 1. current value: it is the value of current element in the array
// 2. index(optional): is the current index of the element
// 3. array(optional): is the array of object to which the current element belongs
// Suppose we have an array called
//

numbers = [12, 23, 24, 31]
numbers.forEach((items, index) => {
  console.log(items, index)
  return items, index
})

console.log(numbers)

//  here the function(callback function) makes a call to loop through each numbers for the where the items represent
// the current item while the index refers the current index of element

// filter(): is useful to filter elements as its name implies. it does this filtration by creates a new array behind the seen.
// note that forEach and for-loop does the logic on the original array unlike filter().
// Similar to forEach() the paramaters of filter() are three.
// lets take the numbers array as example  to filter the odd numbers using filter()

let odds = numbers.filter((item) => {
  return item % 2 !== 0
})

console.log(odds)

// Filter() function loops each element of array and based the logic, which is return numbers not divisible to two,
// filter them out to new array.

// map(): used to perform some claculation for each of element of the array but it does it with out affecting the original array.
// it takes a maximum of three argument as the filter() and forEach():
// again take the above numbers array to set example

let multiply = numbers.map((item) => {
  return item * 2
})

console.log(multiply)

// the map() mothed does not mess with the original array the products of 2, as the logic inside it refers,
// been created in a new array. if we console.log() both numbers and mulitply variables one will be as it is the second going to be
// products of two.

// reduce(): suppose we want to caluclate the sum of all element in the array. reduce HOF is a better option on this case.
// reduce does the operation in a new array with out messing up the original and the parameters of it likes as follow
// reduce(function(accumlator, currentValue, index, array, initial))
//  accumlator => accumlated of all the values provides via currentvalue
//  currentvalue => the current elemnt value iterated from the array
//  index   => the index of current element of array
//  array    => the array which the current element array originated from
// initial   => set the value we want to initiate to otherwise will start from 1.

let sum = numbers.reduce((acc, crr) => {
  return acc + crr
})

console.log(sum)

// And this is how it works acc initiate from 12 and the crr starts from 23 when crr proceed to 24, acc sum up the 23 to 12 which made 35.
// then crr proceed to 31 and acc receive 24 which will add to 35 to make 59. then crr has no more to continues while the acc will receive
// 31 which add up to 90. by this time both acc and crr has no value to process so the sum of array is 90.
