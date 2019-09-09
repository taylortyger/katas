#!/usr/bin/env node
const LCDNumber = require('./digits/LCDNumber').LCDNumber;

const [,, ...args] = process.argv;

if(args) {
    for(number of args) {
        new LCDNumber(number).print();
    }
}