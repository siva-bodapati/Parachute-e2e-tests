import {  check, click, clickAndNavigate, fill, getText, scrollLocatorIntoView, selectByText, selectByValue, waitForElementToBeVisible } from 'vasu-playwright-utils';
import { nannyApplyJobData, parachueNannyLoginCredentials, } from '@testdata/parachute/Nanny/parachute-nanny-test-data';
import{fillJobDetails} from '@testdata/parachute-test-data'
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import { expect } from '@pagesetup';

const emailAddress = `//*[@name='email']`;
const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: ' Log in ' });
const hoverFindEmploement = `//header/nav[1]/div[1]/ul[1]/li[1]`
const clickViewJobBoard = `//header/nav[1]/div[1]/ul[1]/li[1]/div[1]/a[1]`
const getJobName = `(//h6//a[@href = 'javascript:'])[1]`
const applyButtonInJobView = `(//*[contains(text(),'Apply')])[1]`
const applyButtonInJobDetails = `(//*[@class='ml-auto']//*[contains(text(),'Apply')])[last()]`
const termsOfUse = `(//*[contains(text(),'Terms of Use')])[1]`
const termsCheckBox = `//*[@for='termsCheck']`
const applyJobText = `(//*[contains(text(),'Apply for this job')])[1]`
const salaryRequirementtext = `(//*[contains(text(),'Salary requirement')])[1]`
const indicateSalary = `//*[@name='salary']`
// const indicateHours = `//*[@name='hour']`
// const selectHours = `//select//option[contains(text(),'8 hours')]`
const workingDays = `//*[@name='days']`
const coverLetter = `//*[@class='form-control rounded']`
const applyButtonInApplyJob = `//div[3]//button[@class='btn btn-orange btn-rounded m-2']`
const appliedButton = `(//button[contains(text(), 'Applied')])[1]`


export async function parachutelogInSuccessfully() {
    await waitForElementToBeVisible(emailAddress)
    await fill(emailAddress, parachueNannyLoginCredentials.username);
    await fill(password(), parachueNannyLoginCredentials.password);
    await clickAndNavigate(login());
    
}

export async function navigateToViewJobBoard(){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await waitForElementToBeVisible(hoverFindEmploement)
    await click(hoverFindEmploement)
    await waitForElementToBeVisible(clickViewJobBoard)
    await click(clickViewJobBoard)
}

export async function verifyJobName(){
    const expectJobName = await getText(getJobName)
    const actualJobName = await (fillJobDetails.jobTitle)
    expect(expectJobName).toMatch(actualJobName)
}

export async function clickApplyButtonInJobView(){
    await click(applyButtonInJobView)
    
}
export async function clickapplyButtonInJobDetails(){
    await waitForElementToBeVisible(applyButtonInJobDetails)
    await click(applyButtonInJobDetails)
}

export async function verifyTermsOfUseText(){
    await expectElementToBeVisible(termsOfUse)
}

export async function checkTermsCheckBox(){
    await check(termsCheckBox)
    
}

export async function verifyApplyJobText(){
    await expectElementToBeVisible(applyJobText)
}

export async function verifySalaryRequirementtext(){
    await expectElementToBeVisible(salaryRequirementtext)
}

export async function fillApplyJobDetails(){
    await fill(indicateSalary, nannyApplyJobData.expectedSalary)
    // await click(indicateHours)
    await selectByText('[name="hour"]', 'Part-Time')
    // await click(selectHours)
    // await selectByValue(indicateHours, selectHours)
    await fill(workingDays, nannyApplyJobData.workingHours)
    await fill(coverLetter, nannyApplyJobData.coverLetter)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await click(applyButtonInApplyJob)
}

export async function verifyAppliedButton(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await expectElementToBeVisible(appliedButton)
}



