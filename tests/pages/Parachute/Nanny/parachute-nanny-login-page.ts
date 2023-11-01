import {  clickAndNavigate, fill} from 'vasu-playwright-utils';
import { parachuteNannysignupSuccessCredentials, fillNannyAccountDetails } from '@testdata/parachute/Nanny/parachute-nanny-signup-test-data';
import { expectElementToBeHidden, expectElementToBeVisible } from 'vasu-playwright-utils';
import {  getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';


const emailAddress = `//*[@name='email']`;
const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: ' Log in ' });
const pendingStatus = `//*[contains(text(),' Pending verification')]`
const dashboardtext = `//*[contains(text(),'Welcome to your dashboard! Here you can manage eve')]`

export async function parachutelogInSuccessfully() {
    await fill(emailAddress, parachuteNannysignupSuccessCredentials.username);
    await fill(password(), fillNannyAccountDetails.password);
    await clickAndNavigate(login());
}

export async function nannyProfileStatus(){
    await expectElementToBeHidden(pendingStatus)
    await expectElementToBeVisible(dashboardtext)
}