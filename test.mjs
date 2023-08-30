import { cryptoGeneratePasswordBlock } from "@syls/crypto";
import { YArg, argClassify } from "@syls/y/arg";

const args = new YArg({

    str1: 'str',
    str2: 'ww',
    num: 21,
    bol: true,

});

args

    .print()
    .printProp(

        ['values', 'string'],
        ['values', 'number'],

    )
    .printExec(
        
        
        
    )