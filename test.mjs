import { YString, stringGetColumn, stringSetColumn } from "@syls/string";
import { testVStringChaotic } from "@syls/test";

console.clear();

new YString('Tomas')

    .print()
    .printExec(

        self => self.get(),

    )

// console.log(stringGetColumn(testVStringChaotic, 1));
// console.log(stringSetColumn('111\n222\n333', 'xxx', 0));
// console.log();