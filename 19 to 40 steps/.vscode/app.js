"use strict";
var main_ts_1 = require('./main.ts'); //simple funtion export krwane k lyn
var addResult = main_ts_1.add(2, 3);
// console.log(abc.add (20,30));
console.log(addResult);
//If VS Code is giving an error compile with this command:
//tsc -target es5 -module commonjs app.ts
//Note ES 2015 modules can used in the TypeScript src filess, as well as can be in the output js file if you set the --target to es6. 
//If it is in output js file you will have to use System.js to use it becuase right now most browsers and node.js do not support ES2015 modules. 
/*ECMAScript 6 provides the following ways of importing:
    // Default exports and named exports
    import theDefault, { named1, named2 } from 'src/mylib';
    import theDefault from 'src/mylib';
    import { named1, named2 } from 'src/mylib';
    
    // Renaming: import named1 as myNamed1
    import { named1 as myNamed1, named2 } from 'src/mylib';
    
    // Importing the module as an object
    // (with one property per named export)
    import * as mylib from 'src/mylib';
    
    // Only load the module, don’t import anything
    import 'src/mylib';
    */
/*
There are two ways in which you can export things that are inside the current module.
On one hand, you can mark declarations with the keyword export.
export var myVar1 = ...;
export let myVar2 = ...;
export const MY_CONST = ...;

export function myFunc() {
    ...
}
export function* myGeneratorFunc() {
    ...
}
export class MyClass {
    ...
}
The “operand” of a default export is an expression (including function expressions and class expressions). Examples:
export default 123;
export default function (x) {
    return x
};
export default x => x;
export default class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
On the other hand, you can list everything you want to export at the end of the module (which is once again similar in style to the revealing module pattern).
const MY_CONST = ...;
function myFunc() {
    ...
}

export { MY_CONST, myFunc };
You can also export things under different names:
export { MY_CONST as THE_CONST, myFunc as theFunc };
*/
