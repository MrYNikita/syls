//#region YI

import { YConsole } from '@syls/console';
import { YElement } from '../class.mjs';
import { stringFormatDate, structureFrame } from '@syls/string';


//#endregion
//#region YT

/** ### YIndicatorTimeT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YIndicatorTime`.
 * 
 * @typedef {YIndicatorTimeTE&YIndicatorTimeTU} YIndicatorTimeT
 * 
*/
/** ### YIndicatorTimeTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YIndicatorTime`.
 * 
 * @typedef {{[p in Exclude<keyof DIndicatorTime,keyof SIndicatorTime>|Exclude<keyof SIndicatorTime,keyof DIndicatorTime>]:(DIndicatorTime[p]&SIndicatorTime[p])}} YIndicatorTimeTE
 * 
*/
/** ### YIndicatorTimeTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YIndicatorTime`.
 * 
 * @typedef YIndicatorTimeTU
 * @prop {any} _
 * 
*/

//#endregion

class SIndicatorTime extends YElement {

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
class DIndicatorTime extends SIndicatorTime {



};
class IIndicatorTime extends DIndicatorTime {

    redraw = true;

};
class MIndicatorTime extends IIndicatorTime {



};
class FIndicatorTime extends MIndicatorTime {

    /**
     * ### YIndicatorTime.constructor
     * 
     * 
     * 
     * ***
     * @arg {YIndicatorTimeT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FIndicatorTime.#before(t), {}));

        FIndicatorTime.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YIndicatorTimeT} */
        let r = {};

        if (t?.length === 1 && [Object, YIndicatorTime].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YIndicatorTimeT} t @this {YIndicatorTime} */
    static #deceit(t) {

        try {

            FIndicatorTime.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YIndicatorTimeT} t @this {YIndicatorTime} */
    static #verify(t) {

        const {



        } = t;

        FIndicatorTime.#handle.apply(this, [t]);

    };
    /** @arg {YIndicatorTimeT} t @this {YIndicatorTime} */
    static #handle(t) {



        FIndicatorTime.#create.apply(this, [t]);

    };
    /** @arg {YIndicatorTimeT} t @this {YIndicatorTime} */
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
 * ### YIndicatorTime
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YIndicatorTime extends FIndicatorTime {

    display() {

        YConsole

            .setCursorTo(...this.coords)
            .writeLine(structureFrame(3, 14, 'Time', 'thin', stringFormatDate(new Date(), 'jp')))

        return this;

    };
    setInterface(intf) {

        if (intf) {

            SIndicatorTime.prototype.setInterface.apply(this, [intf]);

            intf.terminal.timer.appendEvents(

                ['', 1, 0, () => this.display()],

            );

        };

        return this;

    };

};