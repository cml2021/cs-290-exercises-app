import _ from "lodash";
import {isValid, parse} from "date-fns";


/**
 * Checks that request contains expected properties and all properties are valid.
 * @param {object} request       request body
 * @returns true if request is valid. Otherwise, returns false.
 */
const validateRequest = request => {
    // check that request contains all expected properties
    if (propertyCheck(Object.keys(request)) === false) {
        return false;
    }
    // check that all properties are valid
    const hasValidName = nameCheck(request.name);
    const hasValidReps = numCheck(request.reps);
    const hasValidWeight = numCheck(request.weight);
    const hasValidUnit = unitCheck(request.unit);
    const hasValidDate = dateCheck(request.date);

    return (hasValidName && hasValidReps && hasValidWeight && hasValidUnit && hasValidDate)
};

/**
 * Checks that request body contains the expected properties (name, reps, weight, unit, date).
 * @param {list} keys       list of request body property names 
 * @returns true if request body contains the expected properties. Otherwise, returns false.
 */
const propertyCheck = keys => {
    const vals = [ 'name', 'reps', 'weight', 'unit', 'date' ];
    const expected = new Set(vals);
    const actual = new Set(keys);
    return (keys.length === 5 && _.isEqual(expected, actual))
};


/**
 * Checks that input is a string containing at least 1 non-whitespace character.
 * @param {*} input          input value
 * @returns true if input is valid. Otherwise, returns false.
 */
const nameCheck = input => {
    if ((typeof(input) === "string") === false) {
        return false;
    }
    const regex = /\S+/g;
    const isMinLength = regex.test(input);

    return (isMinLength);
};

/**
 * Checks that input is a positive integer.
 * @param {*} input         input value
 * @returns true if input is valid. Otherwise, returns false.
 */
const numCheck = input => {
    return Number.isInteger(input) && input > 0;
};

/**
 * Checks that input is a valid unit of weight.
 * @param {*} input         input value
 * @returns true if input is valid. Otherwise, returns false.
 */
const unitCheck = input => {
    return input === "kgs" || input === "lbs";
}

/**
 * Checks that input is a valid date in the format MM-DD-YY.
 * @param {*} input         input value
 * @returns true if the input is valid. Otherwise, returns false.
 */
const dateCheck = input => {
    const regex = /^\d\d-\d\d-\d\d$/;
    // check that input matches MM-DD-YYYY pattern
    if (regex.test(input) === false) {
        return false
    };

    // check that input is a valid date
    const month = input.slice(0, 2);
    const day = input.slice(3, 5);
    const year = input.slice(6);
    const result = isValid(parse(input, 'MM-dd-yy', new Date()));
    
    return result;
}

export {validateRequest}