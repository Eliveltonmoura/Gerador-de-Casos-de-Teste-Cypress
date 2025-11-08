add# 🧪 Gerador de Casos de Teste Cypress

Uma ferramenta web intuitiva e moderna para criar casos de teste automatizados com Cypress de forma rápida e organizada.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Exemplos](#exemplos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O **Gerador de Casos de Teste Cypress** foi desenvolvido para facilitar a criação de testes automatizados E2E (End-to-End). Com uma interface amigável, você pode gerar código Cypress pronto para uso em poucos cliques, economizando tempo e padronizando seus testes.

### Por que usar este gerador?

- ✅ **Economia de tempo** - Gere estruturas completas de teste em segundos
- ✅ **Padronização** - Mantenha seus testes seguindo boas práticas
- ✅ **Interface intuitiva** - Não precisa memorizar sintaxe
- ✅ **Organização** - Salve e gerencie múltiplos casos de teste
- ✅ **Flexibilidade** - Suporte para diferentes tipos de teste

## ✨ Funcionalidades

### Principais Recursos

- 📝 **Formulário de Configuração**
  - Nome e descrição detalhada do teste
  - URL base configurável
  - Seleção de tipo de teste (E2E, Componente, API, Integração)

- 🔧 **Gerenciamento de Passos**
  - Adicione quantos passos forem necessários
  - Remova passos indesejados
  - Edição dinâmica de comandos Cypress

- 💻 **Geração de Código**
  - Estrutura completa com `describe`, `beforeEach`, `it` e `afterEach`
  - Código formatado e pronto para uso
  - Visualização em tempo real

- 💾 **Gestão de Testes**
  - Salva testes criados durante a sessão
  - Lista organizada com data de criação
  - Recarregamento rápido de testes salvos

- 📋 **Copiar Código**
  - Botão de cópia com um clique
  - Feedback visual de confirmação

- 🎨 **Design Moderno**
  - Interface responsiva para desktop e mobile
  - Gradientes modernos e animações suaves
  - Experiência de usuário otimizada

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Grid e Flexbox
- **JavaScript (Vanilla)** - Lógica e manipulação do DOM
- **Cypress** - Framework de testes (geração de código)

## 📦 Instalação

### Pré-requisitos

Você só precisa de um navegador web moderno! Não há dependências externas.

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/cypress-test-generator.git
```

2. **Navegue até a pasta do projeto**
```bash
cd cypress-test-generator
```

3. **Abra o arquivo index.html no navegador**
```bash
# No Linux/Mac
open index.html

# No Windows
start index.html
```

Ou simplesmente arraste o arquivo `index.html` para o seu navegador.

## 🚀 Como Usar

### Passo a Passo

1. **Preencha as Informações do Teste**
   - Digite o nome do teste (ex: "Login com credenciais válidas")
   - Adicione uma descrição detalhada
   - Insira a URL base da aplicação

2. **Selecione o Tipo de Teste**
   - E2E (End-to-End)
   - Componente
   - API
   - Integração

3. **Adicione os Passos do Teste**
   - Use comandos Cypress válidos
   - Clique em "+ Adicionar Passo" para mais comandos
   - Use o botão "✕" para remover passos

4. **Gere o Código**
   - Clique em "Gerar Código Cypress"
   - O código aparecerá no painel direito

5. **Copie e Use**
   - Clique em "📋 Copiar Código"
   - Cole no seu arquivo de teste Cypress

### Comandos Cypress Comuns

```javascript
// Navegação
cy.visit('/')

// Seleção de elementos
cy.get('#email')
cy.get('.button')
cy.contains('Enviar')

// Interações
cy.get('#email').type('usuario@email.com')
cy.get('button').click()
cy.get('select').select('opcao')

// Asserções
cy.url().should('include', '/dashboard')
cy.get('.message').should('be.visible')
cy.get('h1').should('contain', 'Bem-vindo')
```

## 📁 Estrutura do Projeto

```
cypress-test-generator/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e design
├── script.js           # Lógica e funcionalidades
└── README.md           # Documentação
```

### Arquivos Principais

- **index.html** - Contém toda a estrutura da página e os elementos do formulário
- **styles.css** - Define todo o visual, incluindo layout responsivo e animações
- **script.js** - Gerencia a lógica de adicionar/remover passos, gerar código e salvar testes

## 💡 Exemplos

### Exemplo 1: Teste de Login

**Entrada:**
- Nome: Login com sucesso
- URL: https://meusite.com/login
- Passos:
  - `cy.get('#email').type('usuario@email.com')`
  - `cy.get('#password').type('senha123')`
  - `cy.get('button[type="submit"]').click()`
  - `cy.url().should('include', '/dashboard')`

**Código Gerado:**
```javascript
describe('Login com sucesso', () => {
  // Testa o fluxo de login com credenciais válidas
  
  beforeEach(() => {
    cy.visit('https://meusite.com/login');
  });

  it('deve login com sucesso', () => {
    cy.get('#email').type('usuario@email.com');
    cy.get('#password').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  afterEach(() => {
    // Limpeza após o teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});
```

### Exemplo 2: Teste de Cadastro

**Entrada:**
- Nome: Cadastro de novo usuário
- URL: https://meusite.com/cadastro
- Passos:
  - `cy.get('#nome').type('João Silva')`
  - `cy.get('#email').type('joao@email.com')`
  - `cy.get('#senha').type('Senha@123')`
  - `cy.get('#confirmar-senha').type('Senha@123')`
  - `cy.get('button').contains('Cadastrar').click()`
  - `cy.contains('Cadastro realizado com sucesso').should('be.visible')`

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua Feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

### Ideias para Contribuições

- 🎨 Temas alternativos (claro/escuro)
- 💾 Persistência de dados com LocalStorage
- 📤 Exportar testes em arquivo .spec.js
- 🔍 Biblioteca de comandos Cypress predefinidos
- 🌐 Suporte para múltiplos idiomas
- 📊 Estatísticas de testes criados

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para a comunidade de QA e desenvolvedores

## 🔗 Links Úteis

- [Documentação Cypress](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Examples](https://example.cypress.io/)

## 📧 Contato

Tem alguma dúvida ou sugestão? Abra uma issue no GitHub!

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!