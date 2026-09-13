async function fillRegistrationForm(page, user) {

    await page.getByLabel('Nome completo')
        .fill(user.name);

    await page.getByLabel('E-mail')
        .fill(user.email);

    await page.getByLabel('Senha', { exact: true })
        .fill(user.password);

    await page.getByLabel('Confirmar senha')
        .fill(user.confirmPassword ?? user.password);
}

module.exports = {
    fillRegistrationForm
};