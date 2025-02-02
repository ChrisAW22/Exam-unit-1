import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }

    name = name.trim();

    if (name.length === 0) {
        return "";
    }
    if (/[^a-zA-Z\s]/.test(name)) {
        return null;
    }
    let str = name.trim().split(/\s+/);
    let format = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
        format[i] = str[i][0].toUpperCase()+str[i].slice(1).toLowerCase();
    }
        return format.join(" ");
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const testB = test("Format name");

// valid tests
testB.isEqual(formatName("christoffer walther"),"Christoffer Walther", "Finished result should be Christoffer Walther");
testB.isEqual(formatName("Christoffer Walther"),"Christoffer Walther", "Finished result should be Christoffer Walther");
testB.isEqual(formatName(" Morgan Walther "),"Morgan Walther", "Finished result should be Morgan Walther");
testB.isEqual(formatName(" Morgan walther"),"Morgan Walther", "Finished result should be Morgan Walther");
testB.isEqual(formatName("morgan Walther "),"Morgan Walther", "Finished result should be Morgan Walther");
// Edge cases
testB.isEqual(formatName(" "),"", "Empty string should return empty string");
testB.isEqual(formatName("    "),"", "Whitespace only string should return empty string");

// Invalid inputs
testB.isEqual(formatName("chris@uia"), null , "Finished result should be null");
testB.isEqual(formatName(undefined), null , "Finished result should be null");

//#endregion