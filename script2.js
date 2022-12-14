// exercise 1
let breakfast = ['eggs', 'salad', 'tea']
let launch = ['donnar wrap', 'pizaa']

breakfast.push('coffee')
breakfast.unshift('pizza')

console.log(breakfast)

// exercise 2
let arr = ['eggs', 'salad', 'tea']
function arrayPara(arr) {
  return arr[arr.length - 1]
}

console.log(arrayPara(arr))

// exercise 3
var musicgenre = ['rock', 'Rap']
var added = musicgenre.push('Jazz')
var halve = (musicgenre.length - 1) / 2
musicgenre.splice(halve, 1, 'classical')

console.log(musicgenre)

// exercise 4

var sorted = breakfast.sort()

console.log(sorted)

// exercise 5

for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// exercise 6

var tasks = ['house1', 'house2', 'house3']

for (let i = 0; i < tasks.length; i++) {
  console.log(`Task ${i + 1}: ${tasks[i]} `)
  // return
}

// exercise 7

// let i = 3

// while (i) {
//   alert(i--)
// }

// 1 is the last item alerted

// ###########exercise 8 ##################
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

// ##################Loop exercise #####################
let x = 3
while (x) {
  console.log(`number ${x--}!`)
}

// ################# Loops Sum Exercise ####################
var arr1 = [2, 3, 5, 7]
function sumInput(arr1) {
  let total = 0
  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i]
  }
  console.log(total)
  return total
}

function sumInput(arr1) {
  let total = 0
  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i]
  }
  let aveTotal = total / 2
  console.log(aveTotal)
  return aveTotal
}

sumInput(arr1)

// ##############String || exercise ###############################
var str = 'a sentence should finish with full stop'
function addFullStop(str) {
  console.log(str.endsWith('.') ? str : str + '.')
}

addFullStop(str)

// ####String 2 capitalize #######################################
const str2 = 'ermias'
function capitalize(p) {
  if (typeof p !== 'string') {
    console.log('This is not a string')
    return
  }
  console.log(p.toUpperCase())
  // return
}

capitalize(str2)

// ###forEach exercise1: favourite foods #########################
var foods = ['eggs', 'burger', 'coffee']

foods.forEach(listFood)

function listFood(items) {
  console.log(items)
}

// ##### forEach exercise2: sum ##################################

const arr3 = [3, 5, 4, 1, 7]
let total = 0
arr3.forEach((item) => {
  total += item
})

console.log(total)

//  forEach product:

arr3.forEach((item) => {
  let product = item * item
  console.log(product)
})
// function product(arr3) {
//   for (let i = 0; i < arr3.length; i++) {
//     console.log(arr3[i] * arr3[i])
//   }
// }

// product(arr3)

// ###forEach student grades:###########################################
const studentGrades = [70, 20, 53, 64, 78, 60, 32]

let passedArr = []
studentGrades.forEach((item) => {
  if (item >= 50) {
    passedArr.push(item)
  }
})

console.log(passedArr)
console.log('~~~~~~~~~~~~~~~~~~~~~')

// let passArr = []
// function passedGrades(studentGrades) {
//   for (let i = 0; i < studentGrades.length; i++) {
//     if (studentGrades[i] >= 50) {
//       passArr.push(studentGrades[i])
//     }
//   }
//   console.log(passArr)
//   // return passedArr
// }

// passedGrades(studentGrades)

// ###join Exercise 1: names#######################

const students = ['mariak', 'daniel', 'patric']

let stud = students.join(' ')
console.log(stud)
console.log(typeof stud)

// join Exercise2: to csv
function toCSV(s) {
  let csv = s.join(', ')
  console.log(csv)
  return csv
}

toCSV(students)
