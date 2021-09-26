#!/usr/bin/env node

const program = require("commander");
const chalk = require('chalk');
const clipboardy = require('clipboardy')
const log=console.log
const createPassword = require('./utils/createPassword')
const savePassword= require('./utils/savePassword')

program.version("1.0.0").description("Simple Password Generator");


program
 .option("-l,--length <number>", "length of password", "8")
 .option("-s,--save",'save password to password.txt')
 .option("-nn,--no-numbers",'remove numbers')
 .option("-ns,--no-symbols",'remove symbols')
 .parse()


 const {length,save,numbers,symbols} =program.opts()

 //Get generated password
 const generatedPassword=createPassword(length,numbers,symbols)

 //copy to clipboard
 clipboardy.writeSync(generatedPassword)

 //save to file
 if(save){
     savePassword(generatedPassword)
 }

 //output generated password
 log(chalk.blue('Generated Password :')+chalk.bold(generatedPassword))
 log(chalk.yellow('password copied to clipboard'))