// function looping(string, number){
//     var output = ''
//     for(var i = 0; i < number; i++){
//         output += string + number + '\n'
//     }
//     return output

// }

// console.log(looping('lian', 20))
// console.log(looping('Lian'.split('')))

// function accum(string){
//     var output = ''
//     var split = string.split('')
//     for(var i = 0; i < string.length; i++){
//         for(var j = 0; j <= i ; j++){
//             output += split[i]
//         }
//         if(i !== split.length-1){
//             output += '-'
//         }
// }
// return output

// }

// console.log(accum('Lian')) // output L-ii-aaa-nnnn

// function quest(question){
//     var output = ' '
//     var count = 0
//     var split = question.split('')
//     for(var i = 0; i < question.length; i++){
//         if(split[i] == '?'){
//             output += '?'
//             count++
//         }
//     }
//     return count
// }

// console.log(quest('?a?ad??as'))

function hitung(number){
    var output = 0
    var split = number.split('plus')
    for(var i = 0; i < split.length; i++){
        output += parseInt(split[i])
    }
    return  output
}

console.log(hitung('1plus1plus1plus8'))
