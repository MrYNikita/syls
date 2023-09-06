//#region YI

import { Y } from "../../../-module/export.mjs";
import { configConfig as config } from './config.mjs';

//#endregion
//#region YT

/** ### YConfigT
 * - Тип `T`
 * 
 * Основной параметр модуля `YConfig`.
 * 
 * ***
 * 
 * @typedef {YConfigTE&YConfigTU} YConfigT
*/
/** ### YConfigTE
 * - Тип `TE`
 * 
 * Параметр наследования `YConfig`.
 * 
 * @typedef {Omit<DConfig, keyof SConfig>} YConfigTE
*/
/** ### YConfigTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YConfig`.
 * 
 * @typedef YConfigTU
 * @prop {} _
*/
/** ### YConfigTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YConfig`.
 * 
 * @typedef YConfigTUG
 * @prop {null} _
*/

//#endregion

class SConfig extends Y {

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YConfig[]}
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
     * @arg {...YConfig} args `Аргументы`
     * @returns {YConfig[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SConfig).create.apply(this, args);

    };

};
/**
 * @template Y1,Y2
*/
class DConfig extends SConfig {

    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {Y1&Y2}
     * @field
     * @public
    */
    value;

};
/**
 * @extends DConfig<Y1,Y2>
 * @template Y1,Y2
*/
class IConfig extends DConfig {



};
/**
 * @extends IConfig<Y1,Y2>
 * @template Y1,Y2
*/
class MConfig extends IConfig {



};
/**
 * @extends MConfig<Y1,Y2>
 * @template Y1,Y2
*/
class FConfig extends MConfig {

    /**
     * ### YConfig.constructor
     * 
     * 
     * 
     * ***
     * @arg {YConfigT&G} args
    */
    constructor(args) {

        super(args = FConfig.#before(args = arguments));

        FConfig.#deceit.apply(this, [args]);

    };

    /** @arg {DConfig} args */
    static #before(args) {

        return { value: args[0], prototype: args[1] }

    };
    /** @arg {YArg<IConfig>} args @this {YConfig} */
    static #deceit(args) {

        try {

            FConfig.#verify.apply(this, arguments);

        } catch (e) {

            if (config?.strictMode) {

                throw e;

            };

            return new YConfig();

        } finally {



        };

    };
    /** @arg {YArg<IConfig>} args @this {YConfig} */
    static #verify(args) {

        const {



        } = args;

        FConfig.#handle.apply(this, arguments);

    };
    /** @arg {YArg<IConfig>} args @this {YConfig} */
    static #handle(args) {



        FConfig.#create.apply(this, arguments);

    };
    /** @arg {YArg<IConfig>} args @this {YConfig} */
    static #create(args) {

        const {



        } = args;

        this

            .adopt(args)
            .do(self => {

                if (self.value && args.prototype) {

                    Object.setPrototypeOf(self.value, args.prototype instanceof YConfig ? args.prototype.value : args.prototype);

                };

            })

    };

};

/**
 * ### YConfig
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YConfig`.
 * 
 * ***
 * @class
 * @extends FConfig<YConfigTUG&Y1,Y2>
 * @template Y1,Y2
 * 
*/
export class YConfig extends FConfig {

    /**
     * @arg {Y1} config
     * @arg {Y2} prototype
    */
    constructor(config, prototype) { super(...arguments); };

    /**
     * ### getClass
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
     * @returns {typeof YConfig}
    */
    getClass() {

        return YConfig;

    };

};

//#region YE

YConfig.getY()['modules'].push(YConfig);

//#endregion

/**
 * @file config/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/