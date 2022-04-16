const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const Request = require('./request-class');

  async function validateUrl(linksObjects){
  const urls = extractUrl(linksObjects);
  const status = await checkUrlStatus(urls);
  const requests = new Array();
  status.forEach((status, index) => {
    requests.push(new Request(urls[index], status));
  })
  return requests;
}

function extractUrl(linksObjects){
  return linksObjects.map( linkObect => Object.values(linkObect).join() );
}

async function checkUrlStatus(urls){
  try{
    return Promise.all(urls.map(async url => {
      const res = await fetch(url);
      return res.status;
    }))
  }catch(err){
    throw new Error(err);
  }
}

module.exports = validateUrl;

