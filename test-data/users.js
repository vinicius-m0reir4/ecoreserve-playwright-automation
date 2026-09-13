const validUser = {
    name: 'Vinicius QA',
    email: 'vinicius.qa@example.com',
    password: '123456'
};

const invalidEmailUser = {
    name: 'Vinicius QA',
    email: 'vinicius.qa',
    password: '123456'
};

const shortPasswordUser = {
    name: 'Vinicius QA',
    email: 'short.password@example.com',
    password: '123'
};

const differentPasswordsUser = {
    name: 'Vinicius QA',
    email: 'different.password@example.com',
    password: '123456',
    confirmPassword: '654321'
};

const existingUser = {
    name: 'Usuário Existente',
    email: 'existing.user@example.com',
    password: '123456'
};

const loginUser = {
    name: 'Usuário Login',
    email: 'login.qa@example.com',
    password: '123456'
};

module.exports = {
    validUser,
    invalidEmailUser,
    shortPasswordUser,
    differentPasswordsUser,
    existingUser,
    loginUser
};