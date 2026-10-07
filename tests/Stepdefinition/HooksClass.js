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
  // await this.page.screenshot({ path: "tests/Screenshots/image.png" });
  //await this.page.screenshot({ path: `tests/Screenshots/${Date.now()}image.png` });

  // //Take screenshot all passed and failed scenarios
  // const scenarioName = Scenario.pickle.name
  //   .trim()
  //   .replace(/[^a-zA-Z0-9]/g, "_");
  // const filepath = `tests/ScreenShots/${scenarioName}.png`;

  // const screenshot = await this.page.screenshot({
  //   path: filepath,
  //   fullPage: true,
  // });

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

// //Ordered Hooks
// Before({order: 1},async function () {
//  console.log("---------Before Scenario---------1")
// });

// After({order: 1},async function () {
//   console.log("---------After Scenario---------1")
// });

// Before({order: 2},async function () {
//  console.log("---------Before Scenario---------2")
// });

// After({order: 2},async function () {
//   console.log("---------After Scenario---------2")
// });

// //Tagged Hooks
// Before({tags: "@smoke"},async function () {
//  console.log("---------Before Scenario---------1")
// });

// After({tags: "@smoke"},async function () {
//   console.log("---------After Scenario---------1")
// });

// Before({tags: "@retest"},async function () {
//  console.log("---------Before Scenario---------2")
// });

// After({tags: "@retest"},async function () {
//   console.log("---------After Scenario---------2")
// });

//Multiple Tagged Hooks
// Before({tags: "@smoke or @sanity"},async function () {
//  console.log("---------Before Scenario---------1")
// });

// After({tags: "@smoke or @sanity"},async function () {
//   console.log("---------After Scenario---------1")
// });

// Before({tags: "@retest"},async function () {
//  console.log("---------Before Scenario---------2")
// });

// After({tags: "@retest"},async function () {
//   console.log("---------After Scenario---------2")
// });

//Ordered and Tagged Hooks
// Before({tags: "@smoke or @retest", order: 1},async function () {
//  console.log("---------Before Scenario---------1")
// });

// After({tags: "@smoke or @retest", order: 1},async function () {
//   console.log("---------After Scenario---------1")
// });

// Before({order: 2},async function () {
//  console.log("---------Before Scenario---------2")
// });

// After({order: 2},async function () {
//   console.log("---------After Scenario---------2")
// });
