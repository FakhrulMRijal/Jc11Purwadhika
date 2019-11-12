// function wordsToMarks(string){
//     //your code here
//     var total = 1
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'

//     for(var i = 0; i < string.length; i++){
//         for(var j = 0; j < alphabet.length; j++){
//             if(string[i] === alphabet[j]){
//                 total += j+1
//             }
//         }
//     }
//     return total
//   }

//   console.log(wordsToMarks('arul'))

var countSheep = function (num){
    //your code here
    var kata = ''
    for(var i = 1; i <= num; i++){
        kata += i.toString() + ' sheep...'
    }
    return kata
  }

  console.log(countSheep(2))