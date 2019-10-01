import { t } from 'testcafe';
import clientFunctions from '../client-functions';
import mainPage from '../page-objects/main-page';

const BASE_URL = `http://cafetownsend-angular-rails.herokuapp.com/login`;

fixture`Login form`
  .page`${BASE_URL}`;

test('Check url', async () => {
  const location = await clientFunctions.getLocation();
  await t
    .expect(location()).eql(BASE_URL);
});

test('Login', async () => {
  await mainPage
    .login();
  await t
    .expect(mainPage.greeting.innerText).eql(`Hello ${mainPage.credentials.username}`);
});

test('Login with invalid data', async () => {
  await mainPage
    .loginWithInvalidData();
  await t
    .expect(mainPage.errorMessage.exists).ok();
});

test
  .before(async () => {
    await mainPage
      .login();
  })
  ('Logout', async () => {
    await mainPage
      .logout();
    await t
      .expect(mainPage.loginForm.exists).ok();
  });
