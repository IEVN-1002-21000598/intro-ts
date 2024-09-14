import { Calcular_Distancia } from "./09-Distancia_entre_2_puntos";

class Triangulo extends Calcular_Distancia{
    protected x3:number;
    protected y3:number;
    constructor(x1:number, x2:number,y1:number, y2:number, x3:number, y3:number){
        super(x1,x2,y1,y2);
        this.x3 =x3;
        this.y3 =y3;
    }
    imprimir(): void {
        console.log('-----------------------10 TRIANGULOS-----------------------');
        let a = this.sacar_distancia(this.x1, this.y1, this.x2, this.y2);
        console.log('a: ' + a);
        let b = this.sacar_distancia(this.x1, this.y1, this.x3, this.y3);
        console.log('b: ' + b);
        let c = this.sacar_distancia(this.x2, this.y2, this.x3, this.y3);
        console.log('c: ' + c);

        if(((a+b)>c) && ((a+c)>b) && ((b+c)>a))
            console.log('Las coordenadas forman un triangulo');
        else
            console.log('Las coordenadas no forman un triangulo');

    }
    sacar_distancia(x1:number,y1:number,x2:number,y2:number){
        let distancia = this.calular(x1,y1,x2,y2);
        return distancia;
    }

}

const triangulo = new Triangulo(2,3,4,3,6,6);
triangulo.imprimir();
