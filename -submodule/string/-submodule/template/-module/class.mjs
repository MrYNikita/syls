//#region YI

import { Y } from '@syls/y';
import { templateMark } from './export.mjs';
import { configString } from '../../../-module/export.mjs';


//#endregion
//#region YT

/** ### YTemplateT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * 
 * Основной параметр модуля `YTemplate`.
 * 
 * @typedef {YTemplateTE&YTemplateTU} YTemplateT
 * 
*/
/** ### YTemplateTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * 
 * Параметр наследования `YTemplate`.
 * 
 * @typedef {{[p in Exclude<keyof DTemplate,keyof STemplate>|Exclude<keyof STemplate,keyof DTemplate>]:(DTemplate[p]&STemplate[p])}} YTemplateTE
 * 
*/
/** ### YTemplateTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * 
 * Уникальные параметры `YTemplate`.
 * 
 * @typedef YTemplateTU
 * @prop {any} _
 * 
*/

//#endregion

class STemplate extends Y {

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
class DTemplate extends STemplate {

    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    label;
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    value;

};
class ITemplate extends DTemplate {



};
class MTemplate extends ITemplate {



};
class FTemplate extends MTemplate {

    /**
     * ### YTemplate.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTemplateT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FTemplate.#before(t), {}));

        FTemplate.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YTemplateT} */
        let r = {};

        if (t?.length === 1 && [Object, YTemplate].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2: r.value = t[1];
                case 1: r.label = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YTemplateT} t @this {YTemplate} */
    static #deceit(t) {

        try {

            FTemplate.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YTemplateT} t @this {YTemplate} */
    static #verify(t) {

        const {



        } = t;

        FTemplate.#handle.apply(this, [t]);

    };
    /** @arg {YTemplateT} t @this {YTemplate} */
    static #handle(t) {

        t.value = templateMark(t.value);

        FTemplate.#create.apply(this, [t]);

    };
    /** @arg {YTemplateT} t @this {YTemplate} */
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
 * ### YTemplate
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTemplate extends FTemplate {

    /**
     * ### apply
     * 
     * Метод применения шаблона.
     * 
     * ***
     * @arg {...[string]} params `Параметры`
     * @public
    */
    apply(...params) {

        if (typeof params[0] === 'string') {

            params = [params];

        };

        let result = '';

        for (const param of params) {

            let count = 0;
            let resultSub = this.value;

            for (const insert of param) {

                if (typeof insert !== 'string') {

                    insert = insert.toString();

                };

                if (insert.includes(configString.insertSpliter)) {

                    const [label, value] = insert.split(configString.insertSpliter);

                    resultSub = resultSub.replaceAll(`${configString.insertBegin}${label}${configString.insertEnd}`, value);

                } else {

                    resultSub = resultSub.replaceAll(`${configString.insertBegin}.${count++}${configString.insertEnd}`, insert);

                };

            };

            result += resultSub;

        };

        return result;

    };

};