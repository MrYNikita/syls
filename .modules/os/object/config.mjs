import { YString } from "@syls/string";

/** ### configObject
 * - Модуль `os\object`
 * 
 * Конфигуратор модуля `object`.
 * 
*/
export const configObject = {
    
    /**
     * ### reportBlocksRequired
     * 
     * 
     * 
     * *** 
     * @public
    */
    reportBlocksRequired: [

        ['Данные', t => {

            return new YString()

                .setPrefix(' * ')
                .setPostfix(';\n')
                .paste(

                    `Статус: ${t.status}`,
                    `Расположение: ${t.path.get()}`,

                )
                .get()

        }],

    ],
    
};

export default configObject;