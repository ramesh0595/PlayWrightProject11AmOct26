import { Before, After } from "@cucumber/cucumber";
import utils from "../Utility/BaseClass.js";
//Normal Hooks class for browser launch and close
Before(async function () {
  this.browser = await utils.launchBrowser("chromium", false);
  this.context = await utils.launchContext(this.browser);
  this.page = await utils.launchPage(this.context);
  await utils.launchUrl(this.page, "https://www.facebook.com/");
});

After(async function (Scenario) {
  await this.page.screenshot({ path: "tests/Screenshots/image.png" });
  await this.page.screenshot({ path: `tests/Screenshots/${Date.now()}image.png` });

  //Take screenshot all passed and failed scenarios
  const scenarioName = Scenario.pickle.name
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "_");
  const filepath = `tests/ScreenShots/${scenarioName}.png`;

  const screenshot = await this.page.screenshot({
    path: filepath,
    fullPage: true,
  });

  //Take screenshot all failed scenarios omly
 if(Scenario.result.status==="FAILED"){
   const scenarioName = Scenario.pickle.name
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "_");
  const filepath = `tests/ScreenShots/${scenarioName}.png`;

  const screenshot = await this.page.screenshot({
    path: filepath,
    fullPage: true,
  });
   await this.attach(screenshot, "image/png");
 }
 
  await utils.pageClose(this.page);
});
