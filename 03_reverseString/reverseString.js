const reverseString = function(input) {
    let invInput = ""
    for (let i = input.length - 1; i >= 0; i--) {
        invInput += input[i];
    };
    return invInput;
};

// Do not edit below this line
module.exports = reverseString;
