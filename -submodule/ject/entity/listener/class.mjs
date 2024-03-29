//#region YI

import { YEntity } from '@syls/entity';
import { YKey, YComb } from '@syls/key';
import { emitKeypressEvents } from 'readline';


//#endregion
//#region YT

/** ### YListenerT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\listener`
 * 
 * Основной параметр модуля `YListener`.
 * 
 * @typedef {YListenerTE&YListenerTU} YListenerT
 * 
*/
/** ### YListenerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\listener`
 * 
 * Параметр наследования `YListener`.
 * 
 * @typedef {{[p in Exclude<keyof DListener,keyof SListener>|Exclude<keyof SListener,keyof DListener>]:(DListener[p]&SListener[p])}} YListenerTE
 * 
*/
/** ### YListenerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\listener`
 * 
 * Уникальные параметры `YListener`.
 * 
 * @typedef YListenerTU
 * @prop {any} _
 * 
*/

//#endregion

class SListener extends YEntity {

    static {

        process.stdin.setRawMode(true);
        emitKeypressEvents(process.stdin);

    };

    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### listener
     * 
     * Прослушиватель.
     * 
     * *** 
     * @type {YListener} 
     * @protected
    */
    static listener = null;

    /**
     * ### on
     * - Версия `0.0.0`
     * ***
     * 
     * Метод запуска прослушивателя.
     * 
     * ***
     * @public
    */
    static on() {
        
        this.listener.on();

        return this;
        
    };
    /**
     * ### off
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отключения прослушивателя.
     * 
     * ***
     * @public
    */
    static off() {
        
        this.listener.off();

        return this;
        
    };
    /**
     * ### debug
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отладки.
     * 
     * ***
     * @public
    */
    static debug() {
        
        this.listener.on();

        process.stdin.on('keypress', () => {

            console.clear();

            const key = this.listener.keys.at(-1) ?? {};

            const comb = new YComb(

                [['w'], ['g']],
                [
                    
                ],
                {
                    redraw: true,
                }

            );

            const response = comb.apply(this.listener, ...this.listener.keys);

            if (response) {

                this.listener.keys = [];

            };

            console.clear();
            console.log(comb);
            console.log(this.listener.keys);
            console.log();
            console.log();

        });

        return this;
        
    };
    /**
     * ### appendKeys
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления клавиш в общий прослушиватель.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * @public
    */
    static appendKeys(...keys) {
        
        this.listener.appendKeys(...keys);

        return this;
        
    };

};
class DListener extends SListener {

    

};
class IListener extends DListener {

    /**
     * ### keys
     * 
     * Клавиши.
     * 
     * *** 
     * @type {YKey[]} 
     * @protected
    */
    keys = [];
    /**
     * ### combs
     * 
     * Комбинации.
     * 
     * *** 
     * @type {(YComb|YComb[])[]} 
     * @protected
    */
    combs = [];
    /**
     * ### active
     *
     * Состояние.
     *
     * ***
     * @type {boolean}
     * @protected
    */
    active = false;
    /**
     * ### callback
     * 
     * Возврат.
     * 
     * *** 
     * @type {(function():void)?} 
     * @public
    */
    callback = null;

};
class MListener extends IListener {

    

};
class FListener extends MListener {

    /**
     * ### YListener.constructor
     * 
     * 
     * 
     * ***
     * @arg {YListenerT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FListener.#before(t), {}));

        FListener.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YListenerT} */
        let r = {};

        if (t?.length === 1 && [Object, YListener].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.recepient = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #deceit(t) {

        try {

            FListener.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #verify(t) {

        const {



        } = t;

        FListener.#handle.apply(this, [t]);

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #handle(t) {



        FListener.#create.apply(this, [t]);

    };
    /** @arg {YListenerT} t @this {YListener} */
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
 * ### YListener
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
export class YListener extends FListener {

    static {

        SListener.listener = new YListener();

    };

    /**
     * ### on
     * - Версия `0.0.2`
     * - Модуль `YListener`
     * ***
     *
     * Метод активации прослушивания.
     *
     * ***
     *
     * @public
    */
    on() {

        this.active = true;

        /** @arg {import("readline").Key} k `Данные клавиши` */
        this.callback = (c, k) => {

            this.combs = this.combs.filter(comb => !(!comb || (comb instanceof Array && comb.length === 0)));

            const key = new YKey(k.name, k.sequence, false, k.ctrl, k.shift);

            this.appendKeys(key);

            if (key.code === '\x1b') {

                process.exit();

            } else {

                for (const comb of this.combs.flat()) {
                    
                    if (comb instanceof YComb && comb.apply(...this.keys)) {

                        this.keys = [];
                        break;

                    };

                };

            };

        };

        process.stdin.on('keypress', this.callback);

        return this;

    };
    /**
     * ### off
     * - Версия `0.0.2`
     * - Модуль `YListener`
     * ***
     *
     * Метод отключения прослушивания.
     *
     * ***
     *
     * @public
    */
    off() {

        this.active = false;

        process.stdin.removeListener('keypress', this.callback);

        process.exit();

    };

    /**
     * ### appendKeys
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления клавиш.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * @public
    */
    appendKeys(...keys) {

        if (keys.length === config.keysLength) {

            this.keys = keys;

        } else if (keys.length > config.keysLength) {

            this.keys = keys.slice(-config.keysLength);

        } else if (this.keys.length + keys.length > config.keysLength) {

            this.keys = [...this.keys, ...keys].slice(-config.keysLength);

        } else {

            this.keys.push(...keys);

        };

        return this;
        
    };
    /**
     * ### appendCombs
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления комбинаций.
     * 
     * ***
     * @arg {...[YComb|[string, ()=>void]]} combs Комбинации
     * @public
    */
    appendCombs(...combs) { 

        this.combs.push(...combs);

        return this;
        
    };

};