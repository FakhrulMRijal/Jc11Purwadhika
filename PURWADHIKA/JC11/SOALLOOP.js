
let hari = 30
let jumlahPermen = 0

for(var i = 1; i <= 30; i++){
    if(i % 2 == 0){
        console.log('Hari ke-' + i + ' Andi mendapatkan permen ' + 1 )
        jumlahPermen += 1
    } else {
        console.log('Hari ke-' + i + ' Andi mendapatkan permen ' + 2 )
        jumlahPermen += 2
    }
}

console.log(' Jumlah permen andi adalah ' + jumlahPermen)
