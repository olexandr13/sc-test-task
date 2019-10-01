import { Selector, t } from 'testcafe';
class UserList {
  addBtn: Selector;
  editBtn: Selector;
  deleteBtn: Selector;
  employeeForm: Selector;

  constructor() {
    this.addBtn = Selector('a#bAdd');
    this.editBtn = Selector('a#bEdit');
    this.deleteBtn = Selector('a#bDelete');
    this.employeeForm = Selector('form[name="employeeForm"]');
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

  async clickDeleteBtn() {
    await t
      .click(this.deleteBtn);
  }

}

export default new UserList();