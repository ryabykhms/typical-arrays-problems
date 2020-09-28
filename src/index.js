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

    return array.reduce((acc, curr) => {
        return curr > acc ? curr : acc;
    }, array[0]);
};

exports.avg = function avg(array) {
    if (array === undefined || !Array.isArray(array) || array.length === 0) {
        return 0;
    }

    return parseFloat(
        (
            array.reduce((sum, curr) => {
                return sum + curr;
            }, 0) / array.length
        ).toFixed(10)
    ).toString();
};
