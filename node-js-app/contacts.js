import * as fs from "fs";
import chalk from "chalk";
import validator from "validator";

const directoryPath = "./data";
const directoryContacts = "./data/contacts.json";

if (!fs.existsSync(directoryPath)) {
  fs.mkdir(directoryPath);
} else if (!fs.existsSync(directoryContacts)) {
  fs.writeFileSync(directoryContacts, "[]", "utf-8");
}

const simpanContact = (nama, email, noHP) => {
  const objContact = { nama, email, noHP };
  const contacts = loadContact();
  const duplikat = contacts.find((objContact) => objContact.nama === nama);

  if (duplikat) {
    console.log(chalk.red.inverse.bold("Contact sudah terdaftar, duplikat"));
    return false;
  }

  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email format salah"));
      return false;
    }
  }

  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomer handphone format salah"));
    return false;
  }

  contacts.push(objContact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(chalk.green.inverse.bold("Contact terdaftar"));
};

const loadContact = () => {
  const old_contact = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(old_contact);
  return contacts;
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("List contact yg terdaftar"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP} `);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contactFind = contacts.find(
    (contactFind) => contactFind.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contactFind) {
    console.log(chalk.red.inverse.bold("kontak tidak terdaftar"));
    return false;
  }

  console.log(chalk.blue.inverse.bold(contactFind.nama));
  console.log(contactFind.noHP);
  if (contactFind.email) {
    console.log(contactFind.email);
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();

  const contactWithFilter = contacts.filter(
    (contactWithFilter) =>
      contactWithFilter.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contactWithFilter.length === contacts.length) {
    console.log(chalk.red.inverse.bold("kontak tidak ditemukan"));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(contactWithFilter));
  console.log(chalk.green.inverse.bold(`${nama} berhasil dihapus dari kontak`));
};

export { simpanContact, listContact, detailContact, deleteContact };
