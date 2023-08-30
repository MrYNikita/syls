//#region YI

import { Y } from '@syls/y';
import { YCond } from '@syls/y/cond';
import { YPath, pathExists } from '../../path/-module/export.mjs';
import { osjectExists, osjectDelete, osjectMove, osjectRename } from './module.mjs';


//#endregion
//#region YT

/** ### YOsjectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Основной параметр модуля `YOsject`.
 * 
 * @typedef {YOsjectTE&YOsjectTU} YOsjectT
 * 
*/
/** ### YOsjectTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Параметр наследования `YOsject`.
 * 
 * @typedef {{[p in Exclude<keyof DOsject,keyof SOsject>|Exclude<keyof SOsject,keyof DOsject>]:(DOsject[p]&SOsject[p])}} YOsjectTE
 * 
*/
/** ### YOsjectTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Уникальные параметры `YOsject`.
 * 
 * @typedef YOsjectTU
 * @prop {any} _
 * 
*/

//#endregion

class SOsject extends Y {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DOsject extends SOsject {
    
    /**
     * ### path
     * 
     * Путь до файла.
     * 
     * *** 
     * @type {YPath?} 
     * @public
    */
    path;
    
};
class IOsject extends DOsject {
    
    /**
     * ### status
     * 
     * Статус.
     * 
     * *** 
     * @type {boolean} 
     * @protected
    */
    status;
    
};
class MOsject extends IOsject {
    
    
    
};
class FOsject extends MOsject {
    
    /**
     * ### YOsject.constructor
     * 
     * 
     * 
     * ***
     * @arg {YOsjectT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FOsject.#before(t), {}));
        
        FOsject.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YOsjectT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YOsject].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: r.path = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YOsjectT} t @this {YOsject} */
    static #deceit(t) {
        
        try {
            
            FOsject.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YOsjectT} t @this {YOsject} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FOsject.#handle.apply(this, [t]);
        
    };
    /** @arg {YOsjectT} t @this {YOsject} */
    static #handle(t) {
        
        if (YCond.isString(t.path)) {

            t.path = new YPath(t.path);

        };

        t.status = pathExists(t.path.get());
        
        FOsject.#create.apply(this, [t]);
        
    };
    /** @arg {YOsjectT} t @this {YOsject} */
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
 * ### YOsject
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YOsject extends FOsject {
    
    /**
     * ### move
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод перемещения файла.
     * 
     * ***
     * @arg {string} location `Положение`
     * @public
    */
    move(location) {

        osjectMove(this.path.get(), location);
        
        this.path.set(location);

        return this;
        
    };
    /**
     * ### exists
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод проверки на принадлежность к файлам.
     * 
     * ***
     * @public
    */
    exists() {
        
        return osjectExists(this.path.get());
        
    };
    /**
     * ### delete
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод удаления файла.
     * 
     * ***
     * @public
    */
    delete() {

        this.status = false;

        osjectDelete(this.path.get());

        return this;
        
    };
    /**
     * ### rename
     * - Версия `0.0.0`
     * - Модуль `os\osject`
     * ***
     * 
     * Метод переименования объекта файловой системы.
     * 
     * ***
     * @arg {string} name `Наименование`
     * @public
    */
    rename(name) {

        this.path.set(osjectRename(this.path.get(), name));

        return this;
        
    };
    
};