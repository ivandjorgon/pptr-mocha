export default class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(user_id, user_password) {
        await this.page.waitAndType('#user_login', 'username');
        await this.page.waitAndType('#user_password', 'password');
        await this.page.waitAndClick('.btn-primary');
    }
}