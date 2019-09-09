const ZERO = [  
    " _ ",
    "| |",
    "|_|"
];

const ONE = [
    "   ",
    "  |",
    "  |"
];

const TWO = [  
    " _ ",
    " _|",
    "|_ "
];

const THREE = [
    " _ ",
    " _|",
    " _|"
];

const FOUR = [
    "   ",
    "|_|",
    "  |"
];

const FIVE = [
    " _ ",
    "|_ ",
    " _|"
];

const SIX =  [
    " _ ",
    "|_ ",
    "|_|"
];

const SEVEN = [
    " _ ",
    "  |",
    "  |"
];

const EIGHT = [
    " _ ",
    "|_|",
    "|_|"
];

const NINE = [
    " _ ",
    "|_|",
    "  |"
];

function getDigitPattern(digit) {
    switch(digit) {
        case 0: return ZERO;
        case 1: return ONE;
        case 2: return TWO;
        case 3: return THREE;
        case 4: return FOUR;
        case 5: return FIVE;
        case 6: return SIX;
        case 7: return SEVEN;
        case 8: return EIGHT;
        case 9: return NINE;
        default: throw "Expected single digit 0-9";
    }
}

module.exports = {
    ZERO, 
    ONE, 
    TWO, 
    THREE, 
    FOUR, 
    FIVE, 
    SIX, 
    SEVEN, 
    EIGHT, 
    NINE, 
    getDigitPattern
}