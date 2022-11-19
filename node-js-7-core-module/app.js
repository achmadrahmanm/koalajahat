import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as simpanContact from "./contacts.js";
const yargs = _yargs(hideBin(process.argv));

yargs.command({
    command: 'add',
    describe: 'menambahkan nama kontak',
    builder : {
        nama : {
            describe : 'Nama',
            demandOption : true,
            type : 'string'
        },
        email : {
            describe : 'Email',
            demandOption : false,
            type : 'string'
        },
        noHP : {
            describe : 'Nomer Handphone',
            demandOption : true,
            type : 'string'
        },
    },
    handler(argv){
        simpanContact( argv.nama, argv.email, argv.noHP);
        // const contact = {
        //     nama :argv.nama, 
        //     email:argv.email, 
        //     noHP:argv.noHP
        // }
    }
});

// yargs.command('add', 'Menambahkan kontak baru', () => {}, (argv) => {
//     console.log(argv.nama);
// });
yargs.parse();

/////////////////////////////////////  OLDER VERSION WITHOUT ARGUMENT //////////////////////////////////////////////////
// const {tulisPertanyaan, simpanContact} = require('./contacts') 

// const main =async() => {
//     const nama = await tulisPertanyaan('Nama kontak baru : ');
//     const email = await tulisPertanyaan('Email : ');
//     const noHP = await tulisPertanyaan('Nomer Hp : ');

//     simpanContact(nama, email, noHP);
// }

// main();



/////////////////////////////////////  OLDER VERSION WITH callback hell  //////////////////////////////////////////////////
// rl.question('Masukan nama : ', (nama) => {
//     rl.question('masukan usia : ', (usia) => {
//         const objContact = {nama, usia};
//         const old_contact = fs.readFileSync('data/contacts.json', 'utf-8')
//         const contacts =  JSON.parse(old_contact);
//         contacts.push(objContact);
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

//         console.log(`Terimakasih ${nama} / ${usia} tahun telah mengisi data !`);
//         console.log( fs.readFileSync('data/contacts.json', 'utf-8'));

//         rl.close();
//     })
// });


// rl.question('Masukan nama : ', (nama) => {
//     rl.question('masukan usia : ', (usia) => {
//         console.log(`nama anda ${nama}, usia ${usia} tahun`);
//         rl.close();
//     })
// });


// console.log(fs);

// write file synchronous
// try{
//     fs.writeFileSync('data/test.txt', 'synchronous file');
// }catch(e){
//     console.log(e);
// }

//read file synchronous
// console.log(fs.readFileSync('data/test.txt', 'utf-8'));

//write file asynchronous
// fs.writeFile('data/test2.txt', 'asynchronous file', (e) => {
//     console.log(e);
// });

//read file asynchronous
// fs.readFile('data/test2.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });