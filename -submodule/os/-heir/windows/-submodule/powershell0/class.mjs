//#region YI

import { spawn } from 'child_process';
import { YProcess } from '@syls/process';


//#endregion
//#region YT

/** ### YPowerShellT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YPowerShell`.
 * 
 * @typedef {YPowerShellTE&YPowerShellTU} YPowerShellT
 * 
*/
/** ### YPowerShellTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YPowerShell`.
 * 
 * @typedef {{[p in Exclude<keyof DPowerShell,keyof SPowerShell>|Exclude<keyof SPowerShell,keyof DPowerShell>]:(DPowerShell[p]&SPowerShell[p])}} YPowerShellTE
 * 
*/
/** ### YPowerShellTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YPowerShell`.
 * 
 * @typedef YPowerShellTU
 * @prop {any} _
 * 
*/

//#endregion

class SPowerShell extends YProcess {

    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### powershell
     * 
     * Общий экземпляр powershell.
     * 
     * *** 
     * @type {YPowerShell} 
     * @protected
    */
    static powershell = null;

};
class DPowerShell extends SPowerShell {



};
class IPowerShell extends DPowerShell {

    /**
     * ### audio
     * 
     * Наименование запущенного плеера.
     * 
     * *** 
     * @type {string?} 
     * @protected
    */
    audio = 'player';
    /**
     * ### process
     * 
     * Текущий процесс.
     * 
     * *** 
     * @type {import('child_process').ChildProcessWithoutNullStreams?} 
     * @protected
    */
    process = null;

};
class MPowerShell extends IPowerShell {



};
class FPowerShell extends MPowerShell {

    /**
     * ### YPowerShell.constructor
     * 
     * 
     * 
     * ***
     * @arg {YPowerShellT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FPowerShell.#before(t), {}));

        FPowerShell.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YPowerShellT} */
        let r = {};

        if (t?.length === 1 && [Object, YPowerShell].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YPowerShellT} t @this {YPowerShell} */
    static #deceit(t) {

        try {

            FPowerShell.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YPowerShellT} t @this {YPowerShell} */
    static #verify(t) {

        const {



        } = t;

        FPowerShell.#handle.apply(this, [t]);

    };
    /** @arg {YPowerShellT} t @this {YPowerShell} */
    static #handle(t) {



        FPowerShell.#create.apply(this, [t]);

    };
    /** @arg {YPowerShellT} t @this {YPowerShell} */
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
 * ### YPowerShell
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YPowerShell extends FPowerShell {

    /**
     * ### on
     * - Версия `0.0.0`
     * ***
     * 
     * Метод активации.
     * 
     * ***
     * 
     * @public
    */
    on() {

        this.process = spawn('powershell.exe');

        this.process.stdout.on('data', (data) => {

            console.log(`${data}`);

        });

        this.process.stderr.on('data', (data) => {

            console.error(`${data}`);

        });

        return this;

    };
    /**
     * ### off
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отключения.
     * 
     * ***
     * 
     * @public
    */
    off() {

        return this;

    };
    /**
     * ### exec
     * - Версия `0.0.0`
     * ***
     * 
     * Метод выполнения команд.
     * 
     * ***
     * 
     * @public
    */
    exec(...commands) {

        if (!this.process) {

            return this;

        };

        for (const command of commands) {

            this.process.stdin.write(command + '\n');

        };

        return this;

    };
    /**
     * ### moveMusic
     * - Версия `0.0.0`
     * ***
     * 
     * Метод перемтоки музыкального произведения на указанное кол-во часов, минут и секунд.
     * 
     * Особенности:
     * - Если в качестве параметра было передано одно число, то это будет секунды.
     * - Если чисел передано 2, то это будут минуты и секунды.
     * 
     * ***
     * @arg {...number} time `Тайминги`
     * @public
    */
    moveMusic(...time) {

        if (this.audio) {

            const hour = time.at(-3) ?? 0;
            const minute = time.at(-2) ?? 0;
            const second = time.at(-1) ?? 0;

            this.exec(

                `$timeSpan = New-Object System.TimeSpan ${hour},${minute},${second}`,
                `$${this.audio}.Position = $${this.audio}.Position.Add($timeSpan)`,

            );

        };

        return this;
        
    };
    /**
     * ### stopMusic
     * - Версия `0.0.0`
     * ***
     * 
     * Метод остановки музыкального произведения.
     * 
     * ***
     * @public
    */
    stopMusic() {

        this.exec(

            `$${this.audio}.Stop()`,

        );

        return this;

    };
    /**
     * ### playMusic
     * - Версия `0.0.0`
     * ***
     * 
     * Метод запуска музыки по указанному пути.
     * 
     * ***
     * @arg {string} path `Путь`
     * @public
    */
    playMusic(path) {

        this

            .exec(

                `Add-Type -AssemblyName PresentationCore`,
                `$${this.audio} = New-Object System.Windows.Media.MediaPlayer`,
                `$${this.audio}.Open("${path}")`,


            )
            .resumeMusic();

        return this;

    };
    /**
     * ### stopMusic
     * - Версия `0.0.0`
     * ***
     * 
     * Метод для остановки музыкального произведения.
     * 
     * ***
     * @public
    */
    pauseMusic() {

        this.exec(`$${this.audio}.Pause()`);

        return this;

    };
    /**
     * ### resumeMusic
     * - Версия `0.0.0`
     * ***
     * 
     * Метод продолжения музыки.
     * 
     * ***
     * @public
    */
    resumeMusic() {

        this.exec(`$${this.audio}.Play()`);

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/