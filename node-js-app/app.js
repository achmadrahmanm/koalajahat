import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  simpanContact,
  listContact,
  detailContact,
  deleteContact,
} from "./contacts.js";
const yargs = _yargs(hideBin(process.argv));

yargs
  .command({
    command: "add",
    describe: "Menambahkan nama kontak",
    builder: {
      nama: {
        describe: "Nama",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomer Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

yargs.command({
  command: "list",
  describe: "Melihat semua kontak",
  handler(argv) {
    listContact();
  },
});

yargs.command({
  command: "detail",
  describe: "Menampilkan detail suatu kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

yargs.command({
  command: "delete",
  describe: "Menghapus detail suatu kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
