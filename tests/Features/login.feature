@login @E2E
Feature: To validate the login functionallity of the facebook application

Background:
    Given The user should be in login page

@smoke @regression
Scenario: Login-Invalid To validate the login functionallity with Invalid Credentials

When The user has to fill username "ramesh@gmail.com" and password "123456789"
And The user has to click the login button
Then The user should be navigated in Invalid login page

@sanity @regression
Scenario: Login-Valid To validate the login functionallity with Invalid Credentials

When The user has to fill username "mano@gmail.com" and password "3145367123"
And The user has to click the login button
Then The user should be navigated in Invalid login page