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
function sleep(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

async function main(){
    for (let i = 0; i < 30; i++){
        const m = new Multiply(i, 2);
        m.draw();
        await sleep(16);
    }
}

main();

//16 = rail performance