const { test, expect } = require('@playwright/test');

const { loginUser } =
    require('../../test-data/users');

const { setupUser } =
    require('../helpers/auth');


test.describe('Login de usuário', () => {

    test('TC-008 - Deve permitir login com credenciais válidas', async ({ page }) => {

        await setupUser(page, loginUser);

        await page.goto('/login.html');

        await page.getByLabel('E-mail')
            .fill(loginUser.email);

        await page.getByLabel('Senha', { exact: true })
            .fill(loginUser.password);

        await page.getByTestId('login-submit')
            .click();

        await expect(
            page.getByText('Login realizado com sucesso!')
        ).toBeVisible();

    });

});

test('TC-009 - Deve impedir login com usuário inexistente', async ({ page }) => {

    await page.goto('/login.html');

    await page.getByLabel('E-mail')
        .fill('usuario.inexistente@example.com');

    await page.getByLabel('Senha', { exact: true })
        .fill('123456');

    await page.getByTestId('login-submit')
        .click();

    await expect(
        page.getByText('E-mail ou senha incorretos.')
    ).toBeVisible();

});

test('TC-010 - Deve impedir login com senha incorreta', async ({ page }) => {

    await setupUser(page, loginUser);

    await page.goto('/login.html');

    await page.getByLabel('E-mail')
        .fill(loginUser.email);

    await page.getByLabel('Senha', { exact: true })
        .fill('senha-incorreta');

    await page.getByTestId('login-submit')
        .click();

    await expect(
        page.getByText('E-mail ou senha incorretos.')
    ).toBeVisible();

});

test('TC-011 - Deve impedir login sem e-mail', async ({ page }) => {

    await page.goto('/login.html');

    await page.getByLabel('Senha', { exact: true })
        .fill('123456');

    await page.getByTestId('login-submit')
        .click();

    await expect(
        page.getByText('Informe seu e-mail.')
    ).toBeVisible();

});

test('TC-012 - Deve impedir login sem senha', async ({ page }) => {

    await page.goto('/login.html');

    await page.getByLabel('E-mail')
        .fill(loginUser.email);

    await page.getByTestId('login-submit')
        .click();

    await expect(
        page.getByText('Informe sua senha.')
    ).toBeVisible();

});