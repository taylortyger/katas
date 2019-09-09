const LCDDigit = require("./LCDDigit").LCDDigit;

class LCDNumber {
    constructor(number) {
        this.number = number;
        this.lcdDigits = LCDNumber.generateLCDDigits(number);
    }

    printLine1() {
        let line1 = "";
        for(let lcdDigit of this.lcdDigits) {
            line1 += lcdDigit.getLine1() + " ";
        }
        console.log(line1);
    }
    
    printLine2() {
        let line2 = "";
        for(let lcdDigit of this.lcdDigits) {
            line2 += lcdDigit.getLine2() + " ";
        }
        console.log(line2);
    }

    printLine3() {
        let line3 = "";
        for(let lcdDigit of this.lcdDigits) {
            line3 += lcdDigit.getLine3() + " ";
        }
        console.log(line3);
    }

    print() {
        this.printLine1();
        this.printLine2();
        this.printLine3();
    }

    static generateLCDDigits(number) {
        let digits = (""+number).split("");
        let lcdDigits = [];
        for (let digit of digits) {
            lcdDigits.push(new LCDDigit(Number(digit)));    
        }
        return lcdDigits;
    }
}

module.exports = {
    LCDNumber
}