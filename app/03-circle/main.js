//Sync

/*function main(){
    for (let i = 0; i < 200; i++){
        setTimeout(() => {
            const m = new Multiply(i, 3);
            m.draw();
        }, 16 * i);
    }
}*/

//Async
/*function sleep(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}*/

const sleep = d => new Promise(r => setTimeout(r, d));

(async function main(){
    'use strict';

    for (let i = 0; i < 65; i++){
        const m = new Multiply(i, 5);
        m.draw();
        await sleep(16);
    }
})();

//16 = rail performance