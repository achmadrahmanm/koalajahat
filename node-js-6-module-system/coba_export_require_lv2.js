// function
const cetakNama = (nama) => `Halo nama saya ${nama}` ;

// variable
const PI = 3.143

// object + function 
const pegawai = {
    nama : 'Achmad',
    umur : 35,
    cetakPegawai (){
        return `Nama pegawai : ${this.nama}, usia : ${this.umur}`;
    }
}

// class
class Orang{
    constructor(){
        console.log('Orang class dibuat!'); 
    }
}

// module.exports = cetakNama;
module.exports = {
    cetakNama,
    PI,
    pegawai,
    Orang
}