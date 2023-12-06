//#region YI

import { YArg } from "@syls/y/arg";
import { YEntity } from "@syls/y/entity";
import { ChildProcess } from 'child_process';
import { configProcess as config } from "./config.mjs";

//#endregion
//#region YT

/** ### processTC
 * @typedef processTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').processT&processTC} processT */

//#endregion

/**
 * ### YProcess
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YProcess extends YEntity {
    
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
     * @type {YProcess[]}
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
     * @arg {...YProcess} args `Аргументы`
     * @returns {YProcess[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YProcess)?}
     * @template {YProcess} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### cwd
     * 
     * Настройка `cwd`.
     * 
     * Обозначает директорию запуска процесса.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    cwd;
    /**
     * ### stdio
     * 
     * Настройка `stdio`.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    stdio;
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
     * ### process
     * 
     * Процесс.
     * 
     * *** 
     * @since `1.0.0`
     * @type {ChildProcess?}
     * @field
     * @public
    */
    process;
    
    //#endregion
    //#region method
    
    /**
     * ### on
     * 
     * Метод активации процесса.
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
    on() {
        
        return this;
        
    };
    /**
     * ### off
     * 
     * Метод отключения процесса.
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
    off() {
        
        return this;
        
    };
    /**
     * ### signal
     * 
     * Метод сигнализироввания.
     * 
     * ***
     * @arg {processT['signal']} signal `Сигнал`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    signal(signal) {
        
        return this;
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YProcess;
        
    };
    
    //#endregion
    
    /**
     * ### YProcessConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {processTC} args `Аргументы`
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
            
            /** @type {YArg<YProcess&processTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            yarg.setFirst(

                ['label', 'string'],

            );
            
            super(yarg);
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            
            
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

/**
 * @file process/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

// /**
//  * ### YProcess
//  * - Тип `SDIMFY`
//  * - Версия `0.0.0`
//  * - Цепочка `BDVHC`
//  * ***
//  * 
//  * Класс `YProcess` предназначен для создания в OS процессов.
//  * 
//  * Процессы могут быть созданы разными способами:
//  * 1. Запуск кода
//  * 1. Запуск файла
//  * 
//  * Запуск кода позволяет создать новый процесс, через указанный в процессе код. Таким кодом может быть что-то по типу 
//  * 
//  * ***
//  * @class
//  * 
// */
// export class YProcess extends FProcess {
    
//     /**
//      * ### on
//      * 
//      * ***
//      * 
//      * Метод продолжения работы процесса.
//      * 
//      * Если процесс существует, но находится на паузе, то этот метод продолжит его работу.
//      * В противном случае, если процесс не существует, метод создаст его и запустит.
//      * 
//      * ***
//      * @public
//      * @method
//     */
//     on() {
        
//         if (!this.process) {

//             this.start();

//         };

//         this.process.on('message', (message) => {

//             switch (message) {

//                 case 'restart': this.finish().start(); break;
//                 default: console.log(`Message: ${message};`); break;

//             };

//         });

//         return this;
        
//     };
//     /**
//      * ### off
//      * 
//      * ***
//      * 
//      * Метод остановки работы процесса.
//      * 
//      * ***
//      * @method
//      * @public
//     */
//     off() {
        
//         if (this.process) {

//             this.process.off();

//         };

//         return this;
        
//     };
//     /**
//      * ### send
//      * 
//      * ***
//      * 
//      * Метод отправки сообщения от процесса.
//      * 
//      * ***
//      * @arg {string} message `Сообщение`
//      * @public
//     */
//     send(message) {
        
//         if (this.process) {

//             this.process.send(message);

//         };

//         return this;
        
//     };
//     /**
//      * ### start
//      * 
//      * ***
//      * 
//      * Метод запуска процесса.
//      * 
//      * ***
//      * @public
//      * @method
//     */
//     start() {
        
//         if (this.path) {

//             this.process = fork(this.path ? this.path.get() : './', {

//                 stdio: 'inherit',
    
//             });
        
//         } else if (condIsString(this.code)) {

//             this.process = spawn('node', ['-e', this.code], {
                
//                 stdio: 'inherit',
            
//             });

//         };

//         return this;
        
//     };
//     /**
//      * ### finish
//      * 
//      * ***
//      * 
//      * Метод прекращения процесса.
//      * 
//      * ***
//      * @method
//      * @public
//     */
//     finish() {
        
//         if (this.process) {

//             this.off();
//             this.process.kill();

//             this.process = null;

//         };

//         return this;
        
//     };

// };