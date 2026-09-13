# Test Plan — EcoReserve

## 1. Objetivo

Validar os principais fluxos de autenticação da plataforma EcoReserve,
garantindo que usuários consigam criar uma conta e realizar login
de acordo com as regras definidas pela aplicação.

## 2. Escopo

### 2.1 Cadastro

Serão testados:

- Cadastro com dados válidos;
- Campos obrigatórios;
- Formato do e-mail;
- Tamanho mínimo da senha;
- Confirmação da senha;
- Cadastro com e-mail já existente.

### 2.2 Login

Serão testados:

- Login com credenciais válidas;
- Campos obrigatórios;
- Login com usuário inexistente;
- Login com senha incorreta.

## 3. Fora do escopo

Nesta versão do projeto não serão contemplados:

- Fluxo de reservas;
- Pagamentos;
- Recuperação de senha;
- Logout;
- Testes de performance;
- Testes de segurança;
- Testes de API.

## 4. Tipos de teste

Serão utilizados:

- Testes funcionais;
- Testes positivos;
- Testes negativos;
- Testes de validação de campos;
- Testes End-to-End (E2E).

## 5. Ambiente

### Aplicação

EcoReserve

### Ambiente

Local

### URL

http://localhost:5500

### Navegador

Chromium

### Ferramenta de automação

Playwright

### Linguagem

JavaScript

## 6. Critérios de aprovação

Um cenário será considerado aprovado quando o comportamento
observado pela aplicação estiver de acordo com o resultado esperado
definido no caso de teste.

## 7. Critérios de reprovação

Um cenário será considerado reprovado quando a aplicação apresentar
comportamento diferente do resultado esperado.

## 8. Evidências

Quando necessário, serão coletadas evidências por meio de:

- Screenshots;
- Traces;
- Relatórios de execução;
- Logs de execução.

## 9. Estratégia

Os testes serão inicialmente executados manualmente para validação
dos cenários.

Após a validação, os cenários selecionados serão automatizados
utilizando Playwright.

A automação será executada localmente e posteriormente integrada
ao GitHub Actions.