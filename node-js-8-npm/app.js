// console.log('Hellow world');

import validator from 'validator';
console.log(validator.isEmail('aisdgaskjdgmail.com'));
console.log(validator.isMobilePhone('0819786831111', 'id-ID'));
console.log(validator.isNumeric('0819786831111'));

import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));

const name = 'Rahman';
console.log(`Hello ${chalk.underline('nice')} ${name}`);

