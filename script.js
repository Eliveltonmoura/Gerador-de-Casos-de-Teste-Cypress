let savedTests = [];

function addStep() {
    const container = document.getElementById('stepsContainer');
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step-item';
    stepDiv.innerHTML = `
        <input type="text" placeholder="Ex: cy.get('#username').type('usuario')">
        <button class="btn btn-remove" onclick="removeStep(this)">✕</button>
    `;
    container.appendChild(stepDiv);
}

function removeStep(button) {
    const container = document.getElementById('stepsContainer');
    if (container.children.length > 1) {
        button.parentElement.remove();
    }
}

function generateTest() {
    const name = document.getElementById('testName').value || 'Teste sem nome';
    const description = document.getElementById('testDescription').value || 'Sem descrição';
    const url = document.getElementById('testUrl').value || 'https://exemplo.com';
    const testType = document.getElementById('testType').value;
    
    const steps = [];
    const stepInputs = document.querySelectorAll('.step-item input');
    stepInputs.forEach(input => {
        if (input.value.trim()) {
            steps.push(input.value.trim());
        }
    });

    if (steps.length === 0) {
        steps.push("cy.visit('/')");
    }

    const code = `describe('${name}', () => {
  // ${description}
  
  beforeEach(() => {
    cy.visit('${url}');
  });

  it('deve ${name.toLowerCase()}', () => {
    ${steps.map(step => `    ${step};`).join('\n')}
  });

  afterEach(() => {
    // Limpeza após o teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});`;

    document.getElementById('codeOutput').innerHTML = `<pre>${escapeHtml(code)}</pre>`;

    // Salvar teste
    const test = { name, description, code, date: new Date().toLocaleString() };
    savedTests.push(test);
    updateTestList();
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function copyCode() {
    const code = document.getElementById('codeOutput').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.btn-copy');
        const originalText = btn.textContent;
        btn.textContent = '✓ Copiado!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

function updateTestList() {
    const listContainer = document.getElementById('testList');
    const testsHtml = savedTests.map((test, index) => `
        <div class="test-item" onclick="loadTest(${index})">
            <h4>${test.name}</h4>
            <p>${test.date}</p>
        </div>
    `).join('');
    
    listContainer.innerHTML = `<h3>Testes Salvos (${savedTests.length})</h3>` + testsHtml;
}

function loadTest(index) {
    const test = savedTests[index];
    document.getElementById('codeOutput').innerHTML = `<pre>${escapeHtml(test.code)}</pre>`;
}

// Inicializar quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    updateTestList();
});