import * as fs from 'fs';
import chalk from 'chalk';

// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })

const directoryPath = './data';
const directoryContacts = './data/contacts.json';

if(!fs.existsSync(directoryPath)){
    fs.mkdir(directoryPath);
}else if(!fs.existsSync(directoryContacts)){
    fs.writeFileSync(directoryContacts, '[]', 'utf-8');
}

// const tulisPertanyaan = (pertanyaan) =>{
//     return new Promise((resolve, reject) =>{
//         rl.question(pertanyaan, (input) => {
//             resolve(input);
//         });
//     });
// }

const simpanContact = (nama, email,noHP) =>{
    const objContact = {nama, email,noHP };
    const old_contact = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts =  JSON.parse(old_contact);
    contacts.push(objContact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

    const duplikat = contacts.find((objContact) => objContact.nama === nama);
    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, duplikat'));
        return false;
    }
    // console.log(`Terimakasih ${nama} / ${email} / ${noHP} telah mengisi data !`);
    // console.log( fs.readFileSync('data/contacts.json', 'utf-8'));
    // rl.close();
}

// export default simpanContact;
module.exports.simpanContact = simpanContact;
// module.exports = {tulisPertanyaan, simpanContact}