import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configDate
 * 
 * Конфигуратор модуля `date`.
 * 
 * ***
 * @public
*/
export const configDate = new YConfig(Object.assign(config, {
    
    /**
     * ### valueDefault
     * 
     * ***
     * 
     * Дефолт дата.
     * 
     * *** 
     * @type {Date?}
     * @public
    */
    valueDefault: null,
    /**
     * ### valueDropDefault
     * 
     * ***
     * 
     * Дефолт дата сброса.
     * 
     * *** 
     * @type {Date?}
     * @public
    */
    valueDropDefault: null,
    
    /**
     * ### months
     * 
     * 
     * 
     * *** 
     * @type {} 
     * @public
    */
    months: {

        ru: [

            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря',

        ],

    },
    /**
     * ### defaultYear
     *
     * Дефолт год.
     *
     * ***
     * @type {number}
     * @public
    */
    defaultYear: 2001,
    
}), configY);

export default configDate;

/**
 * @file date/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/