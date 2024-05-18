const getScreenValue = () => document.calculator.screen.value;
const setScreenValue = (value) => { document.calculator.screen.value = value; };
const appendToScreen = (character) => {
    const currentValue = document.calculator.screen.value;

    // Si el valor actual es 0 y el nuevo carácter es decimal se concatena el nuevo carácter
    if (currentValue === "0" && character === ".") {
        document.calculator.screen.value += character;
    } else {
        // Si el valor actual es 0 y el nuevo carácter no es un punto decimal se reemplaza 0 con el nuevo carácter
        if (currentValue === "0" && (/[0-9]/).test(character)) {
            document.calculator.screen.value = character;
        } else {
            // Si el valor actual no comienza con 0 se concatena el nuevo carácter
            if (!currentValue.startsWith('0')) {
                document.calculator.screen.value += character;
            } else {
                // Si el valor actual comienza con 0, pero no es solo 0 se concatena el nuevo caracter
                document.calculator.screen.value = currentValue + character;
            }
        }
    }
};

const sumar = () => {
    appendToScreen('+');
}
const restar = () => {
    appendToScreen('-');
}
const multiplicar = () => {
    appendToScreen('*');
}
const dividir = () => {
    appendToScreen('/');
}
const clearValues = () => {
    setScreenValue('0');
}
const addPercent = () => {
    const currentValue = getScreenValue();
    // Si el valor actual es 0 se reemplaza 0 con la raíz cuadrada
    if (currentValue === '0') {
        setScreenValue('%');
    } else {
        // Si el valor actual no es 0 se concatena la raíz cuadrada al valor actual
        setScreenValue(currentValue + '%');
    }
}
const raizCuadrada = () => {
    const currentValue = getScreenValue();
    // Si el valor actual es 0 se reemplaza 0 con la raíz cuadrada
    if (currentValue === '0') {
        setScreenValue('√');
    } else {
        // Si el valor actual no es 0 se concatena la raíz cuadrada al valor actual
        setScreenValue(currentValue + '√');
    }
}
const resolver = () => {
    let expression = getScreenValue();
    try {
        // Manejar porcentajes
        expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => `(${number}/100 * ${getScreenValue().split(/[\+\-\*\/]/).slice(-2, -1)[0]})`);

        // Manejar raíces cuadradas
        expression = expression.replace(/√(\d+(\.\d+)?)/g, (match, number) => `Math.sqrt(${number})`);

        setScreenValue(eval(expression));
    } catch {
        setScreenValue('Error');
    }
}
