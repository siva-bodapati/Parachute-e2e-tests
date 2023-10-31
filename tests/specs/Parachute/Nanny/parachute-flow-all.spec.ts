import { test } from '@pagesetup';
import * as nannySignup from '@pages/Parachute/Nanny/Parachute-nanny-signup-page';
import * as admin from '@pages/Parachute/Parachute-admin-actions'

test.describe.configure({ mode: 'serial' });

test.describe('parachute flow all scenarios', () => {
    test('Parchute tests - Nanny signup', async () => {
        await nannySignup.navigateToParachuteLoginPage();
        await nannySignup.acceptcookies();
        await nannySignup.clicklogin();
        await nannySignup.clicksignupbutton();
        await nannySignup.enternannyemail();
        await nannySignup.fillnannysignupaccountdetails();
        await nannySignup.verifyCompleteAccountSetup();
        await nannySignup.editNannyprofile();
        await nannySignup.completeYourProfile();
        await nannySignup.fillFirstImpressionPage();
        await nannySignup.verifyBasicInformationTextDisplayed();
        await nannySignup.fillBasicInformation();
        await nannySignup.verifyEmployementPreferenceTextDisplayed();
        await nannySignup.fillEmployementPreference();
        await nannySignup.verifyExperienceLevelTextDisplayed();
        await nannySignup.fillExperienceLevel();
        await nannySignup.certificateTextIsDisplayed();
        await nannySignup.fillCertificates();
        await nannySignup.showcaseTextIsDisplayed();
        await nannySignup.uploadShowcaseFiles();
        await nannySignup.previewAndPublishTextIsDisplayed();
        await nannySignup.publishProfilepage();
        await nannySignup.awsomeTextIsDisplayed();
        await nannySignup.viewProfilepage();
        await nannySignup.nannyProfileStatus();
        await admin.navigateToAdminLoginPage();
        await admin.parachuteAdminlogInSuccessfully()
        await admin.verifyDashboardisDisplayed();
        await admin.selectNannyOptionSideMenu();
        await admin.verifynanny();
    });
});