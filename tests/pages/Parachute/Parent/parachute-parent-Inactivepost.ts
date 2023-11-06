import { click, clickAndNavigate, fill, gotoURL, getText } from 'vasu-playwright-utils';
import { ParentCredentials, fillJobDetails } from '@testdata/parachute-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import { expect } from '@pagesetup';

const email = `//*[@name='email']`;
const password = `//input[@placeholder='Password']`;
const login = `//button[@type='submit']`;
const welcomeMessage = `//p[contains(text(),'Welcome to your dashboard! Here you can manage everything')]`;
const mypostings = `//h3[contains(text(),'My Postings')]`
const CreatedJobname = `(//h6//a[@href = 'javascript:'])[1]`
const clickInActiveIcon = `(//i[@class='pi pi-eye'])[1]`
const clickInactiveTab = `//span[contains(text(),'Inactive')]`
const jobNameInactiveTab = `(//h6//a[@href = 'javascript:'])[1]`

export async function verifyLoginWelcomMessage() {
    await expectElementToBeVisible(welcomeMessage, { timeout: 20000 });
}

export async function navigateToParachuteLoginPage() {
    await gotoURL('http://54.215.252.64:9065/en/login');
}

export async function ParentlogInSuccessfully() {
    await fill(email, ParentCredentials.email);
    await fill(password, ParentCredentials.password);
    await clickAndNavigate(login, { timeout: 5000 });
}

export async function clickMyPostings() {
    await click(mypostings)
}

export async function verifyJobNameInParent() {
    const expectJobName = await getText(CreatedJobname)
    const actualJobName = await (fillJobDetails.jobTitle)
    expect(expectJobName).toMatch(actualJobName)
}

export async function inActiveJob(){
    await click(clickInActiveIcon)
}

export async function ClickInactiveTab(){
    await click (clickInactiveTab)
}

export async function verifyJobNameInInActiveTab() {
    const expectJobName = await getText(jobNameInactiveTab)
    const actualJobName = await (fillJobDetails.jobTitle)
    expect(expectJobName).toMatch(actualJobName)
}
