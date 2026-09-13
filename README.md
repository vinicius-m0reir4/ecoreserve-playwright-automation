# 🌿 EcoReserve — Automação de Testes E2E com Playwright

Suíte de **testes automatizados End-to-End (E2E)** desenvolvida para a plataforma fictícia **EcoReserve**, um sistema de reservas de experiências ecológicas.

O projeto foi desenvolvido com foco em **Quality Assurance (QA)** e demonstra a aplicação prática de conceitos como planejamento de testes, criação de massa de dados, testes positivos e negativos, organização de cenários, análise de evidências e automação de fluxos críticos utilizando **Playwright e JavaScript**.

---

## 🎯 Objetivo do Projeto

O objetivo é validar automaticamente os principais fluxos de **Cadastro** e **Login** da aplicação, garantindo o comportamento esperado tanto em cenários de sucesso quanto em situações de erro.

Além da automação, o projeto busca demonstrar uma estrutura organizada e sustentável para uma suíte de testes, facilitando futuras manutenções e expansões.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia         | Utilização                                           |
| ------------------ | ---------------------------------------------------- |
| **JavaScript**     | Linguagem utilizada nos testes                       |
| **Playwright**     | Framework de automação de testes E2E                 |
| **Node.js / NPM**  | Ambiente de execução e gerenciamento de dependências |
| **Git**            | Controle de versão                                   |
| **GitHub**         | Hospedagem do código-fonte                           |
| **GitHub Actions** | Automação da execução dos testes em CI               |

---

## 🧪 Cenários Automatizados

A suíte conta atualmente com **13 cenários automatizados**, contemplando testes positivos, negativos e Smoke Test.

### 📝 Cadastro

| ID         | Cenário                                           | Tipo       |
| ---------- | ------------------------------------------------- | ---------- |
| **TC-001** | Cadastro de novo usuário com sucesso              | ✅ Positivo |
| **TC-002** | Impedir cadastro sem preencher o nome             | ❌ Negativo |
| **TC-003** | Impedir cadastro sem preencher o e-mail           | ❌ Negativo |
| **TC-004** | Impedir cadastro com formato de e-mail inválido   | ❌ Negativo |
| **TC-005** | Impedir cadastro com senha menor que 6 caracteres | ❌ Negativo |
| **TC-006** | Impedir cadastro com senhas que não coincidem     | ❌ Negativo |
| **TC-007** | Impedir cadastro com e-mail já existente          | ❌ Negativo |

### 🔐 Login

| ID         | Cenário                                 | Tipo       |
| ---------- | --------------------------------------- | ---------- |
| **TC-008** | Login realizado com credenciais válidas | ✅ Positivo |
| **TC-009** | Impedir login com usuário inexistente   | ❌ Negativo |
| **TC-010** | Impedir login com senha incorreta       | ❌ Negativo |
| **TC-011** | Impedir login sem preencher o e-mail    | ❌ Negativo |
| **TC-012** | Impedir login sem preencher a senha     | ❌ Negativo |

### 🚦 Smoke Test

| ID               | Cenário                                               | Tipo    |
| ---------------- | ----------------------------------------------------- | ------- |
| **TC-SMOKE-001** | Validar carregamento correto da página inicial (Home) | ✅ Smoke |

---

## 📂 Estrutura do Projeto

```text
ecoreserve-playwright-automation/
│
├── .github/
│   └── workflows/
│       └── GitHub Actions
│
├── docs/
│   └── Documentação de QA
│
├── test-data/
│   └── Massa de dados e Data Factories
│
├── tests/
│   ├── cadastro/
│   │   └── Testes do fluxo de cadastro
│   │
│   ├── login/
│   │   └── Testes do fluxo de login
│   │
│   ├── smoke/
│   │   └── Testes de fumaça
│   │
│   └── helpers/
│       └── Funções auxiliares e Page Actions
│
├── cadastro.html
├── index.html
├── login.html
├── script.js
├── style.css
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

* [Node.js](https://nodejs.org/) — versão LTS recomendada
* [Git](https://git-scm.com/)
* Navegador compatível com Playwright

### 1. Clonar o repositório

```bash
git clone https://github.com/vinicius-m0reir4/ecoreserve-playwright-automation.git
```

Acesse a pasta do projeto:

```bash
cd ecoreserve-playwright-automation
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar os testes

Para executar toda a suíte em modo **headless**:

```bash
npx playwright test
```

### 4. Executar em modo visual

Para acompanhar a execução diretamente no navegador:

```bash
npx playwright test --headed
```

### 5. Executar utilizando o UI Mode

O UI Mode permite visualizar, executar e depurar os testes de forma interativa:

```bash
npx playwright test --ui
```

### 6. Visualizar o relatório HTML

Após a execução dos testes:

```bash
npx playwright show-report
```

---

## 📊 Relatórios e Evidências

O Playwright está configurado para gerar recursos de evidência que auxiliam na análise dos resultados e investigação de falhas.

A configuração atual inclui:

* **HTML Report** — relatório detalhado da execução
* **List Reporter** — acompanhamento dos testes no terminal
* **Screenshots** — capturados somente quando um teste falha
* **Traces** — capturados na primeira tentativa de um teste que precise de retry
* **Vídeos** — mantidos quando ocorre uma falha
* **Detalhamento das etapas executadas**

Essas configurações permitem investigar uma falha utilizando diferentes evidências da execução, facilitando o processo de análise e diagnóstico.

Os arquivos gerados durante a execução são mantidos fora do controle de versão por meio do `.gitignore`, evitando o envio de arquivos temporários e relatórios locais para o repositório.

---

## 🔎 Estratégia de Testes

A suíte foi estruturada considerando diferentes tipos de cenários.

### ✅ Testes Positivos

Validam se a aplicação funciona corretamente quando recebe dados válidos.

**Exemplos:**

* Cadastro de usuário válido
* Login com credenciais válidas

### ❌ Testes Negativos

Validam como a aplicação se comporta diante de entradas inválidas ou condições inesperadas.

**Exemplos:**

* Campos obrigatórios não preenchidos
* E-mail em formato inválido
* Senha abaixo do tamanho mínimo
* Senhas diferentes
* Usuário inexistente
* Credenciais incorretas
* E-mail já cadastrado

### 🚦 Smoke Test

Valida rapidamente se a aplicação está acessível e se o fluxo básico da página inicial está funcionando.

Esse tipo de teste serve como uma verificação inicial antes da execução de uma suíte mais abrangente.

---

## ⚙️ Configuração de Execução

A configuração do Playwright utiliza algumas estratégias para tornar a execução mais adequada a um ambiente de testes automatizados:

* Execução paralela dos testes
* Retry automático em ambiente de CI
* Controle de workers em CI
* Execução em Chromium
* Relatório HTML
* Relatório em terminal
* Screenshots em caso de falha
* Traces na primeira tentativa de retry
* Vídeos mantidos em caso de falha
* Inicialização automática da aplicação através do `webServer`

---

## 🔄 Integração Contínua

O projeto possui configuração de **GitHub Actions** para integração da automação ao processo de desenvolvimento.

A utilização de CI permite executar a suíte de testes de forma automatizada e identificar possíveis falhas sem depender exclusivamente da execução manual em ambiente local.

---

## 📈 Possíveis Evoluções

O projeto foi estruturado de forma que novos recursos possam ser incorporados futuramente, como:

* [ ] Implementação de Page Object Model (POM)
* [ ] Expansão dos cenários automatizados
* [ ] Testes de API
* [ ] Expansão da cobertura de testes
* [ ] Testes em diferentes navegadores
* [ ] Testes de responsividade
* [ ] Geração de relatórios em pipelines
* [ ] Integração com ferramentas de gestão de testes

---

## 📌 Status do Projeto

**Em desenvolvimento 🚧**

O projeto faz parte da minha jornada prática de estudos em **Quality Assurance e Automação de Testes**, com evolução contínua da cobertura, estrutura e estratégias de automação.

---

## 👨‍💻 Sobre

Projeto desenvolvido para fins de **estudo, prática e construção de portfólio profissional na área de QA e Automação de Testes**.

### Principais conhecimentos aplicados

* Testes End-to-End
* Automação de testes
* Testes positivos e negativos
* Smoke Testing
* Casos de teste
* Massa de dados
* JavaScript
* Playwright
* Git e GitHub
* GitHub Actions
* Organização de suítes de testes
* Análise de resultados
* Evidências de execução
* Investigação de falhas

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.
