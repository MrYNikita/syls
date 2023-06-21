//#region YI

import { YJect } from '@syls/ject';
import { YElement } from './element/class.mjs';
import { condIsNumber } from '@syls/cond';
import { stringAppend, stringGetRow, stringSetRow } from '../module.mjs';
import { YANSI, ansiGetColorReset } from '@syls/ansi';
import { argClassify } from '@syls/arg';

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

/** ### YLayoutT
 * - Тип `T`
 * 
 * Основной параметр модуля `YLayout`.
 * 
 * @typedef {YLayoutTE&YLayoutTU} YLayoutT
 * 
*/
/** ### YLayoutTE
 * - Тип `TE`
 * 
 * Параметр наследования `YLayout`.
 * 
 * @typedef {Omit<DLayout, keyof SLayout>} YLayoutTE
 * 
*/
/** ### YLayoutTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YLayout`.
 * 
 * @typedef YLayoutTU
 * @prop {string} string
 * 
*/

//#endregion

class SLayout extends YJect {

    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

};
class DLayout extends SLayout {

    /**
     * ### ansi
     * 
     * Ориентировочная ANSI вставка.
     * 
     * *** 
     * @type {YANSI?} 
     * @public
    */
    ansi = null;

};
class ILayout extends DLayout {

    /**
     * ### elements
     * 
     * Элементы.
     * 
     * *** 
     * @type {YElement[][]?} 
     * @protected
    */
    elements = null;

};
class MLayout extends ILayout {



};
class FLayout extends MLayout {

    /**
     * ### YLayout.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLayoutT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FLayout.#before(t), {}));

        FLayout.#deceit.apply(this, [t]);

        return this.correlate();

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YLayoutT} */
        let r = {};

        if (t?.length === 1 && [Object, YLayout].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                default: {

                    const arg = argClassify(t);

                    r.string = arg.string[0];

                };

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #deceit(t) {

        try {

            FLayout.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #verify(t) {

        const {



        } = t;

        FLayout.#handle.apply(this, [t]);

    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #handle(t) {



        FLayout.#create.apply(this, [t]);

    };
    /** @arg {YLayoutT} t @this {YLayout} */
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
 * ### YLayout
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YLayout extends FLayout {

    /**
     * ### get
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    get() {



    };

    /**
     * ### set
     * 
     * ***
     * 
     * Метод установки элементов в разметке.
     * 
     * Если элемент существует, то он будет заменен, иначе - добавлен.
     * 
     * ***
     * @arg {...[number, number, YElement]} elements `Элементы`
     * 
     * При необходимости установки одного элемента, можно описать его без использования остаточных параметров.
     * 
     * @public
    */
    set(...elements) {

        if (condIsNumber(elements[0]) && condIsNumber(elements[1])) {

            if (!(elements[2] instanceof YElement)) {

                elements[2] = new YElement(elements[2]);

            };

            elements = [elements];

        } else if (!elements.every(element => condIsNumber(element[0]) && condIsNumber(element[1] && element[1] instanceof YElement))) {

            throw new Error('Неверный формат аргументов.');

        };

        for (const element of elements) {

            const [y, x, e] = element;

            if (!this.elements) {

                this.elements = [];

            };
            if (!this.elements[y]) {

                this.elements[y] = [];

            };

            const flow = this.elements.slice(0, y).flat().filter(e => e.flow).at(-1);

            if (flow) {

                if (!e.ansi.background) {

                    e.ansi.background = flow.ansi.background;
    
                };

            };

            e.ansi.supplement(this.ansi);

            this.elements[y][x] = e;

        };

        return this;

    };
    /**
     * ### setAnsi
     * 
     * ***
     * 
     * Метод установки вставки-ориентира ANSI.
     * 
     * ***
     * @arg {YANSI?} ansi `ANSI`
     * @public
    */
    setAnsi(ansi = null) {
        
        this.ansi = ansi;

        return this;
        
    };

    /**
     * ### rem
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    rem() {



    };

    /**
     * ### apply
     * 
     * ***
     * 
     * Метод применения шаблонов к указанной строке.
     * 
     * ***
     * @arg {string} string `Строки`
     * @public
    */
    apply(string) {

        let result = string;

        if (!this.elements || !this.elements.length) {

            return result;

        };

        for (let y = this.elements.length - 1; y >= 0; y--) {

            const line = this.elements[y];

            if (line) {

                for (let x = line.length - 1; x >= 0; x--) {

                    const element = line[x];

                    if (element) {

                        result = stringSetRow(result, stringAppend(stringGetRow(result, y), x, element.ansi.get() + element.value), y);

                    };

                };

            };

        };

        return result;

    };
    /**
     * ### applyMany
     * 
     * ***
     * 
     * Метод применения шаблона к указанным строкам.
     * 
     * ***
     * @arg {...string} strings `Строки`
     * @public
    */
    applyMany(...strings) {

        const results = [];

        if (!this.elements || !this.elements.length) {

            return strings;

        };

        for (let string of strings) {

            results.push(this.apply(string) + ansiGetColorReset());

        };

        return results;

    };

};