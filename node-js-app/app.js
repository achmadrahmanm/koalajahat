import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import simpanContact from "./contacts.js";
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
    }
});
yargs.parse();