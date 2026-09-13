// ===============================
// BANCO DE DADOS SIMULADO
// ===============================

let users = JSON.parse(
    localStorage.getItem("ecoreserveUsers")
) || [];


// ===============================
// CADASTRO
// ===============================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Campos

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;


            // Mensagens

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const passwordError =
                document.getElementById("passwordError");

            const confirmPasswordError =
                document.getElementById(
                    "confirmPasswordError"
                );

            const registerMessage =
                document.getElementById(
                    "registerMessage"
                );


            // Limpar mensagens

            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";
            registerMessage.textContent = "";


            let hasError = false;


            // ===============================
            // VALIDAÇÃO DO NOME
            // ===============================

            if (!name) {

                nameError.textContent =
                    "Informe seu nome completo.";

                hasError = true;
            }


            // ===============================
            // VALIDAÇÃO DO EMAIL
            // ===============================

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!email) {

                emailError.textContent =
                    "Informe seu e-mail.";

                hasError = true;

            } else if (!emailRegex.test(email)) {

                emailError.textContent =
                    "Informe um e-mail válido.";

                hasError = true;
            }


            // ===============================
            // EMAIL DUPLICADO
            // ===============================

            const existingUser =
                users.find(
                    user =>
                        user.email.toLowerCase() ===
                        email.toLowerCase()
                );


            if (existingUser) {

                emailError.textContent =
                    "Este e-mail já está cadastrado.";

                hasError = true;
            }


            // ===============================
            // SENHA
            // ===============================

            if (!password) {

                passwordError.textContent =
                    "Informe uma senha.";

                hasError = true;

            } else if (password.length < 6) {

                passwordError.textContent =
                    "A senha deve possuir pelo menos 6 caracteres.";

                hasError = true;
            }


            // ===============================
            // CONFIRMAÇÃO
            // ===============================

            if (!confirmPassword) {

                confirmPasswordError.textContent =
                    "Confirme sua senha.";

                hasError = true;

            } else if (
                password !== confirmPassword
            ) {

                confirmPasswordError.textContent =
                    "As senhas não coincidem.";

                hasError = true;
            }


            // ===============================
            // SE EXISTIR ERRO
            // ===============================

            if (hasError) {

                return;
            }


            // ===============================
            // CRIAR USUÁRIO
            // ===============================

            const newUser = {

                name: name,

                email: email,

                password: password
            };


            users.push(newUser);


            localStorage.setItem(
                "ecoreserveUsers",
                JSON.stringify(users)
            );


            // ===============================
            // SUCESSO
            // ===============================

            registerMessage.textContent =
                "Cadastro realizado com sucesso!";

            registerMessage.style.color =
                "#1f6b43";


            registerForm.reset();


            setTimeout(
                () => {

                    window.location.href =
                        "login.html";

                },
                1500
            );

        }
    );

}



// ===============================
// LOGIN
// ===============================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const emailError =
                document.getElementById(
                    "loginEmailError"
                );


            const passwordError =
                document.getElementById(
                    "loginPasswordError"
                );


            const loginMessage =
                document.getElementById(
                    "loginMessage"
                );


            // Limpar mensagens

            emailError.textContent = "";

            passwordError.textContent = "";

            loginMessage.textContent = "";


            let hasError = false;


            // ===============================
            // EMAIL
            // ===============================

            if (!email) {

                emailError.textContent =
                    "Informe seu e-mail.";

                hasError = true;
            }


            // ===============================
            // SENHA
            // ===============================

            if (!password) {

                passwordError.textContent =
                    "Informe sua senha.";

                hasError = true;
            }


            if (hasError) {

                return;
            }


            // ===============================
            // PROCURAR USUÁRIO
            // ===============================

            const user =
                users.find(
                    user =>
                        user.email.toLowerCase() ===
                        email.toLowerCase()
                );


            // ===============================
            // USUÁRIO NÃO EXISTE
            // ===============================

            if (!user) {

                loginMessage.textContent =
                    "E-mail ou senha incorretos.";

                loginMessage.style.color =
                    "#c0392b";

                return;
            }


            // ===============================
            // SENHA INCORRETA
            // ===============================

            if (user.password !== password) {

                loginMessage.textContent =
                    "E-mail ou senha incorretos.";

                loginMessage.style.color =
                    "#c0392b";

                return;
            }


            // ===============================
            // LOGIN REALIZADO
            // ===============================

            localStorage.setItem(
                "ecoreserveLoggedUser",
                JSON.stringify(user)
            );


            loginMessage.textContent =
                "Login realizado com sucesso!";

            loginMessage.style.color =
                "#1f6b43";


            setTimeout(
                () => {

                    window.location.href =
                        "index.html";

                },
                1000
            );

        }
    );

}