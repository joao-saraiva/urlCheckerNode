const chalk = require('chalk');
const fs = require('fs');
catchFile('./text_files/file.md');

function extractLinks(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  let extractedLinks = new Array();
  let result;
  while((result = regex.exec(text)) !== null){
    extractedLinks.push( { [result[1]]: result[2] } );
  }
  return extractedLinks;
}

function throwError(err) {
  throw new Error(chalk.red(err));
}

async function catchFile(pathFile){
  const encoding = 'utf-8';
  try{
    const fileText = await fs.promises.readFile(pathFile, encoding)
    return extractLinks(fileText);
  }catch(err){
    throwError(err)
  }
}

module.exports =  catchFile 