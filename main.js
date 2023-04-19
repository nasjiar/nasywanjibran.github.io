// let user = {
//     firstName: "John",
//     lastName: "Nhoj",
//     age: 69,
//     isSingle: true,
// }

// console.log(`Nama dia adalah ${user.firstName} ${user.lastName}`);

// membuat object
// var mhs ={
//     nama: "Peler",
//     umur: 20,
//     ips : [3.00,3.10,3,20],
//     alamat: {
//         jalan : "Jl. Konrolodon 123",
//         kota : "Bikini Bottom",
//         provinsi : "Banten"
//     }
// }

// Membuat Object
  // Object Literal
var mhs = {
    nama : "Nasywan Jibran Aryadi",
    nim : "124220038",
    email : "jamblang074@gmail.com",
    jurusan : "Sistem Informasi"
}

var mhs2 = {
        nama : "Paulo Otong",
        nim : "124220069",
        email : "kenah@gmail.com",
        jurusan : "Teknik Kimia"
}


// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa("Koch Justin","12301424","koch@gmail.com","Teknik Industri")


// Constructor
function Mahasiswa(nama, nim, email, jurusan){
    // var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Erik','123103013','erik@rocketmail.com','Teknik Nuklir');
