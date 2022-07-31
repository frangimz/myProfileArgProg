export class Skill {
    id? : number;
    nombre : string;
    img : string;
    porcentaje: number;

    constructor(nombre: string, img: string, porcentaje: number){
        this.nombre = nombre;
        this.img = img;
        this.porcentaje=porcentaje;
    }
}