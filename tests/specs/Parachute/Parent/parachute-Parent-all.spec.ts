import { test } from '@pagesetup';
//import * as parentSignup from '@pages/Parachute/Parent/Parachute-parent-signup-page';
import * as parentpostjob from '@pages/Parachute/Parent/parachute-parent-Postjob';
import * as LoginPage from '@pages/Parachute/parachute-login-Fullpage';
import * as Dashboard from '@pages/Parachute/parachute-dashboard-page';

test.describe.configure({ mode: 'serial' });

test.describe('parachute Parent user all scenarios', () => {
    /*test('Parchute tests - Parent signup', async () => {
        await parentSignup.navigateToParachuteLoginPage();
        await parentSignup.acceptcookies();
        await parentSignup.clicklogin();
        await parentSignup.clicksignupbutton();
        await parentSignup.enterparentemail();
        await parentSignup.fillparentsignupaccountdetails();

    });*/

    /*test('Parchute tests - Parent Post a Job', async () => {
        await LoginPage.navigateToParachuteLoginPage();
        await LoginPage.ParentlogInSuccessfully();
        await Dashboard.verifyLoginWelcomMessage();
        await parentpostjob.ClickOnPostAJob();
        await parentpostjob.FillJobDetails();
        await parentpostjob.CheckJobPostSuccess();
        await parentpostjob.GoToJobs();

    });*/

    test('Parchute tests - Check For Job based On jobTitle', async () => {
        await LoginPage.navigateToParachuteLoginPage();
        await LoginPage.ParentlogInSuccessfully();
        await Dashboard.verifyLoginWelcomMessage();
        await parentpostjob.GoToJobBoard();
        await parentpostjob.VerifyJobInJobBoard();

    });

});

