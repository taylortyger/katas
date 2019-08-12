function eval(expression){
    if(!expression) return 0;
    let nums = expression.split(/[\n,]+/).map(x => {
        let num = Number(x);
        if(num < 0) throw "Negative numbers are not allowed.";
        return num;
    });
    return nums.reduce((total, item) => total + item);
}

module.exports = {
    eval: eval
}