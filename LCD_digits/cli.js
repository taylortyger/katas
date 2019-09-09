#!/usr/bin/env node
const LCDNumber = require('./digits/LCDNumber').LCDNumber;

const [,, ...args] = process.argv;

let number = args[0];

if(number) {
    new LCDNumber(number).print();
}