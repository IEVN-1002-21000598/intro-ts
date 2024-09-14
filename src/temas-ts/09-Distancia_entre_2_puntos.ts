export class Calcular_Distancia{
    protected x1:number;
    protected y1:number;
    protected x2:number;
    protected y2:number;
    constructor(x1:number, y1:number, x2:number, y2:number){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        
    }

    imprimir(){
        console.log(`La distancia entre el punto (${this.x1}, ${this.y1}) y el punto (${this.x2}, ${this.y2}) es: ${this.calular()}`)
    }

    public calular(): number{
        let xp = this.x2 - this.x1;
        xp = xp * xp;
        let yp = this.y2 - this.y1;
        yp = yp * yp;
        let distancia = Math.sqrt(xp + yp);
        return distancia;
    }
}

const distancia = new Calcular_Distancia(2,3,5,7);
distancia.imprimir();



