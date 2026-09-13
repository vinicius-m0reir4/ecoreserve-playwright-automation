function generateUniqueEmail() {
    return `qa.${Date.now()}@example.com`;
}

module.exports = {
    generateUniqueEmail
};