import {  click, clickAndNavigate, fill } from 'vasu-playwright-utils';
import { parachueNannyLoginCredentials } from '@testdata/parachute/Nanny/parachute-nanny-test-data';
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';
import { expectElementToBeVisible } from 'vasu-playwright-utils';


const emailAddress = `//*[@name='email']`;
const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: ' Log in ' });
const myAvailabilityText = `//*[contains(text(),'My availability')]`;
const updateAvailabilityText = `//*[contains(text(),'Update Availability')]`;
const startDate = `//*[@id='startdate']`;
const endDate = `//*[@id='enddate']`
const clickPlusIcon = `//*[@class='fa fa-plus-circle']`
const updateDatesButton = `//*[contains(text(),'Update')]`



export async function parachutelogInSuccessfully() {
    await fill(emailAddress, parachueNannyLoginCredentials.username);
    await fill(password(), parachueNannyLoginCredentials.password);
    await clickAndNavigate(login());
}

export async function myAvailabilityTextISDisplayed() {
    await expectElementToBeVisible(myAvailabilityText);
}


// Here update availability through My Availability link
export async function updateMyAvailability() {
    await click(myAvailabilityText)
}

export async function updateAvailabilityTextISDisplayed() {
    await expectElementToBeVisible(updateAvailabilityText);
}

export async function SelectDateAvailability() {
    await click(startDate)
    const currentDate = new Date().toISOString().split('T')[0];
    const currentDay = currentDate.split('-')[2];
    const currentDaySelector = `//span[contains(text(),'${currentDay}')]`;
    await click(currentDaySelector)
    await click(endDate)
    // selecting future dates for end date
    const numberOfDaysToAdd = 6; // Change this to select a different number of days in the future
    const futureDate = new Date(currentDate);
    futureDate.setDate(futureDate.getDate() + numberOfDaysToAdd);
    const futureDateStringSelector = `(//td//span[contains(text(),'${futureDate.getDate()}')])[1]`;
    await click(futureDateStringSelector)
    await click(clickPlusIcon)
    await click(updateDatesButton)
}

