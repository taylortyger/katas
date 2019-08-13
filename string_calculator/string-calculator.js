function eval(expression){
    if(!expression) return 0;
    let delimiters = getCustomDelimiters(expression);
    let nums = getNums(expression, delimiters);
    return nums.reduce((total, item) => total + item);
}

function getCustomDelimiters(expression) {
    let delimiters = [];
    if(expression.startsWith('//')) {
        let customDelimitersString = expression.substring(0, expression.indexOf('\n'));
        if(customDelimitersString[2] === '['){
            delimiters = customDelimitersString.split(/[\[\]]/);
            delimiters.shift(); //remove '//' from delims
        } else {
            delimiters.push(customDelimitersString[2]);
        }
    }
    return delimiters;
}

//------------------------------------------------------------
// Parses the expression string to generate a list of numbers
// contained in the expression.  
//------------------------------------------------------------
function getNums(expression, delimiterArray) {
    let delimiters = ['\\n',','].concat(delimiterArray).join('');
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