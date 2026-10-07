const utilis=require("../Utility/BaseClass")


class LoginPage{

constructor(page){
    this.page=page;

    this.txtUserName="[name='email']";
    this.txtPassword="[name='pass']";
    this.loginButton="//div[@aria-label='Log in']";

}

async enterUsername(email){
   await utilis.fill(this.page,this.txtUserName,email)
}

async enterPassword(pass){
   await utilis.fill(this.page,this.txtPassword,pass)
}

async clickLogin(){
    await utilis.click(this.page,this.loginButton)
}

}
module.exports=LoginPage;
