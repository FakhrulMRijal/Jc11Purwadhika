function angkaPrima(angka){
   if (angka === 1){
       return false
   }
   var prima = true
   
   for(var i = 2; i < angka; i++){
       if(angka % i == 0){
           prima = false
       } 
   }
   return prima
}

console.log(angkaPrima(3))
console.log(angkaPrima(6))
console.log(angkaPrima(11))
console.log(angkaPrima(15))
console.log(angkaPrima(50))