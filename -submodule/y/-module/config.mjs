export const configY = {

    params: {

        /**
         * ### local
         *
         * Локаль.
         *
         * ***
         * @type {import("./module.mjs").yT['locales']}
         * @public
        */
        local: 'ru',
        /**
         * ### aliases
         * 
         * ***
         * 
         * Алиасы.
         * 
         * *** 
         * @type {string[][]}
         * @public
        */
        aliases: [],
        /**
         * ### locales
         * 
         * Локали.
         * 
         * *** 
         * @type {import("./module.mjs").yT['locales'][]} 
         * @public
        */
        locales: [

            "ru",
            "en",

        ],
        /**
         * ### moduleId
         * 
         * ***
         * 
         * Идентификатор модуля.
         * 
         * *** 
         * @type {number}
         * @public
        */
        moduleId: 0,
        /**
         * ### stockMode
         * 
         * ***
         * 
         * Режим хранения.
         * 
         * *** 
         * @type {boolean}
         * @public
         * @property
        */
        stockMode: false,
        /**
         * ### modeStrict
         *
         * Режим строгости.
         *
         * ***
         * @type {boolean}
         * @public
        */
        strictMode: true,
        /**
         * ### defaultValue
         * 
         * ***
         * 
         * Дефолтное значение, используемое для присвоения незаполенных полей. 
         * 
         * *** 
         * @type {any}
         * @public
         * @property
        */
        defaultValue: null,

    },

};

export default configY;

/**
 * @file config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/