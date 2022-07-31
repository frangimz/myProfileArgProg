export class Proyecto{
    id?: number;
    nombre: string;
    fecha: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, fecha: string, descripcion: string, img: string){
        this.nombre=nombre;
        this.fecha=fecha;
        this.descripcion=descripcion;
        this.img=img;
    }
}
