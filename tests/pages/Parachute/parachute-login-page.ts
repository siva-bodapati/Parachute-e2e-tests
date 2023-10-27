import { click, clickAndNavigate, fill, gotoURL } from 'vasu-playwright-utils';
import { parachuteParentLoginSuccessCredentials, parachueParentfailureLoginCredentials, parachueParentEmailRequiredCredentials, parachueParentPasswordRequiredCredentials } from '@testdata/parachute-login-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';


const emailAddress = `//*[@name='email']`;
const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: ' Log in ' });
const errorMessage = `//*[contains(text(), 'Email not registered')]`;
const loginSuccessvalidation = `(//*[@class='mb-0'])[2]`
const emailRequired = `//*[contains(text(), ' Email is required. ')]`
const passwordRequired = `//*[contains(text(), ' Password is required.. ')]`



export async function navigateToParachuteLoginPage() {
    await gotoURL('http://54.215.252.64:9065/en/login');
}

export async function parachutelogInSuccessfully() {
    await fill(emailAddress, parachuteParentLoginSuccessCredentials.username);
    await fill(password(), parachuteParentLoginSuccessCredentials.password);
    await clickAndNavigate(login());
}

export async function parachutefailureLogin() {
    await fill(emailAddress, parachueParentfailureLoginCredentials.username);
    await fill(password(), parachueParentfailureLoginCredentials.password);
    await click(login());
}

export async function parachuteEmailRequired() {
    await fill(emailAddress, parachueParentEmailRequiredCredentials.username);
    await fill(password(), parachueParentEmailRequiredCredentials.password);
    await click(login());
}

export async function parachutePasswordRequired() {
    await fill(emailAddress, parachueParentPasswordRequiredCredentials.username);
    await fill(password(), parachueParentPasswordRequiredCredentials.password);
    await click(login());
}

export async function verifyErrorMessageForFailureLogin() {
    await expectElementToBeVisible(errorMessage);
}

export async function verifyLoginPageisDisplayed() {
    await expectElementToBeVisible(loginSuccessvalidation);
}

export async function emailRequiredErrorMessage() {
    await expectElementToBeVisible(emailRequired);
}

export async function passwordRequiredErrorMessage() {
    await expectElementToBeVisible(passwordRequired);
}