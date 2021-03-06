import { Selector, t } from 'testcafe';
class AddUserForm {
  firstNameInput: Selector;
  lastNameInput: Selector;
  startDateInput: Selector;
  emailInput: Selector;
  submitBtn: Selector;
  cancelBtn: Selector;

  constructor() {
    this.firstNameInput = Selector('input[ng-model="selectedEmployee.firstName"]');
    this.lastNameInput = Selector('input[ng-model="selectedEmployee.lastName"]');
    this.startDateInput = Selector('input[ng-model="selectedEmployee.startDate"]');
    this.emailInput = Selector('input[ng-model="selectedEmployee.email"]');
    this.submitBtn = Selector('button[type="submit"]:nth-child(2)');
    this.cancelBtn = Selector('a.bCancel');
  }

  async fillFormWithData(firstName: string, lastName: string, startDate: string, email: string) {
    await t
      .typeText(this.firstNameInput, firstName)
      .typeText(this.lastNameInput, lastName)
      .typeText(this.startDateInput, startDate)
      .typeText(this.emailInput, email);
  }

  async submitForm() {
    await t
      .click(this.submitBtn);
  }

  async clickCancel() {
    await t
      .click(this.cancelBtn);
  }

}

export default new AddUserForm();