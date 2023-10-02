import { netRequest } from "@syls/os/net";
import { YPath, pathGet, pathGetDisk, pathGetName, pathSetExpand, pathSetName } from "@syls/os/path";

console.clear();

// const path1 = new YPath('test2/test.txt');
// const path2 = new YPath('test2/test.csv');

// path1

//     .setName('eee')
//     .setExpand('csv')
//     .print()

// console.log(pathGetName(pathGet('test2/test.txt')));
// console.log(pathSetExpand(pathGet('test2/test.txt'), 'cmd'));
// console.log(pathSetName(pathGet('test2/test.txt'), 'eee'));
// console.log(pathGetDisk('C:/Config'));
console.log();
console.log(await netRequest('habr.com', '/ru/articles/554274/', 'GET'));