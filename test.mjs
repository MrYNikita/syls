// #region Test

// import { YGameMafia } from "@syls/game/mafia";

import { YMany } from "@syls/many";
import { YCursor } from "@syls/many/cursor";
import { testVStringRuler } from "@syls/test";

// const ym1 = new YMany([[0, 1], [2, 3]]);
// const yc1 = ym1.cursors[0];

// yc1

//     .mode(

//         'limit',
//         'transitive',

//     )
//     .setMany(testVStringRuler)
//     .move(1)

// yc1.printTable();

const yc2 = new YCursor('123\n654321\n5678194201312414\n4234124123');

yc2
    .mode(

        'limit',
        'transitive',

    )
    // .moveReverse([2])
    .moveReverse([10, 10])
    // .moveReverse([34])
    // .moveReverse([34])
    // .moveReverse([34])
    // .moveReverse([34])
    // .moveReverse([-23])
    // .moveReverse([25])
    // .moveReverse([-100])
    .printTable();

//#endregion
// #region Game

// const ygm = new YGameMafia();

// ygm

//     .appendPlayer(

//         {
//             nickname: 'Первый',
//         },
//         {
//             nickname: 'Второй',
//         },
//         {
//             nickname: 'Третий',
//         },

//     )
//     .print();

// #endregion
// #region Code  


// #endregion