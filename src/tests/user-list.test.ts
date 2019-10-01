import { t, Selector } from 'testcafe';
import helpers from '../helpers'
import mainPage from '../page-objects/main-page';
import userList from '../page-objects/user-list';
import addUserForm from '../page-objects/add-user-form';
import editUserForm from '../page-objects/edit-user-form';

const BASE_URL = `http://cafetownsend-angular-rails.herokuapp.com/login`;
let user: any;

fixture`User list`
  .page`${BASE_URL}`;

test
  .before(async () => {
    await mainPage.login();
  })
  ('Add user', async () => {
    await userList
      .clickCreateBtn();
    user = helpers.generateUserData();
    await addUserForm
      .fillFormWithData(user.firstName, user.lastName, user.startDate, user.email);
    await addUserForm
      .submitForm();
    const addedUser = await userList
      .getUserByFullName(user.firstName, user.lastName);
    await t
      .expect(addedUser.exists).ok();
  });

test
  .before(async () => {
    await mainPage.login();
  })
  ('Edit user', async () => {
    const oldUser = user;
    const newUser = helpers.generateUserData();
    // reassign for next test (delete user)
    user = newUser;
    await userList
      .clickOnUserWithFullName(oldUser.firstName, oldUser.lastName)
    await userList
      .clickEditBtn();
    await editUserForm
      .fillFormWithData(newUser.firstName, newUser.lastName, newUser.startDate, newUser.email)
    await editUserForm
      .clickUpdate()
    const newUserInList = await userList
      .getUserByFullName(newUser.firstName, newUser.lastName);
    await t
      .expect(newUserInList.exists).ok()
  });

test
  .before(async () => {
    await mainPage.login();
  })
  ('Delete user', async () => {
    await userList
      .clickOnUserWithFullName(user.firstName, user.lastName)
    await userList
      .clickDeleteBtnAndConfirm();
  });

test
  .before(async () => {
    await mainPage.login();
  })
  ('Cancel user creation', async () => {
    await userList
      .clickCreateBtn();
    await addUserForm
      .clickCancel();
    await userList
      .isDisplayed();
  });

test
  .before(async () => {
    await mainPage.login();
  })
  ('Open user info by double click', async () => {
    await t
      .doubleClick(userList.user);
    await t
      .expect(editUserForm.firstNameInput.exists).ok();
  });