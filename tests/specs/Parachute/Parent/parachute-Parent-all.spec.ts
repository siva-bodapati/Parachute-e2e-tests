import { test } from '@pagesetup';
import * as parentSignup from '@pages/Parachute/parent/Parachute-parent-signup-page';


test.describe.configure({ mode: 'serial' });

test.describe('parachute Parent user all scenarios', () => {
    test('Parchute tests - Parent signup', async () => {
        await parentSignup.navigateToParachuteLoginPage();
        await parentSignup.acceptcookies();
        await parentSignup.clicklogin();
        await parentSignup.clicksignupbutton();
        await parentSignup.enterparentemail();
        await parentSignup.fillparentsignupaccountdetails();

    });
});