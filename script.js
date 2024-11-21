let displayElement = document.getElementById('display');

// Очищает дисплей
function clearDisplay() {
    displayElement.textContent = '';
}

// Добавляет символы на дисплей
function appendToDisplay(value) {
    displayElement.textContent += value;
}

// Меняет знак числа (+/-)
function toggleSign() {
    let currentValue = displayElement.textContent;
    if (currentValue) {
        if (currentValue.startsWith('-')) {
            displayElement.textContent = currentValue.substring(1);
        } else {
            displayElement.textContent = '-' + currentValue;
        }
    }
}

// Вычисляет процент
function calculatePercentage() {
    let currentValue = parseFloat(displayElement.textContent);
    if (!isNaN(currentValue)) {
        displayElement.textContent = currentValue / 100;
    }
}

// Рассчитывает математические функции
function calculateFunction(func) {
    const match = displayElement.textContent.match(/(\d+(\.\d+)?)$/);
    if (match) {
        const number = match[0];
        const updatedExpression = displayElement.textContent.replace(/(\d+(\.\d+)?)$/, `${func}(${number})`);
        displayElement.textContent = eval(updatedExpression);
    }
}

// Рассчитывает факториал
function calculateFactorial() {
    const match = displayElement.textContent.match(/(\d+)$/);
    if (match) {
        const number = parseInt(match[0], 10);
        const factorial = factorialCalc(number);
        displayElement.textContent = displayElement.textContent.replace(/(\d+)$/, factorial);
    }
}

function factorialCalc(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialCalc(num - 1);
}

// Рассчитывает итоговое выражение
function calculateResult() {
    let expression = displayElement.textContent;
    expression = expression.replace(/\^/g, '**');
    displayElement.textContent = eval(expression);
}

// Показать/скрыть дополнительные кнопки
function toggleAdvanced() {
    const advancedButtons = document.getElementById('advanced-buttons');
    advancedButtons.style.display = advancedButtons.style.display === 'grid' ? 'none' : 'grid';
}

// Переключает тему
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    body.classList.toggle('dark-theme');
    themeToggle.textContent = body.classList.contains('dark-theme') ? 'Dark Mode' : 'Light Mode';
}



// Переключает тему
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    // Переключение класса "dark-theme"
    body.classList.toggle('dark-theme');
    // Изменение текста кнопки
    themeToggle.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
}


// Показать/скрыть дополнительные кнопки с плавной анимацией
function toggleAdvanced() {
    const advancedButtons = document.getElementById('advanced-buttons');
    if (advancedButtons.classList.contains('show')) {
        advancedButtons.classList.remove('show');
    } else {
        advancedButtons.classList.add('show');
    }
}
