# Requirements

node version 10+

npm version 6+

Refer to [this page](https://nodejs.org/en/) for installation details.

# How to run tests

`npm i`

`testcafe`

## Troubleshooting
If previous commands does not run tests try next:

`npm i`

`npm i -g testcafe`

`testcafe`

If your OS is Linux and you get permission error run:

`sudo npm i` or `sudo npm i --unsafe-perm`

`sudo npm i -g testcafe` or `sudo npm i -g testcafe --unsafe-perm`

`testcafe`

*Alternative way to run tests:*

`npm run test`

### Notes

When you run tests or view its code you will definitely notice that *testcafe* opens page from scratch for each test - so its expected behavior and allows us to execute tests without influence between tests.


If you have any questions please contact me via oleksandr.pelykh@gmail.com.