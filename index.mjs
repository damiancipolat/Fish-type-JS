import { ValidationError } from './error.js';
import {
    primitives,
    convertMultiple,
    convertOne
} from './types.js';
import {
    complete,
    single
} from './validate.js';

//Create a decorated function with type validation.
const decorate = (types, out, allowUnknow) => (fn) => (...args) => {

    //Convert the parameters list.
    types = convertMultiple(types);

    //Convert the ouput.
    out = convertOne(out);

    //Validate the function call.
    const valid = complete(args, types, allowUnknow);

    if (valid && valid.status == 'error') {

        //Launch error with message and stack.
        throw new ValidationError('TYPE_CHECK_PARAMS', valid.stack);

    } else {

        //Call the function send the args.
        const result = fn(...args);

        //If the output type is defined.
        if ((out) && (!single(out, result, allowUnknow)))
            throw new ValidationError('TYPE_CHECK_OUTPUT', out);

        return result;

    }

}

function type_of(value) {
    return Object.prototype.toString.call(value).split("]")[0].split(" ")[1].toLowerCase();
}

function typedef(struct) {
    return function validate(object) {
        Object.entries(object).forEach(function ([key, value]) {
            const validator = struct[key];
            const primitive = type_of(value) !== "object" && value instanceof validator;
            const complex = validator(value);
            if (!primitive || !complex) {
                throw TypeError(key);
            }
        });
        return true; // Successful validation
    }
}

function validate(return_type, args_array) {
    return function (func) {
        
    }
} 

export default {
    decorate,
    types: primitives,
    typedef
}
