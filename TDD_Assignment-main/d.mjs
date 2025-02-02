import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if (typeof target !== "number" || typeof guess !== "number" || !Number.isInteger(target) || !Number.isInteger(guess)) {
        return null;
    }
    if (guess < target) {
        return "Too low";
    } else if (guess > target) {
        return "Too high";
    } else {
        return "Correct!";
    }
    

}





//#endregion

//#region Tests --------------------------------------------------------------------
const testD = test("Guess Number");

// Basic cases
testD.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
testD.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
testD.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Invalid inputs
testD.isEqual(guessNumber(10, "5"), null, "String should return input null");
testD.isEqual(guessNumber("10", 5), null, "String should return input null");
testD.isEqual(guessNumber(10, 5.5), null, "Non-integer guess should return null");
testD.isEqual(guessNumber(10.5, 5), null, "Non-integer target should return null");
testD.isEqual(guessNumber(null, 5), null, "Null  should return input null");
testD.isEqual(guessNumber(10, undefined), null, "Undefined should return input null");

// Edge cases
testD.isEqual(guessNumber(0, 0), "Correct!", "Target and guess are both zero");
testD.isEqual(guessNumber(0, -1), "Too low", "Target is 0 and guess is -1");
testD.isEqual(guessNumber(-10, -5), "Too high", "Target is -10 and guess is -5");
testD.isEqual(guessNumber(-10, -15), "Too low", "Target is -10 and guess is -15");
testD.isEqual(guessNumber(1000000, 999999), "Too low", "Large numbers should work");
//#endregion
