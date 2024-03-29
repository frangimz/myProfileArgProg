import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto= null;
  constructor(private sProyecto: SProyectoService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data=>{
        this.proyecto = data;
      },err =>{
        Swal.fire({ icon: 'error',text: 'Error al modificar Proyecto'});
        //alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.update(id,this.proyecto).subscribe(
      data => {
        Swal.fire('Proyecto modificado');
        this.router.navigate(['']);
      }, err =>{
        Swal.fire({ icon: 'error',text: 'Error al modificar Proyecto'});
        //alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
