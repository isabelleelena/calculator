// Calculation Functions:

function addition(...nums) {
    let result = nums.reduce((sum, current) => sum + current, 0);
    return result;
}

function subtraction(...nums) {
    let result = nums.reduce((sum, current) => sum - current, 0);
    return result;
}