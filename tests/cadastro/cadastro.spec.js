const { test, expect } = require('@playwright/test');

const {
    validUser,
    invalidEmailUser,
    shortPasswordUser,
    differentPasswordsUser,
    existingUser
} = require('../../test-data/users');

const {
    generateUniqueEmail
} = require('../../test-data/data-factory');

const {
    setupUser
} = require('../helpers/auth');

const {
    fillRegistrationForm
} = require('../helpers/registration');


// ======================================================
// CADASTRO DE USUÁRIO
// ======================================================

test.describe('Cadastro de usuário', () => {


    // ==================================================
    // FLUXO POSITIVO
    // ==================================================

    test.describe('Fluxo positivo', () => {

        test.beforeEach(async ({ page }) => {

            // ARRANGE - abrir página de cadastro
            await page.goto('/cadastro.html');

        });


        test('TC-001 - Deve permitir cadastrar um novo usuário', async ({ page }) => {

            // ==========================================
            // ARRANGE
            // ==========================================

            const user = {
                ...validUser,
                email: generateUniqueEmail()
            };


            // ==========================================
            // ACT
            // ==========================================

            await fillRegistrationForm(page, user);

            await page.getByTestId('register-submit')
                .click();


            // ==========================================
            // ASSERT
            // ==========================================

            await expect(
                page.getByText('Cadastro realizado com sucesso!')
            ).toBeVisible();

        });

    });


    // ==================================================
    // VALIDAÇÕES
    // ==================================================

    test.describe('Validações', () => {

        test.beforeEach(async ({ page }) => {

            // ARRANGE - abrir página de cadastro
            await page.goto('/cadastro.html');

        });


        // ==============================================
        // TC-002
        // ==============================================

        test('TC-002 - Deve impedir cadastro sem nome', async ({ page }) => {

            // ARRANGE

            await page.getByLabel('E-mail')
                .fill(generateUniqueEmail());

            await page.getByLabel('Senha', { exact: true })
                .fill(validUser.password);

            await page.getByLabel('Confirmar senha')
                .fill(validUser.password);


            // ACT

            await page.getByTestId('register-submit')
                .click();


            // ASSERT

            await expect(
                page.getByText('Informe seu nome completo.')
            ).toBeVisible();

        });


        // ==============================================
        // TC-003
        // ==============================================

        test('TC-003 - Deve impedir cadastro sem e-mail', async ({ page }) => {

            // ARRANGE

            await page.getByLabel('Nome completo')
                .fill(validUser.name);

            await page.getByLabel('Senha', { exact: true })
                .fill(validUser.password);

            await page.getByLabel('Confirmar senha')
                .fill(validUser.password);


            // ACT

            await page.getByTestId('register-submit')
                .click();


            // ASSERT

            await expect(
                page.getByText('Informe seu e-mail.')
            ).toBeVisible();

        });


        // ==============================================
        // TC-004
        // ==============================================

        test('TC-004 - Deve impedir cadastro com e-mail inválido', async ({ page }) => {

            // ARRANGE

            const user = invalidEmailUser;

            await page.locator('#registerForm')
                .evaluate(form => form.noValidate = true);

            await fillRegistrationForm(page, user);


            // ACT

            await page.getByTestId('register-submit')
                .click();


            // ASSERT

            await expect(
                page.getByText('Informe um e-mail válido.')
            ).toBeVisible();

        });


        // ==============================================
        // TC-005
        // ==============================================

        test('TC-005 - Deve impedir cadastro com senha menor que 6 caracteres', async ({ page }) => {

            // ARRANGE

            const user = {
                ...shortPasswordUser,
                email: generateUniqueEmail()
            };

            await fillRegistrationForm(page, user);


            // ACT

            await page.getByTestId('register-submit')
                .click();


            // ASSERT

            await expect(
                page.getByText(
                    'A senha deve possuir pelo menos 6 caracteres.'
                )
            ).toBeVisible();

        });


        // ==============================================
        // TC-006
        // ==============================================

        test('TC-006 - Deve impedir cadastro com senhas diferentes', async ({ page }) => {

            // ARRANGE

            const user = {
                ...differentPasswordsUser,
                email: generateUniqueEmail()
            };

            await fillRegistrationForm(page, user);


            // ACT

            await page.getByTestId('register-submit')
                .click();


            // ASSERT

            await expect(
                page.getByText('As senhas não coincidem.')
            ).toBeVisible();

        });

    });


    // ==================================================
    // ESTADO PRÉ-EXISTENTE
    // ==================================================

    test.describe('Estado pré-existente', () => {

        test.beforeEach(async ({ page }) => {

            // ARRANGE - criar usuário previamente cadastrado
            await setupUser(page, existingUser);

            // ARRANGE - abrir página de cadastro
            await page.goto('/cadastro.html');

        });


        // ==============================================
        // TC-007
        // ==============================================

        test('TC-007 - Deve impedir cadastro com e-mail já cadastrado', async ({ page }) => {

            // ARRANGE

            await page.getByLabel('Nome completo')
                .fill('Outro Usuário');

            await page.getByLabel('E-mail')
                .fill(existingUser.email);

            await page.getByLabel('Senha', { exact: true })
                .fill(existingUser.password);

            await page.getByLabel('Confirmar senha')
                .fill(existingUser.password);


            // ACT

            await page.getByTestId('register-submit')
                .click();


            // ASSERT

            await expect(
                page.getByText('Este e-mail já está cadastrado.')
            ).toBeVisible();

        });

    });

});