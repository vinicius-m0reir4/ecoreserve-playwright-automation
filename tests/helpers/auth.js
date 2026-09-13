async function setupUser(page, user) {

    await page.addInitScript((userData) => {

        localStorage.setItem(
            'ecoreserveUsers',
            JSON.stringify([userData])
        );

    }, user);
}

module.exports = {
    setupUser
};