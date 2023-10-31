//import { click } from 'vasu-playwright-utils';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
//import { getLocator } from 'vasu-playwright-utils';

const welcomeMessage = `//p[contains(text(),'Welcome to your dashboard! Here you can manage everything')]`;


export async function verifyLoginWelcomMessage() {
  await expectElementToBeVisible(welcomeMessage, { timeout: 12000 });
}

