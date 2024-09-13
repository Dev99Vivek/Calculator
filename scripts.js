
        let selectedOperator = 'add';
        let darkMode = false;

        const setOperator = (operator) => {
            selectedOperator = operator;
            document.querySelectorAll('.operator').forEach(op => {
                op.style.background = '';
                op.style.color = '';
            });
            const selectedOp = document.querySelector(`.operator[onclick="setOperator('${operator}')"]`);
            selectedOp.style.background = '#fda085';
            selectedOp.style.color = '#fff';
        };

        const cal = (a, b, operator) => {
            return operator(a, b);
        };

        const calculate = () => {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            let result;

            switch (selectedOperator) {
                case 'add':
                    result = cal(num1, num2, (a, b) => a + b);
                    break;
                case 'subtract':
                    result = cal(num1, num2, (a, b) => a - b);
                    break;
                case 'multiply':
                    result = cal(num1, num2, (a, b) => a * b);
                    break;
                case 'divide':
                    if (num2 !== 0) {
                        result = cal(num1, num2, (a, b) => a / b);
                    } else {
                        result = 'Cannot divide by zero';
                    }
                    break;
                case 'sqrt':
                    result = Math.sqrt(num1);
                    break;
                case 'power':
                    result = Math.pow(num1, num2);
                    break;
                case 'modulus':
                    result = num1 % num2;
                    break;
                default:
                    result = 'Invalid operator';
                    break;
            }

            const resultContainer = document.getElementById('resultContainer');
            document.getElementById('result').innerText = result;
            resultContainer.classList.remove('show');
            setTimeout(() => resultContainer.classList.add('show'), 10);
        };

        const clearCalculator = () => {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('result').innerText = '';
            document.getElementById('resultContainer').classList.remove('show');
            document.querySelectorAll('.operator').forEach(op => {
                op.style.background = '';
                op.style.color = '';
            });
            selectedOperator = 'add';
        };

        const toggleDarkMode = () => {
            darkMode = !darkMode;
            document.body.classList.toggle('dark-mode', darkMode);
        };
    