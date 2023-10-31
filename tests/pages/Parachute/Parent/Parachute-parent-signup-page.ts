import { click, clickAndNavigate, fill, gotoURL, uploadFiles } from 'vasu-playwright-utils';
import { ParentSignupCredentials, fillParentAccountDetails } from '@testdata/parachute-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import { getLocatorByRole } from 'vasu-playwright-utils';




const acceptcookie = `//*[contains(text(),' Yum, I accept all cookies ')]`
const emailAddress = `//*[@name='email']`;
const loginHeader = `(//*[@role='button'][contains(text(), ' Log in ')])[1]`
const signupbutton = `//*[contains(text(), 'Sign up')]`
const continuewithemail = () => getLocatorByRole('button', { name: 'Continue with email' });
const VerifyAccountSetup = `//*[contains(text(), 'Complete your account setup')]`
const firstname = `//*[@id='exampleInputEmail1']`
const lastname = `//*[@id='exampleInputPassword1']`
const createAPassword = `//*[@formcontrolname='password']`
const reEnterPassword = `//*[@formcontrolname='confirm_password']`
const registerAsParent = `//*[contains(text(),'Hire a confinement nanny')]`
const clickCountryCode = `//*[@formcontrolname = 'country_code']`
const enterphonenumber = `//*[@formcontrolname = 'phone_number']`
const languagepreference = `//*[@for = 'English']`
const acceptterms = `//*[@for='same-address']`
// const selectCountryCode = `//*[@class = 'dropdown-item'][contains(text(), ' China(+86)')]`
const clickSubmit = () => getLocatorByRole('button', { name: 'Submit' });

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
export async function clicksignupbutton() {
    await click(signupbutton);
}

export async function enterparentemail() {
    await fill(emailAddress, ParentSignupCredentials.email);
    await clickAndNavigate(continuewithemail());
}

export async function verifyCompleteVerifyAccountSetup() {
    await expectElementToBeVisible(VerifyAccountSetup);
}

export async function fillparentsignupaccountdetails() {
    await fill(firstname, fillParentAccountDetails.firstName)
    await fill(lastname, fillParentAccountDetails.lastName)
    await fill(createAPassword, fillParentAccountDetails.password)
    await fill(reEnterPassword, fillParentAccountDetails.confirmPassword)
    await click(registerAsParent)
    await click(acceptterms)
    await click(clickCountryCode)
    // await selectByValue(clickCountryCode, 'China(+86)')
    await fill(enterphonenumber, fillParentAccountDetails.phonenumber)
    await click(languagepreference)
    await clickAndNavigate(clickSubmit())

}

