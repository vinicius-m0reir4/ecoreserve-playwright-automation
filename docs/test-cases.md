## Status dos testes

| ID        | Cenário              | Prioridade | Tipo     | Status        |
|-----------|----------------------|------------|----------|---------------|
| TC-001    | Cadastro válido      | Alta       | Positivo | Não executado |
| TC-002    | Nome vazio           | Alta       | Negativo | Não executado |
| TC-003    | E-mail inválido      | Alta       | Negativo | Não executado |
| TC-004    | Senha curta          | Alta       | Negativo | Não executado |
| TC-005    | Senhas diferentes    | Alta       | Negativo | Não executado |
| TC-006    | E-mail duplicado     | Alta       | Negativo | Não executado |
| TC-007    | Login válido         | Crítica    | Positivo | Não executado |
| TC-008    | Senha incorreta      | Crítica    | Negativo | Não executado |
| TC-009    | Usuário inexistente  | Alta       | Negativo | Não executado |
| TC-010    | Campos vazios        | Alta       | Negativo | Não executado |

# Test Cases — EcoReserve

## Cadastro

### TC-001 — Cadastro com dados válidos

**Prioridade:** Alta

**Tipo:** Positivo

**Pré-condição:**
Usuário não cadastrado no sistema.

**Dados de teste:**

- Nome: Vinicius QA
- E-mail: usuario.teste@example.com
- Senha: 123456
- Confirmar senha: 123456

**Passos:**

1. Acessar a página de cadastro.
2. Informar o nome completo.
3. Informar um e-mail válido.
4. Informar uma senha válida.
5. Confirmar a senha.
6. Clicar em "Criar conta".

**Resultado esperado:**

O sistema deve realizar o cadastro com sucesso,
exibir a mensagem de confirmação e redirecionar
o usuário para a página de login.


---

### TC-002 — Cadastro sem informar o nome

**Prioridade:** Alta

**Tipo:** Negativo

**Pré-condição:**
Usuário está na página de cadastro.

**Dados de teste:**

- Nome: vazio
- E-mail: usuario.teste2@example.com
- Senha: 123456
- Confirmar senha: 123456

**Passos:**

1. Acessar a página de cadastro.
2. Deixar o campo "Nome completo" vazio.
3. Informar um e-mail válido.
4. Informar uma senha válida.
5. Confirmar a senha.
6. Clicar em "Criar conta".

**Resultado esperado:**

O sistema deve impedir o cadastro e informar que
o nome completo deve ser preenchido.


---

### TC-003 — Cadastro com e-mail inválido

**Prioridade:** Alta

**Tipo:** Negativo

**Pré-condição:**
Usuário está na página de cadastro.

**Dados de teste:**

- Nome: Vinicius QA
- E-mail: usuario.teste
- Senha: 123456
- Confirmar senha: 123456

**Passos:**

1. Acessar a página de cadastro.
2. Informar o nome.
3. Informar um e-mail em formato inválido.
4. Informar uma senha válida.
5. Confirmar a senha.
6. Clicar em "Criar conta".

**Resultado esperado:**

O sistema deve impedir o cadastro e informar que
um e-mail válido deve ser informado.


---

### TC-004 — Cadastro com senha inferior ao mínimo

**Prioridade:** Alta

**Tipo:** Negativo

**Pré-condição:**
Usuário está na página de cadastro.

**Dados de teste:**

- Nome: Vinicius QA
- E-mail: usuario.teste3@example.com
- Senha: 123
- Confirmar senha: 123

**Passos:**

1. Acessar a página de cadastro.
2. Informar o nome.
3. Informar um e-mail válido.
4. Informar uma senha com menos de 6 caracteres.
5. Confirmar a senha.
6. Clicar em "Criar conta".

**Resultado esperado:**

O sistema deve impedir o cadastro e informar que
a senha deve possuir pelo menos 6 caracteres.


---

### TC-005 — Cadastro com senhas diferentes

**Prioridade:** Alta

**Tipo:** Negativo

**Pré-condição:**
Usuário está na página de cadastro.

**Dados de teste:**

- Nome: Vinicius QA
- E-mail: usuario.teste4@example.com
- Senha: 123456
- Confirmar senha: 654321

**Passos:**

1. Acessar a página de cadastro.
2. Informar o nome.
3. Informar um e-mail válido.
4. Informar a senha.
5. Informar uma confirmação diferente da senha.
6. Clicar em "Criar conta".

**Resultado esperado:**

O sistema deve impedir o cadastro e informar que
as senhas não coincidem.


---

### TC-006 — Cadastro com e-mail já existente

**Prioridade:** Alta

**Tipo:** Negativo

**Pré-condição:**
O e-mail utilizado já está cadastrado.

**Dados de teste:**

- Nome: Vinicius QA
- E-mail: usuario.teste@example.com
- Senha: 123456
- Confirmar senha: 123456

**Passos:**

1. Acessar a página de cadastro.
2. Informar os dados de um usuário já cadastrado.
3. Clicar em "Criar conta".

**Resultado esperado:**

O sistema deve impedir o cadastro e informar que
o e-mail já está cadastrado.

# Login

### TC-007 — Login com credenciais válidas

**Prioridade:** Crítica

**Tipo:** Positivo

**Pré-condição:**
Usuário previamente cadastrado.

**Dados de teste:**

- E-mail: usuario.teste@example.com
- Senha: 123456

**Passos:**

1. Acessar a página de login.
2. Informar um e-mail válido.
3. Informar a senha correta.
4. Clicar em "Entrar".

**Resultado esperado:**

O sistema deve autenticar o usuário e redirecioná-lo
para a página inicial.


---

### TC-008 — Login com senha incorreta

**Prioridade:** Crítica

**Tipo:** Negativo

**Pré-condição:**
Usuário previamente cadastrado.

**Dados de teste:**

- E-mail: usuario.teste@example.com
- Senha: 999999

**Passos:**

1. Acessar a página de login.
2. Informar um e-mail cadastrado.
3. Informar uma senha incorreta.
4. Clicar em "Entrar".

**Resultado esperado:**

O sistema não deve permitir o login e deve exibir
a mensagem "E-mail ou senha incorretos."


---

### TC-009 — Login com usuário inexistente

**Prioridade:** Alta

**Tipo:** Negativo

**Pré-condição:**
O e-mail utilizado não está cadastrado.

**Dados de teste:**

- E-mail: inexistente@example.com
- Senha: 123456

**Passos:**

1. Acessar a página de login.
2. Informar um e-mail não cadastrado.
3. Informar uma senha.
4. Clicar em "Entrar".

**Resultado esperado:**

O sistema não deve permitir o login e deve exibir
a mensagem "E-mail ou senha incorretos."


---

### TC-010 — Login sem preencher os campos

**Prioridade:** Alta

**Tipo:** Negativo

**Pré-condição:**
Usuário está na página de login.

**Passos:**

1. Acessar a página de login.
2. Não preencher o campo de e-mail.
3. Não preencher o campo de senha.
4. Clicar em "Entrar".

**Resultado esperado:**

O sistema deve impedir o login e informar que
o e-mail e a senha devem ser preenchidos.