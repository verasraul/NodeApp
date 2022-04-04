require('dotenv').config()

const firstName = process.env.FIRST_NAME;
const alias = process.env.ALIAS;

console.log(firstName);
console.log(alias);

const addFunction = function add(a, b){
    console.log(a + b);
};

// add(2, 2)

module.exports.addFunction = addFunction;