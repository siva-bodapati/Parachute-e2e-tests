import { click, clickAndNavigate, fill, gotoURL } from 'vasu-playwright-utils';
import { ParentCredentials, fillJobDetails } from '@testdata/parachute-test-data';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
//import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';

//const email = `//*[@name='email']`;
//const password = `//input[@placeholder='Password']`;
//const login = `//button[@type='submit']`;
const findANanny = `//*[@id="navbarSupportedContent"]/ul[1]/li[1]`;
const postAJob = `//*[@id="navbarSupportedContent"]/ul[1]/li[1]/div/a[2]`;
//const welcomeMessage = `//p[contains(text(),'Welcome to your dashboard! Here you can manage everything')]`;
const jobTitle = `//input[@name = 'title']`;
const nextButton1 = `(//button[contains(text(),'Next')])[1]`;

const alreadyBorn = `//input[@id='alreadyBorn']`;
const howLong = `//input[@id='howlong2']`;
const giveBirth = `//input[@id='CSection']`;
const babiesExpecting = `//input[@id='Twins']`;
const hoursDay = `//input[@id='hours10']`;
const areaName = `//span[contains(text(),'Area name')]`;
const areaNameMain = `//span[contains(text(),'Hong Kong Island')]`;
const areaNameSub = `//span[contains(text(),'Eastern District')]`;
const helper = `//input[@id='helperNo']`;
const pet = `//input[@id='petNo']`;
const nextButton2 = `(//button[contains(text(),'Next')])[2]`;
const language = `//input[@id='English']`;
const experience = `//input[@id='1020experience']`;
const description = `//textarea[@name='description']`;
const nextButton3 = `(//button[contains(text(),'Next')])[3]`;
const budget = `//input[@name='budget']`;
const nextButton4 = `(//button[contains(text(),'Next')])[4]`;
const submitJob = `//button[contains(text(),'Submit')]`;
const jobPostSuccessMessage = `//*[contains(text(),'Great job!')]`;
const viewJobPosting = `(//button[contains(text(),'View posting')])`;

const jobCard = `//*[@class = 'card']`;
const expectedJobTitle = fillJobDetails.jobTitle;
const jobTitleOnJobBoard = `//h6[@class= 'm-0']/a[1]`;



const viewJobBoard = `//*[@id="navbarSupportedContent"]/ul[1]/li[1]/div/a[3]`;
/*
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
*/
export async function ClickOnPostAJob() {
  await click(findANanny);
  await clickAndNavigate(postAJob);
}

export async function FillJobDetails() {
  await fill(jobTitle, fillJobDetails.jobTitle);
  await click(nextButton1);
  await click(alreadyBorn);
  await click(howLong);
  await click(giveBirth);
  await click(babiesExpecting);
  await click(hoursDay);
  await click(areaName);
  await click(areaNameMain);
  await click(areaNameSub);
  await click(helper);
  await click(pet);
  await click(nextButton2);
  await click(language);
  await click(experience);
  await fill(description, fillJobDetails.description);
  await click(nextButton3);
  await fill(budget, fillJobDetails.budget);
  await click(nextButton4);
  await click(submitJob);

}

export async function CheckJobPostSuccess() {
  await expectElementToBeVisible(jobPostSuccessMessage);

}

export async function GoToJobs() {
  await click(viewJobPosting);

}

export async function GoToJobBoard() {
  await click(findANanny);
  await click(viewJobBoard);

}


export async function VerifyJobInJobBoard() {
  await expectElementToBeVisible(jobTitleOnJobBoard);
  

}