// document.querySelector = $ de jQuery

class Circle {
    constructor(){}

    draw(){
        const div = document.querySelector('div');
        div.innerHTML = `            
    <svg height="600" width="600">
        <circle cx="300" cy="300" r="200" stroke="black" stroke-width="2" fill="transparent" />
    </svg>
        `;
    }
}

function main(){
    const c = new Circle();
    c.draw();
}

main();
