function ganjilGenap(totalHari){

    var total = 0;

    for(i = 1; i <= totalHari; i++ ){
        if(i % 2 === 0){
            console.log('Hari ke-' + i + ' Andi mendapatkan permen ' + 1)
            total += 1
        } else {
            console.log('Hari ke-' + i + ' Andi mendapatkan permen ' + 2)
            total += 2
        }
    }
    return 'Jumlah permen Andi ada ' + total

}

console.log(ganjilGenap(30))