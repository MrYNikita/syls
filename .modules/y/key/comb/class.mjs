//#region YI

import { Y } from '@syls/Y';
import { YKey } from '@syls/key';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YCombT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\comb`
 * 
 * Основной параметр модуля `YComb`.
 * 
 * ***
 * 
 * @typedef {YCombTE&YCombTU} YCombT
*/
/** ### YCombTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\comb`
 * 
 * Параметр наследования `YComb`.
 * 
 * @typedef {{[p in Exclude<keyof DComb,keyof SComb>|Exclude<keyof SComb,keyof DComb>]:(DComb[p]&SComb[p])}} YCombTE
*/
/** ### YCombTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\comb`
 * 
 * Уникальные параметры `YComb`.
 * 
 * @typedef YCombTU
 * @prop {} _
*/
/** ### YCombTUG
 * - Тип `TUP`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\comb`
 * 
 * Уникальные генеративные параметры `YComb`.
 * 
 * @typedef YCombTUG
 * @prop {null=} _
*/

//#endregion

/**
 * @template {YCombTUG} G
*/
class SComb extends Y {

    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

};
/**
 * @extends {SComb<G>}
 * @template {YCombTUG} G
*/
class DComb extends SComb {

    /**
     * ### keys
     * 
     * Сочетание клавиш.
     * 
     * Порядок имеет значение.
     * 
     * *** 
     * @type {YKey[]} 
     * @public
    */
    keys = [];
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    label;
    /**
     * ### funcs
     * 
     * Функции.
     * 
     * *** 
     * @type {((G)=>void)[]} 
     * @public
    */
    funcs = [];

};
/**
 * @extends {DComb<G>}
 * @template {YCombTUG} G
*/
class IComb extends DComb {



};
/**
 * @extends {IComb<G>}
 * @template {YCombTUG} G
*/
class MComb extends IComb {



};
/**
 * @extends {MComb<G>}
 * @template {YCombTUG} G
*/
class FComb extends MComb {

    /**
     * ### YComb.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCombT&G} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FComb.#before(t), {}));

        FComb.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YCombT} */
        let r = {};

        if (t?.length === 1 && [Object, YComb].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3: {

                    if ([t[0], t[1]].every(arg => arg instanceof Array) && typeof t[2] === 'object') {

                        r.keys = t[0];
                        r.funcs = t[1];
                        r.response = t[2];

                        break;

                    };

                };
                case 2: {

                    if (t[0] instanceof Array && t[1] instanceof Array) {

                        r.keys = t[0];
                        r.funcs = t[1];

                        break;

                    };

                };
                default: r.keys = t.slice();

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YCombT} t @this {YComb} */
    static #deceit(t) {

        try {

            FComb.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YCombT} t @this {YComb} */
    static #verify(t) {

        const {



        } = t;

        FComb.#handle.apply(this, [t]);

    };
    /** @arg {YCombT} t @this {YComb} */
    static #handle(t) {

        if (t.keys) {

            t.keys = t.keys.map(key => {

                if (key instanceof Array) {

                    key = new YKey(...key);

                };

                return key;

            });

        };

        FComb.#create.apply(this, [t]);

    };
    /** @arg {YCombT} t @this {YComb} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YComb
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\comb`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends {FComb<G>}
 * @template {YCombTUG} G
*/
export class YComb extends FComb {

    /**
     * ### exec
     * - Версия `0.0.0`
     * ***
     * 
     * Метод выполнения комбинации.
     * 
     * ***
     * @public
    */
    exec() {

        for (const func of this.funcs) {

            func();

        };

        return this;

    };
    /**
     * ### check
     * - Версия `0.0.0`
     * ***
     * 
     * Метод проверки указанных клавиш со связкой.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
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
     * - Версия `0.0.0`
     * ***
     * 
     * Метод применения комбинации к указанным клавишам.
     * 
     * *** 
     * @arg {...YKey} keys `Клавиши`
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
     * ### appendFuncs
     * 
     * ***
     * 
     * Метод добавления функций.
     * 
     * ***
     * @arg {...(() => void)} funcs `Функции`
     * @public
    */
    appendFuncs(...funcs) {

        this.funcs.push(...funcs.filter(func => !this.funcs.includes(func)));

        return this;

    };

};