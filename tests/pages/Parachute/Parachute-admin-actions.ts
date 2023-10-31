import {  click, clickAndNavigate, fill, getText, gotoURL } from 'vasu-playwright-utils';
import { parachuteAdminCredentials } from '@testdata/parachute/Nanny/parachute-admin-actions-test-data';
import { parachuteNannysignupSuccessCredentials } from '@testdata/parachute/Nanny/parachute-nanny-signup-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import {  getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';

const emailAddress = `//*[@name='email']`;
const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));
const signIn = () => getLocatorByRole('button', { name: 'Sign In' });
const dashboardText = `//h1[contains(text(), 'Dashboard')]`
const nannyoption = `//p[contains(text(), 'Nanny')]`
const getEmail = `(//td[@class='text-center'])[3]`
const changeStatus = `(//td[@class='text-center']//span)[2]`
const VerifyText = `(//*[contains(text(), 'Verified')])[1]`
const adminLogout = `//*[@class='fas fa-sign-out-alt']`





export async function navigateToAdminLoginPage() {
    await gotoURL('http://54.215.252.64:9065/admin/#/');
}

export async function parachuteAdminlogInSuccessfully() {
    await fill(emailAddress, parachuteAdminCredentials.username);
    await fill(password(), parachuteAdminCredentials.password);
    await clickAndNavigate(signIn());
}

export async function verifyDashboardisDisplayed() {
    await expectElementToBeVisible(dashboardText);
}

export async function selectNannyOptionSideMenu(){
    await click(nannyoption)
}

export async function verifynanny(){
    const expectEmail = await getText(getEmail)
    const actualEmail = await parachuteNannysignupSuccessCredentials.username
    if(expectEmail == actualEmail){
        await click(changeStatus)
        await expectElementToBeVisible(VerifyText);
    }
}

export async function logoutAdmin(){
    await click(adminLogout)
}