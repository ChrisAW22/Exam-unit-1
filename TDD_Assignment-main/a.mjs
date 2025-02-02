import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function multiply(...args) {

    if (args.some(arg => isNaN(Number(arg)))) {
        return NaN;
    }

    return args.reduce((product, current) => product * Number(current), 1);
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const testA = test ("Multiply");

// Valid inputs
testA.isEqual(multiply(1, 4), 4, "1 multiplied by 4 should be 4");
testA.isEqual(multiply("2", 4), 8, "2 multiplied by 4 should be 8");

// Edge cases
testA.isEqual(multiply(Infinity, 4), Infinity, "infinity multiplied by 4 should be infinity");
testA.isEqual(multiply(-Infinity, 4), -Infinity, "-infinity multiplied by 4 should be -infinity");
testA.isEqual(multiply(4, 0), 0, "4 multiplied by 0 should be 0");
testA.isEqual(multiply(), 1, "if empty should return as 1");

// Invalid inputs
testA.isNotANumber(multiply("hello", 4), "if it's not a number it should return as NaN");
//#endregion