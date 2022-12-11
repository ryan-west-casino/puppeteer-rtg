const { default: start } = require('./start.js');
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'ws://152.228.228.207:24055/?token=2cbc5771-38f2-4dcf-8774-50ad51a971bd&timeout=1000000000'
  });
  const page = await browser.newPage();

  await start({ page, browser });

  return browser.close();
})()
.then(() => console.log('Script complete!'))
.catch((err) => console.error('Error running script' + err));
