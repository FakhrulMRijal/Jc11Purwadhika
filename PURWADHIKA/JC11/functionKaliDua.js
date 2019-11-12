// bikin sebuah function kaliDua
// parameter terima array
// console.log(kaliDua([1, 2, 3]))

// function kaliDua(array) {
//     var output = []
//     for(var i = 0; i < array.length; i++){
//         output.push(array[i]+2)
        
//     }
//     return output
// }

// console.log(kaliDua([1, 2, 3]))

// bikin function menerima array i+1number[1, 2, 3, 4, 5]

// function ggArray(array){
//     var output = []
//    for(i = 0; i < array.length; i++){
//        if(array[i] % 2 === 0){
//            output.push(true)
//        } else {
//            output.push(false)
//        }
//    }
//    return output

// }
// console.log(ggArray(1, 2, 3, 4, 5))

// buat sebuah function tambahLoop()
// tambahLoop([1, 2, 3, 4])
//10
// tambahLoop([1, 2])
// 3
// tambahLoop([3, 6, 7])
// 16

function tambahLoop(loop){
    var output = 0
    for(var i = 0; i < loop.length; i++){
        output += loop[i]
    }
    return output
}

console.log(tambahLoop([1, 2, 3, 4]))
console.log(tambahLoop([1, 2]))
console.log(tambahLoop([3, 6, 7]))
console.log(tambahLoop([1, 3, 3]))