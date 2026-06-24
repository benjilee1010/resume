const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Users\\ntxhy\\.cache\\puppeteer\\chrome\\win64-145.0.7632.46\\chrome-win64\\chrome.exe'
  });
  const page = await browser.newPage();
  
  const htmlPath = path.join(__dirname, 'resume.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: 'Benjamin_Lee_Resume.pdf',
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0.32in',
      right: '0.45in',
      bottom: '0.32in',
      left: '0.45in'
    }
  });
  
  console.log('PDF exported successfully: Benjamin_Lee_Resume.pdf');
  await browser.close();
})();
