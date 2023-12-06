//#region YI

import { Y } from '@syls/y';
import { YArg } from "@syls/y/arg";
import { YKey } from '../../../-module/export.mjs';
import { configComb as config } from "./config.mjs";
import { funcLoopRangeIn } from '@syls/func';

//#endregion
//#region YT

/** ### combTC
 * @typedef combTC
 * @prop {()=>void} func
 * @prop {combTC['func'][]} funcs
*/

/** @typedef {import('./module.mjs').combT&combTC} combT */

//#endregion

/**
 * ### YComb
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YComb extends Y {

    //#region static

    static {

        this

            .appendModule(this)

    };

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YComb[]}
     * @field
     * @static
     * @public
    */
    static stock = [];
    /**
     * ### config
     * 
     * 
     * 
     * ***
     * @field
     * @static
     * @public
    */
    static config = config;

    /**
     * @arg {...YComb} args `Аргументы`
     * @returns {YComb[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YComb)?}
     * @template {YComb} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### keys
     * 
     * Сочетание клавиш.
     * 
     * Порядок имеет значение.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YKey[]}
     * @field
     * @public
    */
    keys;
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    label;
    /**
     * ### funcs
     * 
     * Функции.
     * 
     * *** 
     * @since `1.0.0`
     * @type {(()=>void)[]}
     * @field
     * @public
    */
    funcs;

    //#endregion
    //#region method

    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YComb;

    };
    /**
     * ### exec
     * 
     * Метод выполнения функций комбинации.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    exec() {

        funcLoopRangeIn(this.funcs, func => func());

    };
    /**
     * ### check
     * 
     * Метод проверки соответствия клавиш и комбинации.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    check(...keys) {

        if (keys.length) {

            keys = keys.slice(-this.keys.length);

            if (this.keys.length === keys.length && this.keys.every((key, index) => key.compare(keys[index]))) {

                return true;

            };

        };

        return false;

    };
    /**
     * ### apply
     * 
     * Метод применения клавиш к комбинации.
     * 
     * В случае, если комбинация переданных клавиш совпадает с текущей комбинацией, то это приведёт к их применению.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    apply(...keys) {

        if (this.check(...keys)) {

            this.exec();

            return true;

        } else {

            return false;

        };

    };
    /**
     * ### appendFunc
     * 
     * Метод добавления функций к комбинации.
     * 
     * ***
     * @arg {...combTC['func']} funcs `Функции`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendFunc(...funcs) {
        
        this.funcs.push(...funcs.filter(func => !this.funcs.includes(func)));

        return this;
        
    };

    //#endregion

    /**
     * ### YCombConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {combTC} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @since `1.0.0`
     * @public
     * @version `1.0.0`
     * @constructor
    */
    constructor(...args) {

        try {

            //#region before

            /** @type {YArg<YComb&combTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);

            yarg.set(

                ['label', 'string'],
                ['funcs', 'arrayFunc'],

            );

            yarg.setAll(

                ['keys', 'array', 'arrayString'],

            );

            super(yarg);

            //#endregion
            //#region verify



            //#endregion
            //#region handle

            funcLoopRangeIn(yarg.used.keys, (key, index, array) => {

                if (!Array.isArray(key)) return;

                array[index] = new YKey(...key);

            });

            if (!yarg.used.label) {

                yarg.used.label = [];

                for (const key of yarg.used.keys) yarg.used.label.push(key.name);

                yarg.used.label = yarg.used.label.join('+');

            };

            //#endregion
            //#region comply



            //#endregion

            return this

                .adopt(yarg.used)


        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };

    };

};

// //#region YT

// /** ### YCombT
//  * - Тип `T`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\terminal\listener\comb`
//  *
//  * Основной параметр модуля `YComb`.
//  *
//  * ***
//  *
//  * @typedef {YCombTE&YCombTU} YCombT
// */
// /** ### YCombTE
//  * - Тип `TE`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\terminal\listener\comb`
//  *
//  * Параметр наследования `YComb`.
//  *
//  * @typedef {{[p in Exclude<keyof DComb,keyof SComb>|Exclude<keyof SComb,keyof DComb>]:(DComb[p]&SComb[p])}} YCombTE
// */
// /** ### YCombTU
//  * - Тип `TU`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\terminal\listener\comb`
//  *
//  * Уникальные параметры `YComb`.
//  *
//  * @typedef YCombTU
//  * @prop {} _
// */
// /** ### YCombTUG
//  * - Тип `TUP`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\terminal\listener\comb`
//  *
//  * Уникальные генеративные параметры `YComb`.
//  *
//  * @typedef YCombTUG
//  * @prop {null=} _
// */

// //#endregion

// /**
//  * @extends {MComb<G>}
//  * @template {YCombTUG} G
// */
// class FComb extends MComb {

//     /**
//      * ### YComb.constructor
//      *
//      *
//      *
//      * ***
//      * @arg {YCombT&G} t
//     */
//     constructor(t) {

//         t = [...arguments];

//         super(Object.assign(t = FComb.#before(t), {}));

//         FComb.#deceit.apply(this, [t]);

//     };

//     /** @arg {any[]} t */
//     static #before(t) {

//         /** @type {YCombT} */
//         let r = {};

//         if (t?.length === 1 && [Object, YComb].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

//             r = t[0];

//         } else if (t?.length) {

//             if (t[0]?._ytp) {

//                 t = [...t[0]._ytp];

//             };

//             switch (t.length) {

//                 case 3: {

//                     if ([t[0], t[1]].every(arg => arg instanceof Array) && typeof t[2] === 'object') {

//                         r.keys = t[0];
//                         r.funcs = t[1];
//                         r.response = t[2];

//                         break;

//                     };

//                 };
//                 case 2: {

//                     if (t[0] instanceof Array && t[1] instanceof Array) {

//                         r.keys = t[0];
//                         r.funcs = t[1];

//                         break;

//                     };

//                 };
//                 default: r.keys = t.slice();

//             };

//             if (!Object.values(r).length) {

//                 r = { _ytp: t, };

//             };

//         };

//         return r;

//     };
//     /** @arg {YCombT} t @this {YComb} */
//     static #deceit(t) {

//         try {

//             FComb.#verify.apply(this, [t]);

//         } catch (e) {

//             throw e;

//         } finally {



//         };

//     };
//     /** @arg {YCombT} t @this {YComb} */
//     static #verify(t) {

//         const {



//         } = t;

//         FComb.#handle.apply(this, [t]);

//     };
//     /** @arg {YCombT} t @this {YComb} */
//     static #handle(t) {

//         if (t.keys) {

//             t.keys = t.keys.map(key => {

//                 if (key instanceof Array) {

//                     key = new YKey(...key);

//                 };

//                 return key;

//             });

//         };

//         FComb.#create.apply(this, [t]);

//     };
//     /** @arg {YCombT} t @this {YComb} */
//     static #create(t) {

//         const {



//         } = t;

//         this.adopt(t);

//         if (config) {

//             this.adoptDefault(config);

//         };

//     };

// };

// /**
//  * ### YComb
//  * - Тип `SDIMFY`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\terminal\listener\comb`
//  * - Цепочка `BDVHC`
//  * ***
//  *
//  *
//  *
//  * ***
//  * @extends {FComb<G>}
//  * @template {YCombTUG} G
// */
// export class YComb extends FComb {

//     /**
//      * ### exec
//      * - Версия `0.0.0`
//      * ***
//      *
//      * Метод выполнения комбинации.
//      *
//      * ***
//      * @public
//     */
//     exec() {

//         for (const func of this.funcs) {

//             func();

//         };

//         return this;

//     };
//     /**
//      * ### check
//      * - Версия `0.0.0`
//      * ***
//      *
//      * Метод проверки указанных клавиш со связкой.
//      *
//      * ***
//      * @arg {...YKey} keys `Клавиши`
//      * @public
//     */
//     check(...keys) {

//         if (keys.length) {

//             keys = keys.slice(-this.keys.length);

//             if (this.keys.length === keys.length && this.keys.every((key, index) => key.compare(keys[index]))) {

//                 return true;

//             };

//         };

//         return false;

//     };
//     /**
//      * ### apply
//      * - Версия `0.0.0`
//      * ***
//      *
//      * Метод применения комбинации к указанным клавишам.
//      *
//      * ***
//      * @arg {...YKey} keys `Клавиши`
//      * @public
//     */
//     apply(...keys) {

//         if (this.check(...keys)) {

//             this.exec();

//             return true;

//         } else {

//             return false;

//         };

//     };

//     /**
//      * ### appendFuncs
//      *
//      * ***
//      *
//      * Метод добавления функций.
//      *
//      * ***
//      * @arg {...(() => void)} funcs `Функции`
//      * @public
//     */
//     appendFuncs(...funcs) {

//         this.funcs.push(...funcs.filter(func => !this.funcs.includes(func)));

//         return this;

//     };

// };