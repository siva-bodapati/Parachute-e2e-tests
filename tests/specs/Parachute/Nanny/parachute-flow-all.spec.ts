import { test } from '@pagesetup';
import * as nannySignup from '@pages/Parachute/Nanny/Parachute-nanny-signup-page';
import * as admin from '@pages/Parachute/Parachute-admin-actions'
import * as NannyLogin from '@pages/Parachute/Nanny/parachute-nanny-login-page'
import * as nannyAvailability from '@pages/Parachute/Nanny/Parachute-nanny-availability';
import * as editProfile from '@pages/Parachute/Nanny/parachute-nanny-edit-profile'
import * as nannyApplyJob from '@pages/Parachute/Nanny/parachute-nanny-apply-job'
import * as postAJob from '@pages/Parachute/Parent/parachute-parent-Postjob'
import * as inactiveJob from '@pages/Parachute/Parent/parachute-parent-Inactivepost'
import * as nannyChat from '@pages/Parachute/Nanny/parachute-nanny-chat'
import * as parentChat from '@pages/Parachute/Parent/parachute-parent-chat'

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
        await nannySignup.logoutprofile();
        await admin.navigateToAdminLoginPage();
        await admin.parachuteAdminlogInSuccessfully()
        await admin.verifyDashboardisDisplayed();
        await admin.selectNannyOptionSideMenu();
        await admin.verifynanny();
        await admin.logoutAdmin();
        await nannySignup.navigateToParachuteLoginPage();
        await nannySignup.clicklogin();
        await NannyLogin.parachutelogInSuccessfully()
        await NannyLogin.nannyProfileStatus();
    });
    test('Parchute tests - Nanny availability', async () => {
        await nannySignup.navigateToParachuteLoginPage();
        await nannySignup.acceptcookies();
        await nannySignup.clicklogin();
        await nannyAvailability.parachutelogInSuccessfully();
        await nannyAvailability.myAvailabilityTextISDisplayed();
        await nannyAvailability.updateMyAvailability();
        await nannyAvailability.updateAvailabilityTextISDisplayed();
        await nannyAvailability.SelectDateAvailability();

    });
    test('Parchute tests - Nanny editprofile', async () => {
        await nannySignup.navigateToParachuteLoginPage();
        await nannySignup.acceptcookies();
        await nannySignup.clicklogin();
        await nannyAvailability.parachutelogInSuccessfully();
        await editProfile.myProfileTextISDisplayed();
        await editProfile.clickEditProfileButton();
        await editProfile.verifyNannyDisplayName();
        await editProfile.generalInfoTextISDisplayed();
        await editProfile.fillGeneralInfo();
        await editProfile.verifyfilledGeneralInfo();
        await editProfile.fillExpectedSalary();
        await editProfile.filleditabout();
        await editProfile.changeServiceArea();
        await editProfile.editEmployementPreference();
        await editProfile.editprofiledetails();
        await editProfile.editcertificates();
        await editProfile.editshowcase();
        await editProfile.saveAndviewProfilepage();
        await editProfile.verifyViewProfile();
        await editProfile.clickDashboardIcon();
        await editProfile.verifyInDashboardMyProfile();

    });
    test('Parchute tests - Nanny deletecertificates', async () => {
        await nannySignup.navigateToParachuteLoginPage();
        await nannySignup.acceptcookies();
        await nannySignup.clicklogin();
        await editProfile.deleteCretificateCredentials();
        await editProfile.myProfileTextISDisplayed();
        await editProfile.clickEditProfileButton();
        await editProfile.deletecertificates();
        
    });
    test('Parchute tests - Nanny ApplyJob', async () => {
        await nannySignup.navigateToParachuteLoginPage();
        await nannySignup.acceptcookies();
        await nannySignup.clicklogin(); 
        await postAJob.ParentlogInSuccessfully();
        await postAJob.verifyLoginWelcomMessage();
        await postAJob.ClickOnPostAJob();
        await postAJob.FillJobDetails();
        await postAJob.CheckJobPostSuccess();
        await nannySignup.logoutprofile();
        await nannyAvailability.parachutelogInSuccessfully();
        await nannyApplyJob.navigateToViewJobBoard();
        await nannyApplyJob.verifyJobName();
        await nannyApplyJob.clickApplyButtonInJobView();
        await nannyApplyJob.clickapplyButtonInJobDetails();
        await nannyApplyJob.verifyTermsOfUseText();
        await nannyApplyJob.checkTermsCheckBox();
        await nannyApplyJob.verifyApplyJobText();
        await nannyApplyJob.verifySalaryRequirementtext();
        await nannyApplyJob.fillApplyJobDetails();
        await nannyApplyJob.verifyAppliedButton();
        await editProfile.clickDashboardIcon();
        await nannyApplyJob.clickMyJobsLink();
        await nannySignup.logoutprofile();
        await postAJob.ParentlogInSuccessfully();
        await postAJob.verifyLoginWelcomMessage();
        await inactiveJob.clickMyPostings();
        await inactiveJob.verifyJobNameInParent()
        await inactiveJob.inActiveJob();
        await inactiveJob.ClickInactiveTab()
        await inactiveJob.verifyJobNameInInActiveTab()
        await nannySignup.logoutprofile();
    });
    test('Parchute tests - chatScenario', async () => {
        await nannySignup.navigateToParachuteLoginPage();
        await nannySignup.acceptcookies();
        await nannySignup.clicklogin(); 
        await nannyChat.nannyChatlogInSuccessfully();
        await nannyChat.clickChaticon();
        await nannyChat.selectChatUser();
        await nannyChat.fillmessage();
        await nannyChat.clickSendMessageButton();
        await nannyChat.verifySendedMessage();
        await nannyChat.messageStatusSent();
        await nannySignup.logoutprofile();
        await parentChat.parentChatlogInSuccessfully();
        await parentChat.clickChaticon();
        await parentChat.selectChatUser();
        await parentChat.parentVerifyNannySendedMessage();
        await parentChat.fillmessage();
        await parentChat.clickSendMessageButton();
        await parentChat.verifySendedMessage();
        await parentChat.messageStatusSent();
        await nannySignup.logoutprofile();
        await nannyChat.nannyChatlogInSuccessfully();
        await nannyChat.clickChaticon();
        await nannyChat.selectChatUser();
        await nannyChat.nannyVerifyParentSendedMessage();
        await nannySignup.logoutprofile();
    });

});