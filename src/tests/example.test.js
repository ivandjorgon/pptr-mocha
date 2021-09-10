import { expect } from "chai";
import { step } from "mocha-steps";
import Page from '../builder'
import LoginPage from "../pages/LoginPage";

describe('Mocha steps tests', () => {
    let page
    let loginPage

    before(async () => {
        page = await Page.build('Desktop');
        loginPage = await new LoginPage(page);
    })

    after(async () => {
        await page.close();
    });

    step('should load online banking menu page', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        expect(await page.isElementVisible('#signin_button')).to.be.true;
    });

    step('should display login form', async () => {
        await page.waitAndClick('#signin_button');
        expect(await page.isElementVisible('#login_form')).to.be.true;
        expect(await page.isElementVisible('#signin_button')).to.be.false;
    });

    step('should not login to application', async () => {
        await loginPage.login('username', 'password');
        expect(await page.isElementVisible('.nav-tabs')).to.be.false;
    });

    step('should have text More Services under Online Banking section', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        expect(await page.getText('#online-banking')).to.equal('More Services');
    });

    step('should have 3 nav bar links', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        expect(await page.getCount('#pages-nav > li')).to.equal(3);
    });

});