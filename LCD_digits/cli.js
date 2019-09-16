#!/usr/bin/env node
const LCDNumberConverter = require('./LCDNumberConverter').LCDNumberConverter;

const [,, ...args] = process.argv;

for(number of args) {
    console.log(LCDNumberConverter.convertToLCDString(number));
}