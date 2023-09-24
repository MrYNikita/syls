import { arrayCompress, arrayCompressNew, arrayCreate, arrayGetOut, arrayMove, arrayPad, arrayRepeat, arraySelect, arrayToClassNew } from "@syls/array";
import { YNumber } from "@syls/number";
import { YCond } from "@syls/y/cond";

const arr = [0, 1, 2, 3, null, null, null, 7, 8];

// console.log(arraySelect(arr, x => YCond.isString(x), x => x.length > 2));
// console.log(arrayGetOut(arr, 1, 'x'), arr);
// console.log(arrayPad(arr, 20, null, 'center'));
// console.log(arrayRepeat(arr, 1));
// console.log(arrayCreate(10));
// console.log(arrayMove(arr, 7, -4));
// console.log();
// console.log();