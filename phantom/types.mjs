import type_of from "./typeof";

function abs(number) {
    return (
        number < 0
            ? -number
            : number
    );
}

function any() {
    return true;
}

function string(value) {
    if (typeof value !== "string") {
        throw TypeError("The expected value was a string.");
    }
    return true;
}

function boolean(value) {
    if (typeof value !== "boolean") {
        throw TypeError("The expected value was a boolean.");
    }
    return true;
}

function number(value) {
    if (typeof value !== "number") {
        throw TypeError("The expected value was a JavaScript number.");
    }
    return true;
}

function bigint(value) {
    if (typeof value !== "bigint") {
        throw TypeError("The expected value was a big integer.");
    }
    return true;
}

function int(value) {
    if (
        typeof value !== "number"
        || (
            value << 0 !== value
            && abs(value) > Number.MAX_SAFE_INTEGER
        )
    ) {
        throw TypeError("The expected value was a safe integer.");
    }
    return true;
}

function object(value) {
    if (type_of(value) === "object") {
        throw TypeError("The expected value was an object.");
    }
    return true;
}

function date(value) {
    if (type_of(value) !== "date") {
        throw TypeError("The expected value was a Date object.");
    }
    return true;
}

function promise(value) {
    if (type_of(value) !== "promise") {
        throw TypeError("The expected value was a Promise object.");
    }
    return true;
}

export default {
    any,
    string,
    boolean,
    number,
    int,
    bigint,
    object,
    date,
    promise
}
