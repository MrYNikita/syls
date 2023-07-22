//#region YI

import { YString, stringGetRows } from '@syls/string';
import { ansiSetColor, ansiSetCursorTo } from '@syls/string/ansi';
import { Y, yClassifyProp } from '@syls/y';

/** @type {import('./config.mjs')['default']['value']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default?.value ? c.default.value : c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(e => error = e.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YConsoleT
 * - Тип `T`
 * 
 * Основной параметр модуля `YConsole`.
 * 
 * @typedef {YConsoleTE&YConsoleTU&Y} YConsoleT
 * 
*/
/** ### YConsoleTE
 * - Тип `TE`
 * 
 * Параметр наследования `YConsole`.
 * 
 * @typedef {Omit<DConsole, keyof SConsole>} YConsoleTE
 * 
*/
/** ### YConsoleTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YConsole`.
 * 
 * @typedef YConsoleTU
 * @prop {any} _
 * 
*/

//#endregion

class SConsole extends Y {
    
    static {

        process.on('exit', () => {
        
            YConsole

                .resetColor(-3)
                .writeLine();
        
        });

    };

    /**
     * ### stock
     * @type {YConsole[]}
     * @public
    */
    static stock = [];
    /**
     * ### config
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### console
     * 
     * ***
     * 
     * Статическая консоль.
     * 
     * *** 
     * @type {YConsole?}
     * @static
     * @protected
    */
    static console = null;
    
    /**
     * @arg {...YConsole} args `Аргументы`
     * @returns {YConsole[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SConsole).create.apply(this, [...args]);
        
    };
    /**
     * ### write
     * 
     * 
     * ***
     * 
     * Метод записи в консоль.
     * 
     * ***
     * @arg {...string} strings `Строки`
     * @public
     * @static
     * @method
    */
    static write(...strings) {

        this.console.write(...strings);

        return this;
        
    };
    /**
     * ### clear
     * 
     * ***
     * 
     * Метод очистки экрана.
     * 
     * ***
     * @public
     * @static
     * @method
    */
    static clear() {

        this.console.clear();

        return this;
        
    };
    /**
     * ### setColor
     * 
     * ***
     * 
     * Метод назначения цветов символов и фона.
     * 
     * ***
     * @arg {import('../../../string/-submodule/ansi/module.mjs').ansiTVColor} foreground
     * @arg {import('../../../string/-submodule/ansi/module.mjs').ansiTVColor} background
     * @public
     * @static
     * @method
    */
    static setColor(foreground, background) {
        
        this.console.setColor(foreground, background);

        return this; 
        
    };
    /**
     * ### writeLine
     * 
     * ***
     * 
     * Метод записи в консоль с переносом на следующую строку.
     * 
     * ***
     * @arg {...string} strings `Строка`
     * @public
     * @static
     * @method
    */
    static writeLine(...strings) {

        this.console.writeLine(...strings);

        return this;  
        
    };
    /**
     * ### resetColor
     * 
     * ***
     * 
     * Метод сброса цвета.
     * 
     * ***
     * @arg {boolean} foreground `Символы`
     * @arg {boolean} background `Фон`
     * @public
     * @static
     * @method
    */
    static resetColor(foreground = config.foreground, background = config.background) {

        this.console.resetColor(foreground, background);

        return this;
        
    };
    /**
     * ### setCursorTo
     * 
     * ***
     * 
     * Метод установки позиции курсора в консоли.
     * 
     * ***
     * @arg {number} x `Линия`
     * @arg {number} y `Колонна`
     * @public
     * @static
     * @method
    */
    static setCursorTo(y, x) {

        this.console.setCursorTo(y, x);

        return this;
        
    };
    /**
     * ### setDuration
     * 
     * ***
     * 
     * Метод установки задержки.
     * 
     * ***
     * @arg {number} duration `Задержка`
     * @public
     * @static
     * @method
    */
    static setDuration(duration = 0) {
        
        this.console.setDuration(duration);

        return this;
        
    };

    /**
     * ### writeDuration
     * 
     * ***
     * 
     * Метод отрисовки строк с задержкой.
     * 
     * ***
     * @arg {string} string `Строка` 
     * @arg {number} duration `Задержка`
     * @async
     * @public
     * @static
     * @method
    */
    static async writeDuration(duration = 0, string) {
        
        await this.console.writeDuration(duration, string);

        return this;
        
    };
    
};
class DConsole extends SConsole {
    
    /** ### y
     * 
     * Координата по y.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    y = 0;
    /** ### x
     * 
     * Координата по x.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    x = 0;
    /** ### width
     * 
     * Ширина консоли.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    width = process.stdout.columns;
    /** ### height
     * 
     * Длина текущей консоли.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    height = process.stdout.rows;
    /** ### duration
     * 
     * Задержка.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    duration = 0;
    
};
class IConsole extends DConsole {
    
    
    
};
class MConsole extends IConsole {
    
    
    
};
class FConsole extends MConsole {
    
    /**
     * ### YConsole.constructor
     * 
     * 
     * 
     * ***
     * @arg {YConsoleT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FConsole.#before(t), {}));
        
        FConsole.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YConsoleT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YConsole].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #deceit(t) {
        
        try {
            
            FConsole.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FConsole.#handle.apply(this, [t]);
        
    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #handle(t) {
        
        
        
        FConsole.#create.apply(this, [t]);
        
    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(this.constructor.config ?? config);
            
        };
        
    };
    
};

/**
 * ### YConsole
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YConsole` позволяет манипулировать консолью за счёт перемещения кареты, очистки или заполнения её пространства, изменение цветов.
 * 
 * ***
 * @class
 * 
*/
export class YConsole extends FConsole {
    
    static {

        YConsole.console = new YConsole();

    };

    /**
     * ### write
     * 
     * ***
     * 
     * Метод записи в консоль.
     * 
     * ***
     * @arg {...string} strings `Строки`
     * @public
    */
    write(...strings) {

        for (const elem of strings) {
            
            if (!elem) {

                continue;

            };

            const string = elem.toString();

            process.stdout.write(string);

            this.x += string.length;

        };

        return this;
        
    };
    /**
     * ### writeDuration
     * 
     * ***
     * 
     * Метод отрисовки строк с задержкой.
     * 
     * ***
     * @arg {string} string `Строка` 
     * @arg {number} duration `Задержка`
     * @async
     * @public
     * @method
    */
    async writeDuration(duration = 0, string) {
        
        if (duration) {

            this.duration = duration;

        };

        for (const char of string) {

            await new Promise((resolve) => {

                if (this.duration) {
    
                    this.write(char);

                    setTimeout(resolve, this.duration);
    
                } else {
    
                    resolve();
    
                };
    
            });

        };

        return this;
        
    };

    /**
     * ### clear
     * 
     * ***
     * 
     * Метод очистки экрана.
     * 
     * ***
     * @public
     * @method
    */
    clear() {

        this
            .setCursorTo(0, 0)
            .write(' '.repeat(this.width * this.height))

        return this;
        
    };
    /**
     * ### setColor
     * 
     * ***
     * 
     * Метод назначения цветов символов и фона.
     * 
     * ***
     * @arg {import('../../../string/-submodule/ansi/module.mjs').ansiTVColor} foreground
     * @arg {import('../../../string/-submodule/ansi/module.mjs').ansiTVColor} background
     * @public
     * @method
    */
    setColor(foreground, background) {
        
        ansiSetColor(foreground, background);

        return this; 
        
    };
    /**
     * ### writeLine
     * 
     * ***
     * 
     * Метод записи в консоль с переносом на следующую строку.
     * 
     * ***
     * @arg {...string} strings `Строка`
     * @public
     * @method
    */
    writeLine(...strings) {

        const x = this.x;

        if (!strings.length) {

            strings[0] = '';

        };

        for (const index in strings) {

            let string = strings[index];

            if (string instanceof YString) {

                string = string.get();

            };

            strings[index] = stringGetRows(string);

        };

        strings = strings.flat();

        for (const string of strings) {

            this.setCursorTo().write(string);

            this.y++;
            this.x = x;

        };

        this.setCursorTo();

        return this;  
        
    };
    /**
     * ### resetColor
     * 
     * ***
     * 
     * Метод сброса цвета.
     * 
     * ***
     * @arg {boolean} foreground `Символы`
     * @arg {boolean} background `Фон`
     * @public
     * @method
    */
    resetColor(foreground = config.foreground, background = config.background) {

        ansiSetColor(foreground, background);

        return this;
        
    };
    /**
     * ### setCursorTo
     * 
     * ***
     * 
     * Метод установки позиции курсора в консоли.
     * 
     * ***
     * @arg {number} x `Линия`
     * @arg {number} y `Колонна`
     * @public
     * @method
    */
    setCursorTo(y, x) {

        if (x > -1 && y > -1) {

            [this.y, this.x] = [y, x];

        };

        ansiSetCursorTo(this.y, this.x);

        return this;
        
    };
    /**
     * ### setDuration
     * 
     * ***
     * 
     * Метод установки задержки.
     * 
     * ***
     * @arg {number} duration `Задержка`
     * @public
     * @method
    */
    setDuration(duration = 0) {
        
        this.duration = duration;

        return this;
        
    };
    
};

/**
 * @file console/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/