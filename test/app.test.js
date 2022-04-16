const { test, expect, it } = require('@jest/globals');
//const { describe } = require('yargs');
const catchFile = require('../app');

const singleUrl = [{ Google: 'https://www.google.com.br' } ];

describe('catchFile', () => {
  it('should be a function', () => {
    expect(typeof catchFile).toBe('function');
  })

  it('should read a file and return an array of string', async () => {
    const res = await catchFile('C:/Users/Saraiva/Desktop/node-api-links/text_files/file.md');
    expect(res).toEqual(singleUrl);
  })

  it('should be an empty array if file not contains links', async () => {
    const res = await catchFile('C:/Users/Saraiva/Desktop/node-api-links/text_files/file_without_links.md');
    expect(res).toEqual(new Array());
  })

  it('should throw an error when user use a directory as arguments', async () => {
    await expect(catchFile('C:/Users/Saraiva/Desktop/node-api-links/text_files/')).rejects.toThrow();
  })

})
