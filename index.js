document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numberA = parseFloat(document.getElementById('numberA').value);
    const numberB = parseFloat(document.getElementById('numberB').value);
    const messageDiv = document.getElementById('message');

    if (numberA < numberB) {
        messageDiv.textContent = 'Tudo certo! Número A é menor que Número B.';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Erro! Número A não é menor que Número B.';
        messageDiv.className = 'message error';
    }
});