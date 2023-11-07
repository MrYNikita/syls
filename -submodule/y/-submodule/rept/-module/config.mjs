import { YConfig } from "../../config/-module/export.mjs";
import configY from "../../../-module/config.mjs";
import { YBlock } from "../-submodule/block/-module/class.mjs";

/** @type {configY['params']} */
const config = {
    
    
    
};

/** ### configRept
 * 
 * Конфигуратор модуля `rept`.
 * 
 * ***
 * @public
*/
export const configRept = new YConfig({
    
    ...config,

    /**
     * ### blocks
     * 
     * 
     * 
     * *** 
     * @since `1.0.0`
     * @type {YBlock[]}
     * @public
     * @property
    */
    blocks: [

        new YBlock({
            
            tags: ['system'],
            label: 'general',
            title: 'Сведения',
            points: [

                target => ` * ID: ${target._y.id};`,
                target => ` * Дата: ${target._y.date.value};`,
                target => ` * Класс: ${target.getClass().name};`,

            ],
        
        })

    ],
    /**
     * ### blocksDefault
     * 
     * ***
     * 
     * Дефолт блоки.
     * 
     * *** 
     * @type {any[]}
     * @public
     * @property
    */
    blocksDefault: [],
    /**
     * ### iterateDefault
     * 
     * ***
     * 
     * Дефолт итерация.
     * 
     * *** 
     * @type {number}
     * @public
     * @property
    */
    iterateDefault: 0,
    
}, configY);

export default configRept;

/**
 * @file rept/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/