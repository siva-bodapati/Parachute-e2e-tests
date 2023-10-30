import { click, clickAndNavigate, fill, gotoURL } from 'vasu-playwright-utils';
import { ParentCredentials, NannyCredentials } from '../../testdata/parachute-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
//import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';

const email = `//*[@name='email']`;
const password = `//input[@placeholder='Password']`;
const login = `//button[@type='submit']`;
const emailManMessage = `//*[contains(text(), ' Email is required. ')]`;
const passwordManMessage = `//*[contains(text(), ' Password is required.. ')]`;

export async function navigateToParachuteLoginPage() {
  await gotoURL('http://54.215.252.64:9065/en/login');
}

export async function ParentlogInSuccessfully() {
  await fill(email, ParentCredentials.email);
  await fill(password, ParentCredentials.password);
  await clickAndNavigate(login);
}

export async function NannylogInSuccessfully() {
  await fill(email, NannyCredentials.email);
  await fill(password, NannyCredentials.password);
  await clickAndNavigate(login);
}
export async function MadatoryCheckForLoginPage() {
  await click(login);
}

export async function verifyMandatoryMessageForLoginPage() {
  await expectElementToBeVisible(emailManMessage);
  await expectElementToBeVisible(passwordManMessage);
}

export async function verifyLoginPageisDisplayed() {
  await expectElementToBeVisible(email);
}
