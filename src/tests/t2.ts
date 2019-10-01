import { t } from 'testcafe';
import clientFunctions from '../client-functions';
import helpers from '../helpers'
import mainPage from '../page-objects/main-page';
import userList from '../page-objects/user-list';
import addUserForm from '../page-objects/add-user-form';

const BASE_URL = `http://cafetownsend-angular-rails.herokuapp.com/login`;

fixture`Main page`
  .page`${BASE_URL}`;

// test('Check url', async () => {
//   const location = await clientFunctions.getLocation();
//   await t
//     .expect(location()).eql(BASE_URL);
// });

// test('Login', async () => {
//   await mainPage
//     .login();
//   await t
//     .expect(mainPage.greeting.innerText).eql(`Hello ${mainPage.credentials.username}`);
// });

test
  .before(async () => {
    await mainPage.login();
  })
  ('Add user', async () => {
    await userList
      .clickCreateBtn();
    const user: any = helpers.generateUserData();
    console.log('---------------------');
    console.log(user);
    await addUserForm
      .fillFormWithData(user.firstName, user.lastName, user.startDate, user.email);
    await addUserForm
      .submitForm();
    await t
      .wait(5000);
  });

