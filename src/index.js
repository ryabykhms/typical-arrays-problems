exports.min = function min(array) {
    if (array === undefined || !Array.isArray(array) || array.length === 0) {
        return 0;
    }

    return array.reduce((acc, curr) => {
        return curr < acc ? curr : acc;
    }, array[0]);
};

exports.max = function max(array) {
    if (array === undefined || !Array.isArray(array) || array.length === 0) {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array === undefined || !Array.isArray(array) || array.length === 0) {
        return 0;
    }
};

// console.log(min([-38,12,-25,-29,-29,-18,18,1,3,7,-27,22,32,5,16,0,-22,23,-37,9]));
