describe('Calculator', function () {
    var usingHelper = require('../helpers/calculator/UsingHelper');
    var using = usingHelper.using;

    var Calculator = require('../../lib/calculator/Calculator');
    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    function plusProvider() {
        return [
            {a: 2, b: 3, expected: 5},
            {a: '14', b: 15, expected: 29},
            {a: 12, b: '13', expected: 25},
            {a: '22', b: '13', expected: 35},
        ];
    }

    using(plusProvider, function(data) {
        it('should calc with operator +', function(){
            var result = calculator.calc(data.a, data.b, '+');

            expect(result).toEqual(data.expected);
        });
    });

    using([{a: 5, b: 2, expected: 3}, {a: 25, b: 26, expected: -1}], function(data) {
        it('should calc with operator -', function () {
            var result = calculator.calc(data.a, data.b, '-');

            expect(result).toEqual(data.expected);
        });
    });
});