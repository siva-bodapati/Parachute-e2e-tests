import { test } from '@pagesetup';
import * as parachuteflow from '@pages/Parachute/Parachute-nanny-signup-page';
import * as admin from '@pages/Parachute/Parachute-admin-actions'

test.describe.configure({ mode: 'serial' });

test.describe('parachute flow all scenarios', () => {
    test('Parchute tests - Nanny signup', async () => {
        await parachuteflow.navigateToParachuteLoginPage();
        await parachuteflow.acceptcookies();
        await parachuteflow.clicklogin();
        await parachuteflow.clicksignupbutton();
        await parachuteflow.enternannyemail();
        await parachuteflow.fillnannysignupaccountdetails();
        await parachuteflow.verifyCompleteAccountSetup();
        await parachuteflow.editNannyprofile();
        await parachuteflow.completeYourProfile();
        await parachuteflow.fillFirstImpressionPage();
        await parachuteflow.verifyBasicInformationTextDisplayed();
        await parachuteflow.fillBasicInformation();
        await parachuteflow.verifyEmployementPreferenceTextDisplayed();
        await parachuteflow.fillEmployementPreference();
        await parachuteflow.verifyExperienceLevelTextDisplayed();
        await parachuteflow.fillExperienceLevel();
        await parachuteflow.certificateTextIsDisplayed();
        await parachuteflow.fillCertificates();
        await parachuteflow.showcaseTextIsDisplayed();
        await parachuteflow.uploadShowcaseFiles();
        await parachuteflow.previewAndPublishTextIsDisplayed();
        await parachuteflow.publishProfilepage();
        await parachuteflow.awsomeTextIsDisplayed();
        await parachuteflow.viewProfilepage();
        await parachuteflow.nannyProfileStatus();
        await admin.navigateToAdminLoginPage();
        await admin.parachuteAdminlogInSuccessfully()
        await admin.verifyDashboardisDisplayed();
        await admin.selectNannyOptionSideMenu();
        await admin.verifynanny();
    });
});