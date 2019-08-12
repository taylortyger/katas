function eval(expression){
    if(!expression) return 0;
    let nums = expression.split(/[\n,]+/).map(x => {
        let num = Number(x);
        if(num < 0) throw "Negative numbers are not allowed.";
        if(num > 1000) num = 0;
        return num;
    });
    return nums.reduce((total, item) => total + item);
}

module.exports = {
    eval: eval
}