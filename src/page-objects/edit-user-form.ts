import { Selector, t } from 'testcafe';
class EditUserForm {
  firstNameInput: Selector;
  lastNameInput: Selector;
  startDateInput: Selector;
  emailInput: Selector;
  updateBtn: Selector;
  deleteBtn: Selector;

  constructor() {
    this.firstNameInput = Selector('input[ng-model="selectedEmployee.firstName"]');
    this.lastNameInput = Selector('input[ng-model="selectedEmployee.lastName"]');
    this.startDateInput = Selector('input[ng-model="selectedEmployee.startDate"]');
    this.emailInput = Selector('input[ng-model="selectedEmployee.email"]');
    this.updateBtn = Selector('button[type="submit"]:nth-child(1)');
    this.deleteBtn = Selector('p.main-button');
  }

  async fillFormWithData(firstName: string, lastName: string, startDate: string, email: string) {
    await t
      .typeText(this.firstNameInput, firstName, {replace: true})
      .typeText(this.lastNameInput, lastName, {replace: true})
      .typeText(this.startDateInput, startDate, {replace: true})
      .typeText(this.emailInput, email, {replace: true});
  }

  async clickUpdate() {
    await t
      .click(this.updateBtn);
  }

  async clickCancel() {
    await t
      .click(this.deleteBtn);
  }

}

export default new EditUserForm();