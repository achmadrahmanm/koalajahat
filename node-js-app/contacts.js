import * as fs from 'fs';
import chalk from 'chalk';

const directoryPath = './data';
const directoryContacts = './data/contacts.json';

if(!fs.existsSync(directoryPath)){
    fs.mkdir(directoryPath);
}else if(!fs.existsSync(directoryContacts)){
    fs.writeFileSync(directoryContacts, '[]', 'utf-8');
}

const simpanContact = (nama, email,noHP) =>{
    const objContact = {nama, email,noHP };
    const old_contact = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts =  JSON.parse(old_contact);
   
    const duplikat = contacts.find((objContact) => objContact.nama === nama);
    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, duplikat'));
        return false;
    }else{
        console.log(chalk.green.inverse.bold('Contact terdaftar'));
        contacts.push(objContact);
        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
        return false;
    }
}

export default simpanContact;