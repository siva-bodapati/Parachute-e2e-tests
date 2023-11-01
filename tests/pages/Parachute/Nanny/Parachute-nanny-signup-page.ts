import { click, clickAndNavigate, fill, gotoURL, hover, uploadFiles } from 'vasu-playwright-utils';
import { parachuteNannysignupSuccessCredentials, fillNannyAccountDetails } from '@testdata/parachute/Nanny/parachute-nanny-signup-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import {  getLocatorByRole } from 'vasu-playwright-utils';



const acceptcookie = `//*[contains(text(),' Yum, I accept all cookies ')]`
const emailAddress = `//*[@name='email']`;
const loginHeader = `(//*[@role='button'][contains(text(), ' Log in ')])[1]`
const signupbutton = `//*[contains(text(), 'Sign up')]`
const VerifyAccountSetup = `//*[contains(text(), 'Complete your account setup')]`
const firstname = `//*[@id='exampleInputEmail1']`
const lastname = `//*[@id='exampleInputPassword1']`
const createAPassword = `//*[@formcontrolname='password']`
const reEnterPassword = `//*[@formcontrolname='confirm_password']`
const registerAsNanny = `//*[contains(text(),'Register as a confinement nanny')]`
const acceptterms = `//*[@for='same-address']`
const clickCountryCode = `//*[@formcontrolname = 'country_code']`
// const selectCountryCode = `//*[@class = 'dropdown-item'][contains(text(), ' China(+86)')]`
const clickSubmit = () => getLocatorByRole('button', { name: 'Submit' });
const getVerified = `//*[contains(text(),'Get verified')]`
const enterphonenumber =`//*[@formcontrolname = 'mobile']`
const preferedLanguage = `//*[@for = 'English']`
const foundationCertificate = `//*[@for = 'save-info']`
const completedAccountSetup = `//*[contains(text(), 'Thank you for your submission!')]`
const editYourProfileButton = `//*[contains(text(), 'Edit your profile')]`
const profileCompleteText = `//*[contains(text(), ' Complete your profile ')]`
const nannyProfileImage = `//*[@name= 'image']`
const nannyDisplayName = `//*[@formcontrolname='displayname']`
const nannyHeadline = `//*[@formcontrolname='headline']`
const nannyIntro = `//*[@formcontrolname='introduction']`
const firstImpressionNextbutton = `(//*[contains(text(),' Next ')])[1]`
const basicInformationText = `//*[@class='text-green'][contains(text(),' Basic Information ')]`
const nannysalary = `//*[@formcontrolname='salary']`
const selectArea = `//*[@id='611b8a7fc7ee7c242cb9a49a']`
const selectLanguage = `//*[@id='english']`
const nannyAge = `//*[@formcontrolname='age']`
const basicinformationNextbutton = `(//*[contains(text(),' Next ')])[2]`
const employementPreferenceText = `//*[@class='text-green'][contains(text(),' Employment preference ')]`
const partime = `//*[@id='partTimeYes']`
const HoursService = `//*[@id='fullDayYes']`
const overseasEmployement = `//*[@id='overseasEmpYes']`
const pets = `//*[@id='petsYes']`
const helpers = `//*[@id='helpersYes']`
const employeePreferenceNextbutton = `(//*[contains(text(),' Next ')])[3]`
const experienceLevelText = `//*[@class='text-green'][contains(text(),' Experience level ')]`
const experienceYear = `//*[@name='year']`
const experienceMonth = `//*[@name='months']`
const experienceInCarredBabies = `//*[@name='babies']`
const caringtwins = `//*[@id='careTwinsYes']`
const experienceInCooking = `//*[@id='cookingYes']`
const experienceLevelNextbutton = `(//*[contains(text(),' Next ')])[4]`
const certificatesText = `//*[@class='text-green'][contains(text(),' Certificates ')]`
const certificateAddIcon = `//*[@class='pi pi-plus']`
const certificateTitle = `//*[@formcontrolname='title']`
const certificateYear = `//*[@formcontrolname='yearobt']`
const attachment = `//input[@formcontrolname='attachement']`
const uploadInCertificate = `(//*[contains(text(),' Upload ')])[1]`
const certificateNextButton = `(//*[contains(text(),' Next ')])[5]`
const showcaseText = `//*[@class='text-green'][contains(text(),' Showcase ')]`
const addAPhotoButton = `//*[@class='fa fa-camera']`
const uploadInShowCase = `//*[@name='showcasefile']`
const uploadButtonInShowCase = `(//*[contains(text(),'Upload')])[2]`
const showcaseNextButton = `(//*[contains(text(),' Next ')])[6]`
const previewAndPublishText = `//*[@class='text-green'][contains(text(),' Preview and Publish ')]`
const publishProfile = `//*[contains(text(),'Publish profile')]`
const awsomeText = `//*[contains(text(),' Awesome! ')]`
const viewProfileButton = `//*[contains(text(),'View profile')]`
const pendingStatus = `//*[contains(text(),' Pending verification')]`
const profiledropdown = `//*[@id='imgappend']`
const logout = `(//*[contains(text(), 'Log out')])[2]`

const continuewithemail = () => getLocatorByRole('button', { name: 'Continue with email' });
// const next = () => getLocatorByRole('button', { name: ' Next ' });
// const country = () => getLocatorByRole('option').filter({hasText: ' China(+86)'});

// const errorMessage = `//*[contains(text(), 'Email not registered')]`;
// const loginSuccessvalidation = `(//*[@class='mb-0'])[2]`
// const emailRequired = `//*[contains(text(), ' Email is required. ')]`
// const passwordRequired = `//*[contains(text(), ' Password is required.. ')]`
// const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));



export async function navigateToParachuteLoginPage() {
    await gotoURL('http://54.215.252.64:9065/en');
}

export async function acceptcookies() {
    await click(acceptcookie);
}

//click login button in header
export async function clicklogin() {
    await click(loginHeader)
}

//click signup button in login page
export async function clicksignupbutton(){
    await click(signupbutton);
}

export async function enternannyemail() {
    await fill(emailAddress, parachuteNannysignupSuccessCredentials.username);
    await clickAndNavigate(continuewithemail());
}

export async function verifyCompleteVerifyAccountSetup() {
    await expectElementToBeVisible(VerifyAccountSetup);
}

export async function fillnannysignupaccountdetails(){
    await fill(firstname, fillNannyAccountDetails.firstName)
    await fill(lastname, fillNannyAccountDetails.lastName)
    await fill(createAPassword, fillNannyAccountDetails.password)
    await fill(reEnterPassword, fillNannyAccountDetails.confirmPassword)
    await click(registerAsNanny)
    await click(acceptterms)
    await clickAndNavigate(clickSubmit())
    await clickAndNavigate(getVerified)
    await click(clickCountryCode)
    // await selectByValue(clickCountryCode, 'China(+86)')
    await fill(enterphonenumber, fillNannyAccountDetails.phonenumber)
    await click(preferedLanguage)
    await click(foundationCertificate)
    await clickAndNavigate(clickSubmit())
    
}

export async function verifyCompleteAccountSetup() {
    await expectElementToBeVisible(completedAccountSetup);
}

export async function editNannyprofile(){
    await click(editYourProfileButton)

}

export async function completeYourProfile() {
    await expectElementToBeVisible(profileCompleteText);
}

export async function fillFirstImpressionPage(){
    // await click(nannyProfileImage)
    await uploadFiles(nannyProfileImage, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\nanny.jpg')
    await fill(nannyDisplayName, fillNannyAccountDetails.displayname)
    await fill(nannyHeadline, fillNannyAccountDetails.headline)
    await fill(nannyIntro, fillNannyAccountDetails.intro)
    await click(firstImpressionNextbutton)
}

export async function verifyBasicInformationTextDisplayed() {
    await expectElementToBeVisible(basicInformationText);
}

export async function fillBasicInformation(){
    await fill(nannysalary, fillNannyAccountDetails.salary)
    await click(selectArea)
    await click(selectLanguage)
    await fill(nannyAge, fillNannyAccountDetails.age)
    await click(basicinformationNextbutton)
}

export async function verifyEmployementPreferenceTextDisplayed() {
    await expectElementToBeVisible(employementPreferenceText);
}

export async function fillEmployementPreference(){
    await click(partime)
    await click(HoursService)
    await click(overseasEmployement)
    await click(pets)
    await click(helpers)
    await click(employeePreferenceNextbutton)
}

export async function verifyExperienceLevelTextDisplayed() {
    await expectElementToBeVisible(experienceLevelText);
}

export async function fillExperienceLevel(){
    await fill(experienceYear, fillNannyAccountDetails.year)
    await fill(experienceMonth, fillNannyAccountDetails.month)
    await fill(experienceInCarredBabies, fillNannyAccountDetails.caredbabies)
    await click(caringtwins)
    await click(experienceInCooking)
    await click(experienceLevelNextbutton)
}

export async function certificateTextIsDisplayed(){
    await expectElementToBeVisible(certificatesText); 
}

export async function fillCertificates(){
    await click(certificateAddIcon)
     await fill(certificateTitle, fillNannyAccountDetails.Title)
     await fill(certificateYear, fillNannyAccountDetails.docyear)
     await uploadFiles(attachment, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\nanny.jpg')
     await click(uploadInCertificate)
     await click(certificateNextButton)
}

export async function showcaseTextIsDisplayed(){
    await expectElementToBeVisible(showcaseText); 
}

export async function uploadShowcaseFiles(){
    await click(addAPhotoButton)
    // console.log(208)
    await uploadFiles(uploadInShowCase, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\nanny.jpg')
    await click(uploadButtonInShowCase)
    await click(showcaseNextButton)
}

export async function previewAndPublishTextIsDisplayed(){
    await expectElementToBeVisible(previewAndPublishText); 
}

export async function publishProfilepage(){
    await click(publishProfile)
}

export async function awsomeTextIsDisplayed(){
    await expectElementToBeVisible(awsomeText); 
}

export async function viewProfilepage(){
    await click(viewProfileButton)
}

export async function nannyProfileStatus(){
    await expectElementToBeVisible(pendingStatus)
}

export async function logoutNannyprofile(){
    await hover(profiledropdown)
    await click(logout)
}
