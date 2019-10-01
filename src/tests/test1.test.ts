import { t } from 'testcafe';
import firstPage from '../page-objects/main-page';
import secondPage from '../page-objects/user-list';
import clientFunctions from '../client-functions';
import { generateRandomString } from '../helpers'

const pjson = require("../../package.json");
const BASE_URL = pjson.baseUrl;
const FIRST_URL = `${BASE_URL}/first`;
const SECOND_URL = `${BASE_URL}/second`;
const RED_TEXT = 'Incorrect';
const GREEN_TEXT = 'Correct';
const RED_COLOR = 'rgb(255, 0, 0)';
const GREEN_COLOR = 'rgb(0, 255, 0)';

fixture`First page`
  .page`${BASE_URL}`;

test('Check url', async () => {
  const location = await clientFunctions.getLocation();
  await t
    .expect(location()).eql(FIRST_URL);
});

test('Click button and check url', async () => {
  await firstPage
    .clickGoToSecondPageButton();
  const location = await clientFunctions.getLocation();
  await t
    .expect(location()).eql(SECOND_URL);
});

fixture`Second page`
  .page`${BASE_URL}`
  .beforeEach(async () => {
    await firstPage.openSecondPage();
  })

test('Check h2 text and color', async () => {
  await t
    .expect(secondPage.h2.innerText).eql(RED_TEXT);
  const h2Color = await secondPage.getH2color();
  await t
    .expect(h2Color).eql(RED_COLOR);
});

test('Enter correct text and check changes', async () => {
  await t
    .typeText(secondPage.input, await secondPage.getProperText())
    .expect(secondPage.h2.innerText).eql(GREEN_TEXT);
  const h2Color = await secondPage.getH2color();
  await t
    .expect(h2Color).eql(GREEN_COLOR)
});

test('Enter incorrect text and check changes', async () => {
  await t
    .typeText(secondPage.input, generateRandomString(), {replace: true})
    .expect(secondPage.h2.innerText).eql(RED_TEXT);
  const h2Color = await secondPage.getH2color();
  await t
    .expect(h2Color).eql(RED_COLOR)
})
  .after(async () => {
    await t
      .click(secondPage.input)
      .pressKey('ctrl+a delete')
  });
