# 🌿 EcoReserve — Automação de Testes E2E com Playwright

Suíte de **testes automatizados End-to-End (E2E)** desenvolvida para a plataforma fictícia **EcoReserve**, um sistema de reservas de experiências ecológicas.

O projeto foi desenvolvido com foco em **Quality Assurance (QA)** e demonstra a aplicação prática de conceitos como planejamento de testes, criação de massa de dados, testes positivos e negativos, organização de cenários e automação de fluxos críticos utilizando **Playwright e JavaScript**.

---

## 🎯 Objetivo do Projeto

O objetivo é validar automaticamente os principais fluxos de **Cadastro** e **Login** da aplicação, garantindo o comportamento esperado tanto em cenários de sucesso quanto em situações de erro.

Além da automação, o projeto busca demonstrar uma estrutura organizada e sustentável para uma suíte de testes, facilitando futuras manutenções e expansões.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia         | Utilização                               |
| ------------------ | ---------------------------------------- |
| **JavaScript**     | Linguagem utilizada nos testes           |
| **Playwright**     | Automação e execução dos testes E2E      |
| **Node.js / NPM**  | Ambiente e gerenciamento de dependências |
| **Git**            | Controle de versão                       |
| **GitHub**         | Hospedagem do código-fonte               |
| **GitHub Actions** | Estrutura preparada para CI/CD           |

---

## 🧪 Cenários Automatizados

Atualmente, a suíte conta com **13 cenários automatizados**, contemplando testes positivos, negativos e um Smoke Test.

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
├── docs/
│   └── Documentação de QA
│       ├── Plano de Testes
│       └── Casos de Teste
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
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

* [Node.js](https://nodejs.org/) — versão LTS recomendada
* [Git](https://git-scm.com/)
* Navegador compatível com Playwright

### 2. Clonar o repositório

```bash
git clone https://github.com/vinicius-m0reir4/ecoreserve-playwright-automation.git
```

Acesse a pasta do projeto:

```bash
cd ecoreserve-playwright-automation
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar os testes

Para executar toda a suíte em modo **headless**:

```bash
npx playwright test
```

### 5. Executar em modo visual

Para acompanhar os testes diretamente no navegador:

```bash
npx playwright test --headed
```

### 6. Executar utilizando o UI Mode

O UI Mode permite visualizar, executar e depurar os testes de forma interativa:

```bash
npx playwright test --ui
```

### 7. Visualizar o relatório HTML

Após a execução dos testes:

```bash
npx playwright show-report
```

---

## 📊 Relatórios e Evidências

O Playwright disponibiliza recursos para análise dos resultados e investigação de falhas, incluindo:

* Status de execução dos testes
* Tempo de execução
* Screenshots
* Traces
* Vídeos, quando configurados
* Detalhamento das etapas executadas

Os arquivos gerados durante a execução são mantidos fora do controle de versão por meio do `.gitignore`, evitando que arquivos temporários e relatórios locais sejam enviados ao repositório.

---

## 🔎 Estratégia de Testes

A suíte foi estruturada considerando diferentes tipos de cenários:

### Testes Positivos

Validam se a aplicação funciona corretamente quando recebe dados válidos.

**Exemplos:**

* Cadastro de usuário válido
* Login com credenciais válidas

### Testes Negativos

Validam como a aplicação se comporta diante de entradas inválidas ou condições inesperadas.

**Exemplos:**

* Campos obrigatórios não preenchidos
* E-mail inválido
* Senha fora do padrão esperado
* Senhas diferentes
* Usuário inexistente
* Credenciais incorretas

### Smoke Test

Valida rapidamente se a aplicação está acessível e se o fluxo básico da página inicial está funcionando, servindo como uma verificação inicial antes da execução de testes mais abrangentes.

---

## 📈 Possíveis Evoluções

O projeto foi estruturado de forma que novos recursos possam ser incorporados futuramente, como:

* [ ] Implementação de Page Object Model (POM)
* [ ] Expansão dos cenários automatizados
* [ ] Testes de API
* [ ] Integração com GitHub Actions
* [ ] Execução automática dos testes em CI/CD
* [ ] Geração de relatórios em pipelines
* [ ] Testes em diferentes navegadores
* [ ] Testes de responsividade
* [ ] Integração com ferramentas de gestão de testes
* [ ] Expansão da cobertura de testes

---

## 📌 Status do Projeto

**Em desenvolvimento 🚧**

O projeto está sendo utilizado como parte da minha jornada prática de estudos em **Quality Assurance e Automação de Testes**, com evolução contínua da cobertura e da estrutura da suíte.

---

## 👨‍💻 Sobre

Projeto desenvolvido para fins de **estudo, prática e construção de portfólio profissional na área de QA e Automação de Testes**.

**Principais conhecimentos aplicados:**

* Testes End-to-End
* Automação de testes
* Testes positivos e negativos
* Casos de teste
* Massa de dados
* JavaScript
* Playwright
* Git e GitHub
* Organização de suítes de testes
* Análise de resultados e evidências

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.
