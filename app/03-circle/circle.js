// document.querySelector = $ de jQuery

const SVGNS = "http://www.w3.org/2000/svg";

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
        const svg = document.querySelector('svg');
        const point = document.createElementNS(SVGNS, 'circle');
        point.setAttribute('cx',this.cx + this.radius * Math.cos(a)); //horizontal
        point.setAttribute('cy', this.cy + this.radius * Math.sin(a)); // vertical
        point.setAttribute('r', 3);
        point.setAttribute('fill', '#000');
        point.setAttribute('stroke', '#000');
        point.setAttribute('stroke-width', 2);
        point.setAttribute('id', `point_${angle}`);
        svg.appendChild(point);
    }

    setLine(angle1, angle2){
        const a1 = - angle1 * 2 * Math.PI / 360;
        const a2 = - angle2 * 2 * Math.PI / 360;
        const svg = document.querySelector('svg');
        const line = document.createElementNS(SVGNS, 'line');
        line.setAttribute('x1', this.cx + this.radius * Math.cos(a1)); //horizontal
        line.setAttribute('y1', this.cy + this.radius * Math.sin(a1)); // vertical
        line.setAttribute('x2', this.cx + this.radius * Math.cos(a2));
        line.setAttribute('y2', this.cy + this.radius * Math.sin(a2));
        line.setAttribute('stroke', '#000');
        line.setAttribute('stroke-width', 1);
        line.setAttribute('id', `line_${angle1}_${angle2}`);
        svg.appendChild(line);
    }

    // une facon de faire le remove
    /*removePoint(angle){
        console.log('removePoint');
        const toBeRemoved = document.querySelector(`#point_${angle}`);
        if (toBeRemoved){
            toBeRemoved.outerHTML = "";
        }
    }*/

    //try / catch
    removePoint(angle){
        try{
            document.querySelector(`#point_${angle}`).outerHTML = "";;
        } catch(e){
            console.error(e);
        }
    }

    removeLine(angle1, angle2){
        try{
            document.querySelector(`#line_${angle1}_${angle2}`).outerHTML = "";;
        } catch(e){
            console.error(e);
        }
    }

}
