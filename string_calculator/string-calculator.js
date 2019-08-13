function eval(expression){
    if(!expression) return 0;
    let delim = getCustomDelimiter(expression);
    let nums = getNums(expression, delim);
    return nums.reduce((total, item) => total + item);
}

function getCustomDelimiter(expression) {
    let delim = '';
    if(expression.startsWith('//')) {
        let customDelimString = expression.substring(0, expression.indexOf('\n'));
        if(customDelimString[2] === '['){
            delim = customDelimString.split(/[\[\]]/)[1];
        } else {
            delim = customDelimString[2];
        }
    }
    return delim;
}

//------------------------------------------------------------
// Parses the expression string to generate a list of numbers
// contained in the expression.  
//------------------------------------------------------------
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