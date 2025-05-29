const puppeteer = require('puppeteer');

(async () => {
  while (true) {
    try {
      console.log("Opening PHP page...");
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
      });
      const page = await browser.newPage();
      await page.goto('https://bestforextradingsetups.dpdns.org/send_to_render.php', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });

      console.log("PHP page loaded. Keeping it open for 1 minute...");
      await new Promise(res => setTimeout(res, 60000));

      await browser.close();
    } catch (err) {
      console.error("Error keeping page alive:", err.message);
    }

    console.log("Waiting 10 seconds before next open...");
    await new Promise(res => setTimeout(res, 10000));
  }
})();
