// var num = 20
// for(var i = 1; i <= num; i ++ ) {
//     if(i % 15 === 0){
//         console.log('FizzBuzz')
//     } else if(i % 3 === 0){
//         console.log('Fizz')
//     } else if(i % 5 === 0){
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

// var fibo = 6

// for(var i = 1; i < fibo; i++){
//     if(i < 3){
//         return 1
//     } else{
//         return fibo(i - 1) + fibo(i-2)
//     }
// }


// function fib(num){
//     let output = [0, 1]
//     for(let i = 0; i < num + 1; i++){
//         output.push
//     }
//     return output
// }

//  console.log(fib(10))

// function palindrome(words){
//     if(words.length > 1){
//         console.log('false')
//     } else {
//         console.log('true')
//     }
// }

// console.log(palindrome('Race car'))
// function sortArr(reverseArray){
//     var output = reverseArray.sort(function(a, b){
//         return b-a
//     })
//     return output
// }


// console.log(sortArr([1, 2, 3, 4, 5, 6, 7, 8]))

// function revWord(reverseWords){
//     var output = reverseWords.split(' ').reverse().join(' ').split('').reverse().join(' ')
//     return output
// }

// console.log(revWord('Hai aku lintang'))

// function caesarChiper(words, number){
//     var output = words.split('').join('')
//     return output
// }

// function minus(num){
//     var output = []
//     for(var i = 0; i < num.length; i++){
//        if(num[i] < 0) {
//            output.push(Math.abs(num[i]))
//        } else {
//            output.push(-(num[i]))
//        }
//     }
//     // var total = 0
//     // for(var i = 1; i < num; i++){
//     //     if(output === output *-1){
//     //         total += output *-1
//     //     }
//     // }
//     return output
// }

// console.log(minus([1, 2, 5, 4, 3]))

// function factorial(num){
//     var output = []
//     if(num === 0 || num === 1){
//         return 1
//     } else {
//         for(var i = num; i>1; i--){
//             output *= i-1
//         }
//     }
// }


// console.log(factorial(5))

// function convert(min){
//     hour = Math.floor(min / 60)
//     minutes = min % 60
//     return hour + ' : ' + minutes
    

// }

// console.log(convert(72))
// console.log(convert(60))

// function remove(words){
//     var output = ''
//     for(var i = 0; i < words.length-1; i++){
//         if(words.length < 5){
//             output = words.substr(1, 2)
//         } else if(words.length > 5){
//             output = words.substr(1, 4)
//         }
//     }

// Tugas

function tengah(str) {
    var x = [];
    var o = [];
    for (var i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === 'x') { 
            x.push(str[i]); 
        } else if (str[i].toLowerCase() === 'o') {
            o.push(str[i]);
        }
    }
    if (x.length == o.length) {
        return true;
    } else {
        return false;
    }
}

console.log(tengah('xoox'))// true
console.log(tengah('xxoo'))// true
console.log(tengah('xooox'))// false

function tengah(str){
    var output = str.split('').join('')
    for(var i = 0; i < str.length; i++){
        if(str.length < 4){
            return output.substr(1,2)
        } else if(str.length < 6){
            return output.slice(1, 2)
        } else if(str.length > 6){
            return output.slice(0, 1)
        }

    }
}

console.log(tengah('tes'))// 'es'
console.log(tengah('testing'))// 't'
console.log(tengah('Billy'))//i

function arr(array, num){
   return array.map(a => a*num)
}

console.log(arr([1, 2, 3], 2))
console.log(arr([3, 6, 1], 3))

    
//     return output
// }

// console.log(remove('lian'))
// console.log(remove('Andi'))
// console.log(remove('Susilo'))