var a = 0
// while( a < 10){
//     console.log(a);
//     a++
// }

// do{
//     console.log('do while')
// }while(a < 0)

// for Lmpat satu

// for(var a = 0; a <= 10; a++){
//     console.log('NOmor urut ' + a)
// }

// for Lompat dua

// for(var a = 0; a <= 20; a+=2){
//     console.log('Nomor urut ' + a)
// }

// Bintang 12345

var output = ''

// for(var a = 0; a <= 5; a++){
//     output += '*'
//     console.log(output)
// }

// Bintang 5 satu baris

    // for(var a = 0; a < 5; a++){
    //     output += '*'
    // }
    // console.log(output)
// 
//  I itu baris J itu deretan

// for(var i = 0; i < 10; i++) {
//        for(var j = 1; j < i; j++){
//            output += '*'
//        }
//        output += '\n'
//    }
//    console.log(output)

for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j+=2){
        output += '*'
    }
    console.log(output)

}
   