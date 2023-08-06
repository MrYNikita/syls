//#region YI

import { YEntity } from '@syls/entity';
import { yClassifyProp } from '@syls/y';
import { YPath, pathCheck, pathGet } from '@syls/os/path';
import { condIsString, condIsStringValid } from '@syls/y/cond';
import { ChildProcess, fork, spawn } from 'child_process';

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

/** ### YProcessT
 * - Тип `T`
 * 
 * Основной параметр модуля `YProcess`.
 * 
 * @typedef {YProcessTE&YProcessTU} YProcessT
 * 
*/
/** ### YProcessTE
 * - Тип `TE`
 * 
 * Параметр наследования `YProcess`.
 * 
 * @typedef {Omit<DProcess, keyof SProcess>} YProcessTE
 * 
*/
/** ### YProcessTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YProcess`.
 * 
 * @typedef YProcessTU
 * @prop {any} _
 * 
*/

//#endregion

class SProcess extends YEntity {
    
    /** ### stock
     * @type {YProcess[]}
     * @public
    */
    static stock = [];
    /** ### config
     * 
     * ***
     * @public
    */
    static config = config;
    
    /**
     * @arg {...YProcess} args `Аргументы`
     * @returns {YProcess[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SProcess).create.apply(this, [...args]);
        
    };
    
};
class DProcess extends SProcess {
    
    /**
     * ### code
     * 
     * Код.
     * 
     * *** 
     * @type {string}
     * @public
    */
    code;
    /**
     * ### path
     * 
     * Путь.
     * 
     * *** 
     * @type {YPath|string}
     * @public
    */
    path;
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
    
};
class IProcess extends DProcess {
    
    /**
     * ### process
     * 
     * Процесс.
     * 
     * *** 
     * @type {ChildProcess?}
     * @protected
    */
    process;
    
};
class MProcess extends IProcess {
    
    
    
};
class FProcess extends MProcess {
    
    /**
     * ### YProcess.constructor
     * 
     * 
     * 
     * ***
     * @arg {YProcessT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FProcess.#before(t), {}));
        
        FProcess.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YProcessT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YProcess].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        if (pathCheck(pathGet(arg.string[0]))) {

            r.path = arg.string[0];

        } else {

            r.code = arg.string[0];

        };
        
        r.label = arg.string[1];
        r.process = arg.ject[0];
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
    static #deceit(t) {
        
        try {
            
            FProcess.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FProcess.#handle.apply(this, [t]);
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
    static #handle(t) {
        
        if (condIsStringValid(t.path)) {

            t.path = new YPath(t.path);

        };
        
        FProcess.#create.apply(this, [t]);
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
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
 * ### YProcess
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YProcess` предназначен для создания в OS процессов.
 * 
 * Процессы могут быть созданы разными способами:
 * 1. Запуск кода
 * 1. Запуск файла
 * 
 * Запуск кода позволяет создать новый процесс, через указанный в процессе код. Таким кодом может быть что-то по типу 
 * 
 * ***
 * @class
 * 
*/
export class YProcess extends FProcess {
    
    /**
     * ### on
     * 
     * ***
     * 
     * Метод продолжения работы процесса.
     * 
     * Если процесс существует, но находится на паузе, то этот метод продолжит его работу.
     * В противном случае, если процесс не существует, метод создаст его и запустит.
     * 
     * ***
     * @public
     * @method
    */
    on() {
        
        if (!this.process) {

            this.start();

        };

        this.process.on('message', (message) => {

            switch (message) {

                case 'restart': this.finish().start(); break;
                default: console.log(`Message: ${message};`); break;

            };

        });

        return this;
        
    };
    /**
     * ### off
     * 
     * ***
     * 
     * Метод остановки работы процесса.
     * 
     * ***
     * @method
     * @public
    */
    off() {
        
        if (this.process) {

            this.process.off();

        };

        return this;
        
    };
    /**
     * ### send
     * 
     * ***
     * 
     * Метод отправки сообщения от процесса.
     * 
     * ***
     * @arg {string} message `Сообщение`
     * @public
    */
    send(message) {
        
        if (this.process) {

            this.process.send(message);

        };

        return this;
        
    };
    /**
     * ### start
     * 
     * ***
     * 
     * Метод запуска процесса.
     * 
     * ***
     * @public
     * @method
    */
    start() {
        
        if (this.path) {

            this.process = fork(this.path ? this.path.get() : './', {

                stdio: 'inherit',
    
            });
        
        } else if (condIsString(this.code)) {

            this.process = spawn('node', ['-e', this.code], {
                
                stdio: 'inherit',
            
            });

        };

        return this;
        
    };
    /**
     * ### finish
     * 
     * ***
     * 
     * Метод прекращения процесса.
     * 
     * ***
     * @method
     * @public
    */
    finish() {
        
        if (this.process) {

            this.off();
            this.process.kill();

            this.process = null;

        };

        return this;
        
    };

};