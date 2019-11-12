// var stringToNumber = function(str){
//     // put your code here
//     var output = parseInt(str)
//     for(var i = 0; i < str.length; i++){
//         output 
//     }
//     return output;
//   }

//   console.log(stringToNumber("1234"))


// function solution(str){
//     var output = str.split("").reverse().join("")
//     return output
// }

// console.log(solution("Hello World"))

// function stringToArray(string){

// 	// code code code
// var output = [string.substr(0, 5) + ",' " + string.substr(6, 11)] 
// for(var i = 0; i < string.length; i++){
//   output 
// }
// return output
// }

// console.log(stringToArray("Robin Singh"))

// function removeChar(str){
//   //You got this!
//   const totalLength = str.length;
//   const newStr = str.substring(1, totalLength - 1)
//   return newStr
//   };

//  console.log(removeChar('eloquen'))
 
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // code goes here
//   var output = laLigaGoals + copaDelReyGoals + championsLeagueGoals
//   return output


// }

// console.log(goals(0, 0, 0))
// console.log(goals(45, 10, 5))

// function noSpace(x){
//   var output = x.split(' ').join('')
//   return output
// }

// console.log(noSpace('example test'))

// function stringToArray(string){

//   // code code code
//   var output = string.split(" ")
//   return output
  
// }

// console.log(stringToArray("Robin Singh"))

// function makeUpperCase(str) {
//   // Code here
//   var output = str.toUpperCase()
//   return output
// }

// console.log(makeUpperCase('Hello'))

// function wordsToMarks(string){
//   //your code here
//   var total = 0
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'

//   for(var i = 0; i < string.length; i++){
//     for(var j = 0; j < alphabet.length; j++){
//       if(string[i] === alphabet[j]){
//         total += j+1
//       }
//     }
//   }
//   return total
// }

// console.log(wordsToMarks('attitude'))

// var countSheep = function (num){
//   //your code here
//   var hasil = ''
//   for(var i = 1; i <= num; i++){
//     hasil += i.toString() + 'sheep...'
//   }
//   return hasil
  
// }

// console.log(countSheep(3))

// function monkeyCount(n) {
//   // your code here
//   var total = []
//   for(var i = 1; i <= n; i++){
//     total.push(i)
//   }
//   return total
//   }

//   console.log(monkeyCount(5))

  // var asterisk = ''
  // for(var i = 0; i < 3; i++){
  //   for(var j = 0; j < 3; j++){
  //     asterisk += '*'
  //   }
  //   asterisk += '\n'
  //   return asterisk
  // }
  
//   function kotak(persegi){
//     var kotak = "";
//     for(var i = 0; i < persegi; i++){
//         for(var j = 0; j < persegi; j++){
//             kotak += "* ".slice(0, 2)
//         }
//         kotak += "\n "
//     }
//     return kotak
// }

// console.log(kotak(3))

// function sortByLength (array) {
//     // Return an array containing the same strings, ordered from shortest to longest
//     var output = array.sort(function(a, b){
//         return a.length - b.length
//     })
//     for(i = 0; i <= array.length-1; i++){
//         output 
//     }

//     return output
//   };

//   console.log(sortByLength(["Beg", "Life", "I", "To"]))

// function incrementString (strng) {
//     // return incrementedString
//     var output = ''
//     for(i = 0; i < strng; i++){
//         output += parseInt(strng.toString(strng))  + 1
//     }
//     return output
//   }

//   console.log(incrementString('foo'))

// function reverseWords(str) {
//     // Go for it
//    output = str.split('').reverse().join('').split(' ').reverse().join(' ')
//    return output
//   }
//   console.log(reverseWords('the apple'))

// function factorial(n){
// if(n == 1 || n == 2){
//     return n
// } else if(n == 0){
//     return n+1
// }

// else {
//     return n*2
// }
// }

// console.log(factorial(1))
// console.log(factorial(3))

// function multiplyAll(num){
// var total = 0
// for(var i = 0; i < num.length; i++){
//     total += num.push()*2
// }
// return total
// }

// console.log(multiplyAll([1, 2, 3]))
// console.log(multiplyAll([1, 2, 3]))
// console.log(multiplyAll([1, 2, 3]))
// console.log(multiplyAll([])

// function greet (name, owner) {
//     // Add code here
//     if(name === owner){
//         return 'Hello Boss'
//     } else {
//         'Hello guest'
//     }
//   }

//   console.log(greet('Daniel ', 'Daniel '))
//   console.log(greet('greg ', 'Daniel'))

// function arrayPlusArray(arr1, arr2) {
//  //something went wrong
//     var total = 1
//     var gabung = arr1.concat(arr2).reduce((a, b)=> a+b)
//     return gabung
//   }

//   console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

// function reverseLetter(str) {
//     //coding and coding..
//     var alphabet = str.split('').reverse().join('').replace(/[^A-Za-z]/gi, '')

//     var output = alphabet
//     return output
    
    
//     }

//   console.log(reverseLetter('krishan'))
//   console.log(reverseLetter('ab23c'))

// function flattenAndSort(array) {
//     // Good luck, brave code warrior!
//   var array = array.sort()
//   return array
//   }

//   console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))

// function calculate(str) {
//   //your code here...
//   var output = 0
//   for(var i = 0; i < str.length; i++){
//     if('plus' === '+' ){
//      str += output++ 
//     } else {
//       str -= output--
//     }
//   }
//   return str;
//   }



// function maxNumber(n){
//   //your code here
//   var output = ('' + n).split('').sort((a,b)=>b-a).join('')*1

//   return output
// }

// console.log(maxNumber(213))

// function descendingOrder(n){
//   //...
//   var output = ('' + n).split('').sort((a, b) => b-a).join('')*1
//   return output
// }

// console.log(descendingOrder(23451))
// function mode(list){

// // var empty = []
// // i = 0
// // max = 0
// // while (i<list.length){

// //    if (list[i]==list[i+1]){
// //        empty = list[i] 
// //    i += 1
// //     }else{
// //       i +=1
// //       }

// //  }
// //  return empty
// // }

// // console.log(mode([1,2,3,4,5,6,7,7]))
// // console.log(mode([2,1,3,3,3,2,1,5]))



// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// console.log(XO('xo'));
// console.log(XO("xxOo"));
// console.log(XO("xxxm"))

function number(array){
  //your awesome code here
  var output = []
  for(var i = 0; i < array.length; i++){
    if(array[i] === 0){
       output
    } else {
      output += 'i' + ': ' + array[i]
    }
  }
  return output
}

console.log(number(["a", "b", "c"]))
console.log(number([]))

// function accum(s) {
//   // your code
//   var output = s.toLowerCase()
//   for(var i=0; i < output.length; i++){
//     console.log(output[i])
//     output[i] = output[i].toUppercase + output[i].repeat(i)
//   }
//   return output[i].join('-')
// }

// console.log(accum('abcd'))

// function accum(s) {
// 	let letters = s.toLowerCase().split('')
// 	console.log(letters)
//   for(let i = 0; i < letters.length; i++) {
//     console.log(letters[i])
//     letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
//     console.log(letters[i])
//   }
//   return letters.join('-')
// }

// accum('eMlet')