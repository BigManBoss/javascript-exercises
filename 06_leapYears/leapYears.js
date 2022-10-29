const leapYears = function(num) {
    let result;
    if (num % 4 === 0) {
        if (num % 100 === 0) {
            if (num % 400 === 0){
                result = true;
            } else {
                result = false;
            };
        } else {
            result = true;
        };
    } else {
        result = false;
    };
    return result;
};

// Do not edit below this line
module.exports = leapYears;
