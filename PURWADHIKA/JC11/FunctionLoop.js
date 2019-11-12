function ganjilGenap(countDays){
    let total = 0;
    for(i =1; i <= countDays; i++){
        if(i % 2 === 0){
            const getCandy = 1;
            total += getCandy
            console.log(`hari ke-${i} Andi mendapatkan permen ${getCandy}`)
        } else {
            const getCandy = 2;
            total += getCandy
            console.log(`hari ke-${i} Andi mendapatkan permen ${getCandy}`)
        }
    }

    return `Jumlah permen andi adalah ${total}`;
    
}

console.log(ganjilGenap(60));
