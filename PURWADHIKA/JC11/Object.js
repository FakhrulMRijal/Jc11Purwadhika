// var orang = {
//     nama : 'Lian ',
//     pekerjaan : 'guru',
//     laptop : 'asus',
//     contoh : [1, 2, 3],
//     namaFull : function(){
//         orang.nama + ' 20 ' + orang.laptop
//     }
// } 

// console.log('nama = ' + orang.nama)
// console.log('contoh ' + orang.contoh)
// console.log('pekerjaan = ' + orang.pekerjaan)
// console.log(orang.namaFull)
    

// class orang {
//     constructor(nama, usia, job){
//         this.namaDpn = nama
//         this.umur = usia
//         this.pekerjaan = job
//         namaFull = function(){}
//     }
// }
// var Andi = new orang('Andi ', 30, 'PNS')
// var Susilo = new orang('Susilo ', 25, 'Dokter ')
// console.log(Andi.umur)
// console.log(Susilo.pekerjaan)

// class product {
//     constructor(nama, harga){
//         this.namaBuah = nama
//         this.berapa = harga
         
//     }
// }
// var menu = []
// var anggur = new product('Anggur ', 10000)
// var mangga = new product('Mangga ', 20000)
// var kiwi = new product('Kiwi ', 30000)


//console.log(anggur.namaBuah)

// function tambahMenu(nama, harga){
//     menu.push(new Product(nama, harga))
// }

// tambahMenu('kiwi', 20000)
// tambahMenu('apel', 1000)
// // console.log(menu[1])

// var orang = {
//     nama : 'lian',
//     job : 'coder'
// }

// console.log(orang['job'])

// var arr = [
//     { 
//         pintu : true, 
//         jendela : [
//             2,4, {
//                 laptop :  'asus'
//             }
//         ] 
//     },
//     ['lian', 22, {
//         spidol : {
//             whiteboard: true
//         }
//     }],
//     ['5', 5]
// ]
// console.log(arr[1][2].spidol.whiteboard)

// prototype menmbahkan nilai variabel di luar kurawal

class manusia {
    constuctor(a, b, c){
        this.name = a,
        this.pekerjaan = b,
        this.sekolah = c,
        this.bioData = function(){
            return this.name + 'Kerja di ' + this.sekolah + 'Sebagai ' + this.pekerjaan
        }
    }
}
manusia.prototype.haus = true
manusia.prototype.lapar = false
var andi = new manusia('andi', 'polisi', 'SMA3')
//console.log(andi.lapar)
var lian = new manusia('lian ', 'code ', 'purwadhika')
var susilo = {
    nama : 'susilo ',
    sekolah : 'SMP2',
    pekerjaan : 'guru '
}
console.log(lian.bioData.call(susilo))