// [INSTRUCTIONS]
// 1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
//    akan memilih harga yang paling mahal.
// 2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
//    maka dia akan pulang ke rumah.
// 3. Harga jenis kursi konser, antara lain:
//   - VVIP 1000000
//   - VIP  700000
//   - Reguler 300000
// 4. Apabila membeli tiket, tampilkan dalam format [nama]-[jenis kursi] dan [kembalian]

// [RULES]
// 1. Hanya tulis Algoritma saja
// */

// type here
// var uang = 150000
// var VVIP = 100000
// var nama = 'Arul'
// var kembalian = uang-VVIP

// if(uang > VVIP){
//     console.log([nama] + ' - ' + [VVIP.toLocaleString()] + ' - ' + [kembalian.toLocaleString()])
// }

// 2. /*
  ///////
//   setrika
//   ///////

//   Kalian akan membuat aplikasi setrika yang mana akan memilah pakaian yang bisa di setrika
//   ataupun tidak, kemudian apabila pakaian memiliki panjang 20 cm lebih maka pakaian
//   akan dilipat.
  
//   [INSTRUCTIONS]
//     1. Jika tidak ada jenisPakaian, maka tampilkan "Tentukkan pakaian yang ingin Anda setrika".
//        Jika ada jenisPakaian lanjut ke step 2.
//     2. Jika pakaianPerluDisetrika bernilai salah, maka tampilkan
//        "Silahkan pilih pakaian yang ingin disetrika". Jika pakaianPerluDisetrika bernilai benar,
//        maka lanjut ke step 3.
//     3. Jika jenisPakaian bernilai "baju" atau "celana" dan panjang lebih dari 20, maka tampilkan
//        "Pakaian sudah disetrika dan dilipat, Terima Kasih". Jika tidak tampilkan "Pakaian sudah
//        disetrika, Terima Kasih".

//   [RULES]
//     1. Dilarang menggunakan built in function apapun.
// */

// var jenisPakaian = 'baju'
// var pakaianPerluDisetrika = true
// var panjangPakaian = 25

// if(jenisPakaian === 'baju' || jenisPakaian === 'celana'){
//     console.log('Step 2')
// } else {
//     console.log('Tentukkan pakaian yang ingin anda setrika')
// }

// if(pakaianPerluDisetrika === true){
//     console.log('step 3')
// } else {
//     console.log('Silahkan pilih pakaian yang ingin disetrika')
// }

// if(panjangPakaian > 20){
//     console.log('Pakaian sudah disetrika dan dilipat, Terima Kasih')
// } else {
//     console.log('Pakaian sudah disetrika dan dilipat')
// }

// 3. /*
  /////////////
//   pyramidNumber
//   /////////////

//   pyramidNumber adalah suatu program untuk menampilkan piramida.
  
//  // ----------
//   EXAMPLE 1:
//   ----------
//   [INPUT]
//     var max = 5

//   [OUTPUT]
//     1
//     22
//     333
//     4444
//     55555

//   ----------
//   EXAMPLE 2:
//   ----------
//   [INPUT]
//     var max = 1
//   [OUTPUT]
//     1

//   [RULES]
//     1. Dilarang menggunakan built in function apapun.
//     2. Asumsi nilai minimum max adalah 1.
// */

var max = 5
var total = 1
for(var i = 1; i <= max; i++){
    for(var j = 1; i <= j; j++){
        console.log(total)
    }
    console.log
}



// code here

