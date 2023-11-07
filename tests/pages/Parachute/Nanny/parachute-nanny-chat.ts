import {  click, clickAndNavigate, expectElementToBeVisible, fill, getText, waitForElementToBeVisible } from 'vasu-playwright-utils';
import { nannyChatCredentials, nannychatMessage, parentchatMessage } from '@testdata/parachute/Nanny/parachute-nanny-test-data';
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';
import { expect } from '@pagesetup';


const emailAddress = `//*[@name='email']`;
const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: ' Log in ' });
const chatIcon = `//header/nav[1]/div[1]/ul[2]/li[2]/a[1]`
const selectUser = `//span[contains(text(),'rdx rdx')]`
const nannyTypeMessage = `//*[@contenteditable='true']`
const sendMessage = `//i[@class='pi pi-send']`
const checkSendedMessage = `(//div[@class='messageText']//span)[last()]`
const nannySentMessageStatus = `(//div[contains(text(),'sent')])[last()]`


export async function nannyChatlogInSuccessfully() {
    await waitForElementToBeVisible(emailAddress)
    await fill(emailAddress, nannyChatCredentials.username);
    await fill(password(), nannyChatCredentials.password);
    await clickAndNavigate(login());
    
}

export async function clickChaticon(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await click(chatIcon)
}

export async function selectChatUser(){
    await click(selectUser)
    await new Promise((resolve) => setTimeout(resolve, 2000));
}

export async function fillmessage(){
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    await fill(nannyTypeMessage, nannychatMessage.nannyMessage)
}

export async function clickSendMessageButton(){
    await click(sendMessage)
    await new Promise((resolve) => setTimeout(resolve, 2000));
}

export async function verifySendedMessage(){
    const expectSendedMessage = await getText(checkSendedMessage)
    const actualSendedMessage = await (nannychatMessage.nannyMessage)
    expect(expectSendedMessage).toMatch(actualSendedMessage)
}

export async function messageStatusSent(){
    await expectElementToBeVisible(nannySentMessageStatus)
}

export async function nannyVerifyParentSendedMessage(){
    const expectSendedMessage = await getText(checkSendedMessage)
    const actualSendedMessage = await (parentchatMessage.parentMessage)
    expect(expectSendedMessage).toMatch(actualSendedMessage)
}
