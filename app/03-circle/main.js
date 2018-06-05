// document.querySelector = $ de jQuery

class Circle {
    constructor(radius){
        this.radius = radius;
        this.cx = 1.5 * radius;
        this.cy = 1.5 * radius;
    }

    draw(){
        const div = document.querySelector('div');
        const r = this.radius;
        div.innerHTML = `            
    <svg height="${3*r}" width="${3*r}">
        <circle cx="${1.5*r}" cy="${1.5*r}" r="${r}" stroke="black" stroke-width="2" fill="transparent" />
    </svg>
        `;
    }
    setPoint(angle) {
        const a = - angle * 2 * Math.PI / 360;
        const svgns = "http://www.w3.org/2000/svg";
        const svg = document.querySelector('svg');
        const point = document.createElementNS(svgns, 'circle');
        point.setAttribute('cx',this.cx + this.radius * Math.cos(a)); //horizontal
        point.setAttribute('cy', this.cy + this.radius * Math.sin(a)); // verticale
        point.setAttribute('r', 3);
        point.setAttribute('fill', '#000');
        point.setAttribute('stroke', '#000');
        point.setAttribute('stroke-width', 2);
        svg.appendChild(point);
    }
}

function main(){
    const c = new Circle(200);
    c.draw();
    c.setPoint(0);
    c.setPoint(30);
    c.setPoint(60);
    c.setPoint(90);
    c.setPoint(180);
    c.setPoint(270);
}

main();
