import { configY } from "../../../-module/export.mjs";
import { YConfig } from "../../config/-module/export.mjs";

/** @type {configY['params']} */
const config = {
    
    
    
};

/** ### configDate
 * 
 * Конфигуратор модуля `date`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configDate = new YConfig({
    
    ...config,

    /**
     * ### months
     * 
     * 
     * 
     * ***
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
     * ### yearDefault
     * 
     * Дефолт год.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @public
     * @property
    */
    yearDefault: 2001,
    
}, configY);

export default configDate;

/**
 * @file date/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/