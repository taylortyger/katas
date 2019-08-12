function eval(expression){
    if(!expression) return 0;
    let nums = expression.split(/[\n,]+/).map(x => Number(x));
    return nums.reduce((total, item) => total + item);
}

module.exports = {
    eval: eval
}