//#region YI

import { YEntity } from '@syls/entity';
import { YComb, YKey } from '@syls/key';
import { YListener } from '@syls/listener';


//#endregion
//#region YT

/** ### YTerminalT
 * - Тип `T`
 * 
 * Основной параметр модуля `YTerminal`.
 * 
 * @typedef {YTerminalTE&YTerminalTU} YTerminalT
 * 
*/
/** ### YTerminalTE
 * - Тип `TE`
 * 
 * Параметр наследования `YTerminal`.
 * 
 * @typedef {{[p in Exclude<keyof DTerminal,keyof STerminal>|Exclude<keyof STerminal,keyof DTerminal>]:(DTerminal[p]&STerminal[p])}} YTerminalTE
 * 
*/
/** ### YTerminalTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YTerminal`.
 * 
 * @typedef YTerminalTU
 * @prop {any} _
 * 
*/

//#endregion

class STerminal extends YEntity {

    /**
     * ### combs
     * 
     * Общие комбинации.
     * 
     * *** 
     * @type {YComb[]} 
     * @public
    */
    static combs = [

        new YComb({

            keys: [

                new YKey('escape'),

            ],
            funcs: [

                y => y.save().off(),

            ],

        }),
        new YComb({

            keys: [

                new YKey('f1'),

            ],
            funcs: [

                y => y.back(),

            ],

        }),
        new YComb({

            keys: [

                new YKey('f5'),

            ],
            funcs: [

                y => y.restart(),

            ],

        }),
        new YComb({

            keys: [

                new YKey('r', '', false, true, false)

            ],
            funcs: [

                y => y.restart(),

            ],

        }),
        new YComb({

            keys: [

                new YKey('c', false, true)

            ],
            funcs: [

                y => console.clear(),

            ],

        }),

    ];
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
class DTerminal extends STerminal {

    /**
     * ### sizes
     * 
     * Размерность.
     * 
     * *** 
     * @type {[number, number]} 
     * @public
    */
    sizes;
    /**
     * ### combs
     * 
     * Комбинации.
     * 
     * *** 
     * @type {YComb[]} 
     * @public
    */
    combs = [];

};
class ITerminal extends DTerminal {

    /**
     * ### listener
     * 
     * Прослушиватель.
     * 
     * *** 
     * @type {YListener} 
     * @protected
    */
    listener = new YListener();

};
class MTerminal extends ITerminal {



};
class FTerminal extends MTerminal {

    /**
     * ### YTerminal.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTerminalT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FTerminal.#before(t), {}));

        FTerminal.#deceit.apply(this, [t]);

        return this.correlate();

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YTerminalT} */
        let r = {};

        if (t?.length === 1 && [Object, YTerminal].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                default:
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
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #deceit(t) {

        try {

            FTerminal.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #verify(t) {

        const {



        } = t;

        FTerminal.#handle.apply(this, [t]);

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #handle(t) {



        FTerminal.#create.apply(this, [t]);

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

        this.listener.appendCombs(this.combs, this.constructor.combs);

    };

};

/**
 * ### YTerminal
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTerminal extends FTerminal {

    /**
     * ### on
     * 
     * ***
     * 
     * Метод активации терминала.
     * 
     * ***
     * @public
    */
    on() {

        this.listener.on();

        return this;

    };
    /**
     * ### off
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    off() {

        this.listener.off();

    };

    /**
     * ### getListener
     * 
     * ***
     * 
     * Метод получения оболочки прослушивателя.
     * 
     * ***
     * @public
    */
    getListener() {

        return this.getShell(this.listener);

    };

    /**
     * ### appendCombs
     * 
     * ***
     * 
     * Комбинации.
     * 
     * ***
     * @arg {...YComb} combs `Комбинации`
     * @public
    */
    appendCombs(...combs) {
        
        this.combs.push(...combs);

        return this;
        
    };

};