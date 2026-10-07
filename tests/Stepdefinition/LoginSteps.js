import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import assert from "node:assert";
import utils from "../Utility/BaseClass.js";
import LoginPage from "../Pages/LoginPage.js";
import RegistrationPage from "../Pages/RegistrationPage.js";

let login;
let register;

When(
  "The user has to fill username {string} and password {string}",
  async function (user, pass) {
    login = new LoginPage(this.page);
    await login.enterUsername(user);
    await login.enterPassword(pass);
  },
);

When("The user has to click the login button", async function () {
  await login.clickLogin();
});

Then("The user should be navigated in Invalid login page", async function () {
  const currentURL = await utils.getPageURL(this.page);
  assert.ok(currentURL.includes("Facebook"));
  console.log("-----User in Invalid Page-------");
});

Given("The user should be in login page", async function () {
  console.log("-----Browser Launch We Maintained in Hooks Class-------");
});

When("The user has to click the create new account button", async function () {
  register = new RegistrationPage(this.page);
  await register.clickCreateAccount();
});

When(
  "The user has to fill firstName,lastName and other deatils",
  async function () {
   await register.enterFirstName("Ramesh");
    await register.enterLastName("Kumar");
  },
);

When("The user has to click the submit button", async function () {
  await register.clickSubmit();
});

Then(
  "The user should be get successfully registered message",
  async function () {
    console.log("------User Successfully Registered---------");
  },
);
