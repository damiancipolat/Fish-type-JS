const types = require("./types.js");
const type_of = require("./type_of.js");

const { any } = types;

function typedef(struct) {
    return function validate(object) {
        if (type_of(object) !== "object") {
            throw TypeError("The expected value was an object.");
        }
        Object.entries(object).forEach(function ([key, value]) {
            const validator = struct[key];
            if (typeof validator !== "function") {
                throw Error("Type validators should be functions.");
            }
            validator(value);
        });
        return true; // Successful validation
    }
}

function validate(return_type = any, args_array) {
    return function (func) {
        return function (...args) {
            args.forEach(function (argument, index) {
                const validator = args_array[index];
                if (typeof validator !== "function") {
                    throw Error("Type validators should be functions.");
                }
                validator(argument);
            });
            const result = func(...args);
            if (return_type(result)) {
                return result;
            } 
        };
    };
}

module.exports = {
    typedef,
    validate,
    types
};
