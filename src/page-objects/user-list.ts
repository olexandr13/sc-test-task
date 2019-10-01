import { Selector, t } from 'testcafe';
class UserList {
  addBtn: Selector;
  editBtn: Selector;
  deleteBtn: Selector;
  employeeForm: Selector;
  user: Selector;

  constructor() {
    this.addBtn = Selector('a#bAdd');
    this.editBtn = Selector('a#bEdit');
    this.deleteBtn = Selector('a#bDelete');
    this.employeeForm = Selector('form[name="employeeForm"]');
    this.user = Selector('li[ng-repeat="employee in employees"]');
  }

  async clickCreateBtn() {
    await t
      .click(this.addBtn)
      .expect(this.employeeForm.visible).ok();
  }

  async clickEditBtn() {
    await t
      .click(this.editBtn);
  }

  async clickDeleteBtnAndConfirm() {
    await t
      .setNativeDialogHandler( () => true )
      .click(this.deleteBtn)
      // wait for item will be deleted
      .wait(2000)
  }

  async getUserByFullName(firstName: string, lastName: string) {
    return this.user.withExactText(`${firstName} ${lastName}`);
  }

  async isUserWithFullnameExist(firstName: string, lastName: string) {
    return Selector('li[ng-repeat="employee in employees"]', { visibilityCheck: true }).withExactText(`${firstName} ${lastName}`).exists;
  }

  async clickOnUserWithFullName(firstName, lastName) {
    const user = this.user.withExactText(`${firstName} ${lastName}`);
    await t
      .click(user);
    return this;
  }

  async isDisplayed() {
    await t
      .expect(this.user.exists).ok();
  }

}

export default new UserList();