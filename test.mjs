// import { arrayMix } from "./-submodule/array/-module/module.mjs";
// import { funcExecRange, funcExecWhile } from "@syls/func";
import { funcBypass, funcExecRangeIn, funcRepeat } from "@syls/func";
import { stringAppend, stringAppendEvery, stringExtract, stringFilter, stringGetColumn, stringGetColumns, stringGetIndexByPosition, stringGetPositionByIndex, stringGetSizes, stringGetStat, stringPad, stringPaste, stringRearrangeRow, stringRearrangeWord, stringRecode, stringRemove, stringRemoveRange, stringResize, stringReverse, stringSearch, stringSearchJect, stringShield, stringSplitEvery, stringSubstring, stringToCaseDown, stringToCaseUp, stringToMatrix, stringUnify } from "@syls/string";
import { testVStringChaotic, testVStringRulerSquare } from "@syls/test";
// import { testVStringSquare } from "@syls/test";

console.clear();
// console.log(stringGetColumn('wqrtwgrgdsfsdas\n1512423t\n124124fdasvfdbntnf', 10));
// console.log(stringReverse('123\n456'));
// console.log(stringAppend('123', 'x'));
// console.log(stringAppendEvery('11500350', '.', 3, 0));
// console.log(stringAppendEvery('0123456789', '.', 1, 3));
// console.log(stringReverse('0123456789', 1, 3));
// console.log(stringGetColumns('wqrtwgrgdsfsdas\n1512423t\n124124fdasvfdbntnf')); 
// console.log(stringGetStat('wqrtwgrgdsfsdas\n1512423t\n124124fdasvfdbntnf'));
// console.log(stringPad('123', 19, '#', 0));
// console.log(stringRearrangeWord('Alice, Bill, Jim.', 0, 2));
// console.log(stringRearrangeRow('123\n456\n789', 0, 2));
// console.log(stringSearch('Hi! My Name is Nikita.', /is (\p{L}+)/u, /\p{L}{0,3}/u));
// console.log(stringSearchJect('Name: Nikita, Age: 22, Name: Katya, Age: 17,', /Name: (?<name>\w+)/g, /Age: (?<age_n>\d+)/g));
// console.log(stringUnify('lllrrlrrrrr', 'r'));
// console.log(stringShield('@ aШ \x1b'));
// console.log(stringResize(testVStringSquare, 15, 15) + 'WW');
// console.log(stringSplitEvery('0123456789', 2));
// console.log(funcBypass('2', 

//     [''.repeat, true, 3],
//     [stringAppend, false, 'WW'],

// ));
// console.log(stringGetIndexByPosition(testVStringRulerSquare, 1, 1));
// console.log(stringAppend(testVStringRulerSquare, 'X', [1, 11]));
// console.log(stringRemoveRange(testVStringRulerSquare, [1, 0], [1, 7]));
console.log(stringRecode('ghbdtn, ,bxb[b!', 'en', 'ru'));
// console.log();
// console.log();