function eval(expression){
    if(!expression) return 0;
    let delim = '';
    if(expression.startsWith('//')) {
        delim = expression[2];
    }
    let nums = getNums(expression, delim);
    return nums.reduce((total, item) => total + item);
}

function getNums(expression, delim) {
    let delimiters = ['\\n',','].concat(delim).join('');
    let delimRegex = new RegExp(`[${delimiters}]+`);
    let nums = expression.split(delimRegex).map(x => {
        let num = Number(x);
        if(num < 0) throw "Negative numbers are not allowed.";
        if(num > 1000) num = 0;
        return num || 0; //return 0 if null or undefined
    });
    return nums;
}

module.exports = {
    eval: eval
}