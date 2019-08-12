function eval(expression){
    if(!expression) return 0;
    let nums = expression.split(/[\n,]+/).map(x => Number(x));
    if(nums.length < 2) return nums[0];
    return nums[0] + nums[1];
}

module.exports = {
    eval: eval
}