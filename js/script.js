const resultText = document.getElementById('result-text');

document.getElementById('keypad-container').addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('button')) {
        const buttonId = target.id;

        switch (buttonId) {
            case 'reset-calc':
                resultText.textContent = '';
                break;
            case 'backspace':
                temp = resultText.textContent;
                resultText.textContent = temp.slice(0, -1);
                break;
            case 'power':
                resultText.textContent += '^';
                break;
            case 'divide':
                resultText.textContent += '/';
                break;
            case 'multiply':
                resultText.textContent += '*';
                break;
            case 'subtract':
                resultText.textContent += '-';
                break;
            case 'add':
                resultText.textContent += '+';
                break;
            case 'equal':
                resultText.textContent += '=';
                break;
            case 'negate':
                temp = resultText.textContent;
                resultText.textContent = '-' + temp;
                break;
            case 'decimal':
                resultText.textContent += '.';
                break;
            case 'number-0':
                resultText.textContent += '0';
                break;
            case 'number-1':
                resultText.textContent += '1';
                break;
            case 'number-2':
                resultText.textContent += '2';
                break;
            case 'number-3':
                resultText.textContent += '3';
                break;
            case 'number-4':
                resultText.textContent += '4';
                break;
            case 'number-5':
                resultText.textContent += '5';
                break;
            case 'number-6':
                resultText.textContent += '6';
                break;
            case 'number-7':
                resultText.textContent += '7';
                break;
            case 'number-8':
                resultText.textContent += '8';
                break;
            case 'number-9':
                resultText.textContent += '9';
                break;
        }
    }
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

