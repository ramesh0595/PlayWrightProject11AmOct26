const utilis = require("../Utility/BaseClass");

class RegistrationPage {
  constructor(page) {
    this.page = page;

    this.btnCreate = "//a[@aria-label='Create new account']";
    this.txtFirst = "(//input[@type='text'])[1]";
    this.txtLast = "(//input[@type='text'])[2]";
    this.btnsumbit = "(//div[@role='button'])[4]";
  }
  async clickCreateAccount(){
       await utilis.click(this.page,this.btnCreate);
  }
  async enterFirstName(fname){
     await utilis.fill(this.page,this.txtFirst,fname);
  }
  async enterLastName(lname){
     await utilis.fill(this.page,this.txtLast,lname);
  }
  async clickSubmit(){
   await utilis.click(this.page,this.btnsumbit);
  }
}


module.exports=RegistrationPage;