
// inspired by https://github.com/jphpsf/jasmine-data-provider

exports.using = function(values, func) {
    if (values instanceof Function) {
        values = values();
    }

    for (var i = 0; i < values.length; i++) {
        if (!(values[i] instanceof Array)) {
            values[i] = [values[i]];
        }
        func.apply(this, values[i]);
    }
};