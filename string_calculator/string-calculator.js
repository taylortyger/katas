function eval(expression){
    if(!expression) return 0;
    return Number(expression);
}

module.exports = {
    eval: eval
}