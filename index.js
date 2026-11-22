const form = document.getElementById('number-form');
const inputA = document.getElementById('number-a');
const inputB = document.getElementById('number-b');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const numberA = parseFloat(inputA.value);
    const numberB = parseFloat(inputB.value);
    const isValid = numberB > numberA;

    message.textContent = isValid
        ? `Tudo certo! ${numberB} é maior que ${numberA}.`
        : `Erro! O número B (${numberB}) precisa ser maior que o número A (${numberA}).`;
    message.className = `message ${isValid ? 'success' : 'error'}`;
});
