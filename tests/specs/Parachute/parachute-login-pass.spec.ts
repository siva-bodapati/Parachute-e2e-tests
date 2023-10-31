import { test } from '@pagesetup';
import * as parachuteLoginpage from '@pages/Parachute/parachute-login-page';


test.describe.configure({ mode: 'parallel' });

test.describe('parachute login success', () => {
    test('Parchute tests - Successful login will display dashboard', async () => {
      await parachuteLoginpage.navigateToParachuteLoginPage();
      await parachuteLoginpage.parachutelogInSuccessfully();
      //verifying dashboard page is displayed on successful login
      await parachuteLoginpage.verifyLoginPageisDisplayed();
    });
    test('Parchute tests - Login failure',async () => {
      await parachuteLoginpage.navigateToParachuteLoginPage();
      await parachuteLoginpage.parachutefailureLogin();
      //verifying error messgae in failure login
      await parachuteLoginpage.verifyErrorMessageForFailureLogin
      
    })

    test('Parachute tests - Email Required',async () => {
      await parachuteLoginpage.navigateToParachuteLoginPage();
      await parachuteLoginpage.parachuteEmailRequired();
      await parachuteLoginpage.emailRequiredErrorMessage();
    })

    test('Parachute tests - Password Required',async () => {
      await parachuteLoginpage.navigateToParachuteLoginPage();
      await parachuteLoginpage.parachutePasswordRequired();
      await parachuteLoginpage.passwordRequiredErrorMessage();
    })
});