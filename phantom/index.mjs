import { any } from "./types.mjs";

function typedef(struct) {
    return function validate(object) {
        Object.entries(object).forEach(function ([key, value]) {
            const validator = struct[key];
            if (typeof validator !== "function") {
                throw Error("Type validators should be functions.");
            }
            if (!validator(value)) {
                throw TypeError(key);
            }
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

//example
const a = validate(any, [ int, string ])(
    function a(wheels, name) {

    }
);

export default {
    typedef,
    validate
}
