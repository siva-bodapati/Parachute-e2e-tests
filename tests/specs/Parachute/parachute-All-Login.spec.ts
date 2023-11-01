import { test } from '@pagesetup';
import * as LoginPage from '../../pages/Parachute/parachute-login-Fullpage';
import * as Dashboard from '../../pages/Parachute/parachute-dashboard-page';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure expect when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

test.describe('Parachute tests for All login Scenarios', () => {
  test('Parachute - Parent Successful login will display Parents Dashboard Page', async () => {
    await LoginPage.navigateToParachuteLoginPage();
    await LoginPage.verifyLoginPageisDisplayed();
    await LoginPage.ParentlogInSuccessfully();
    //verifying products page is displayed on successful login
    await Dashboard.verifyLoginWelcomMessage();
  });

  test('Parachute - Nanny Successful login will display Nannies Dashboard Page', async () => {
    await LoginPage.navigateToParachuteLoginPage();
    await LoginPage.verifyLoginPageisDisplayed();
    await LoginPage.NannylogInSuccessfully();
    await Dashboard.verifyLoginWelcomMessage();
  });

  test('Parachute - Mandatory Alert check for Email and Password fields in the Login page', async () => {
    await LoginPage.navigateToParachuteLoginPage();
    await LoginPage.verifyLoginPageisDisplayed();
    await LoginPage.MadatoryCheckForLoginPage();
    await LoginPage.verifyMandatoryMessageForLoginPage();
    //verifying Login is still displayed
  });
});
