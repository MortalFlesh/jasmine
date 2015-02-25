function Calculator() {

}
Calculator.prototype.calc = function (a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
};

try {
    module.exports = Calculator;
} catch(err){

}