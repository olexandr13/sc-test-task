## Checklist

[Link for view](https://docs.google.com/spreadsheets/d/1iA8NtPqnfZfIlEBXi9ePbwnU1Lb1C8NXnt9sPy4eZTs/edit?usp=sharing) checklist.

### Why checklist? And not test cases?
- сhecklists are faster to create
- require much less time for maintaining (which is bit advantage)
- generally they provide the same level of clearness (as test cases)
- push QA to use mind and creativity
- do not contain extra or obvious data (e.g. steps if they are clear from summary)
- I intentionally avoided usage of test case management systems cause they require some time for configuration

### Why testcafe?

- created for UI testing
- contains embedded waits
- easy to start
- supports all popular browsers (even IE)
- supports mobile emulation 
- can work with native alerts, prompts, etc
- does not need webdriver or any additional tools (like Appium)
- supports page object pattern
- can lunch tests concurrently
- supports preconditions and postconditions (before, after, beforeAll, beforeEach etc)
- free to use

### Why I have automated that specific cases?

The first but not the only parameter is the tests priority. From the other hand I tried to use and show different functionalities which *testcafe* provides.

### What I actualy have done?

- automated main functionality (most P1 cases)
- automated some minor functionality to show *testcafe* features (like native browser confirm handling)
- used page objects
- spent only 10 hours for test task :)