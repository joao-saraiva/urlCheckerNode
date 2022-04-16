const catchFile = require('./app')
const chalk = require('chalk');
const paths = process.argv;
const validateUrl = require('./http-validation')

showText(paths);

async function showText(paths){
  const urls = await catchFile(paths[2])
  if(urls.length == 0){
    console.log(chalk.red('No links founded') );
  }else{
    console.log(chalk.blue('These are the links: '), await validateUrl(urls));
  }
}