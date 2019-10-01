import { Selector, t } from 'testcafe';
class MainPage {
  header: Selector;
  loginForm: Selector;
  footer: Selector;
  elWithCredentials: Selector;
  usermameInput: Selector;
  passwordInput: Selector;
  loginBtn: Selector;
  greeting: Selector;
  credentials: any;

  constructor() {
    this.header = Selector('header');
    this.greeting = Selector('p#greetings')
    this.loginForm = Selector('form#login-form');
    this.footer = Selector('footer');
    this.elWithCredentials = Selector('form#login-form p.info');
    this.usermameInput = Selector('form input[ng-model="user.name"]');
    this.passwordInput = Selector('form input[ng-model="user.password"]');
    this.loginBtn = Selector('form button[type="submit"]');
    this.credentials = null;
  }

  async getCredetials() {
    const credentialsAsText = (await this.elWithCredentials.innerText).split('"');
    return {username: credentialsAsText[1], password: credentialsAsText[3]};
  }

  async login() {
    await this.enterLoginCredentials();
    await this.clickLoginButton();
  }

  async enterLoginCredentials() {
    const credentials = await this.getCredetials();
    this.credentials = credentials;
    await t
      .typeText(this.usermameInput, credentials.username)
      .typeText(this.passwordInput, credentials.password);
  }

  async clickLoginButton() {
    await t
      .click(this.loginBtn);
  }
}

export default new MainPage();