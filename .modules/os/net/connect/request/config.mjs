/** ### configRequest
 * 
 * Конфигуратор модуля `request`.
 * 
 * ***
 * @public
*/
export const configRequest = {
    
    /**
     * ### supplicant
     * 
     * Общее значение просителя.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    supplicant: 'syls/application',
    /**
     * ### supplicantDefault
     * 
     * Дефолт проситель.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    supplicantDefault: null,
    /**
     * ### methodDefault
     * 
     * Дефолт метод.
     * 
     * *** 
     * @type {import("./module.mjs").requestTTMethod} 
     * @public
    */
    methodDefault: 'GET',
    /**
     * ### endpointDefault
     * 
     * Дефолт эндпоинт.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    endpointDefault: null,
    /**
     * ### contentTypeDefault
     * 
     * Дефолт тип контента.
     * 
     * *** 
     * @type {import("./module.mjs").requestTTContentType} 
     * @public
    */
    contentTypeDefault: 'text/plain',
    
};

export default configRequest;

/**
 * @file config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/