const repeatString = function(string, num) {
//    let text = string;
//    let n = num;
    let exitText = "";
    if (num < 0) {
        exitText = "ERROR";
    };
    while(num > 0) {
        exitText += string;
        num --;
    };
    return exitText;
};

// Do not edit below this line
module.exports = repeatString;
