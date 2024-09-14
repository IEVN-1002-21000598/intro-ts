import { Calcular_Distancia } from "./09-Distancia_entre_2_puntos";

class Triangulo extends Calcular_Distancia{
    protected x3:number;
    protected y3:number;
    constructor(x1:number, x2:number,y1:number, y2:number, x3:number, y3:number){
        super(x1,x2,y1,y2);
        this.x3 = x3;
        this.y3 = y3;
    }
    imprimir(): void {
        
    }
    pagaImpuesto(){
       
    }
}
