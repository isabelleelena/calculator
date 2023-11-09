// Calculation Functions:

function addition(...nums) {
    let result = nums.reduce((sum, current) => sum + current, 0);
    return result;
}

function subtraction(...nums) {
    let result = nums.reduce((sum, current) => sum - current, 0);
    return result;
}

function multiply(...nums) {
    let result = nums.reduce((sum, current) => sum * current, 1);
    return result;
}

function divide(...nums) {
    if (nums.length < 1) {
        return 0
    } else {
        let result = nums.reduce((sum, current) => sum / current);
        return result;
    }
}