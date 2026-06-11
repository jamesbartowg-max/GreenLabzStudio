const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3001/");
  await page.waitForTimeout(2000);
  const elements = await page.$$eval("[id=\"ablauf\"]", els => els.length);
  const texts = await page.$$eval("p", els => els.filter(e => e.textContent && e.textContent.includes("Wie ich arbeite")).length);
  console.log("ablauf id count:", elements);
  console.log("Wie ich arbeite count:", texts);
  await browser.close();
})();
