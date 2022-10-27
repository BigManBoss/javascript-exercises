const sumAll = function(a, b) {
    let sum = 0;
    if(a >= 0 && b >= 0 && typeof a === "number" && typeof b === "number") {
        if(a > b) {
            while(b <= a) {
                sum += b;
                b++;
            };
        } else {
            while(a <= b) {
                sum += a;
                a++;
            };
        };
    } else {
        sum = "ERROR";
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
