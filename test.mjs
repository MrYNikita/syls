import { YScheduler } from "@syls/y/scheduler";

new YScheduler()

    .appendEvent(

        ['clear', () => console.clear(), 10],
        ['log', () => console.log('tact'), 1],

    )
    .on()
    .do(self => setTimeout(() => self.on(1000), 3000))