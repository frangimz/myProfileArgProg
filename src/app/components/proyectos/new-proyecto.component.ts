import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  fecha: string = '';
  descripcion: string = '';
  img: string = '';

  constructor(private sProyecto: SProyectoService,private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto(this.nombre, this.fecha, this.descripcion, this.img);
    this.sProyecto.save(proy).subscribe(
      data=> {
        Swal.fire('Proyecto añadido');
        //alert("Proyecto añadido");
        this.router.navigate(['']);
      },err => {
        Swal.fire({ icon: 'error',text: 'Falló'});
        //alert("Falló");
        this.router.navigate(['']);
      }
    );
  }
}
