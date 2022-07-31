import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educa: Educacion = null;
  constructor(private sEducacion: SEducacionService,private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data =>{
        this.educa = data;
      },err =>{
        Swal.fire({ icon: 'error',text: 'Error al modificar educacción'});
        //alert("Error al modificar educacción");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educa).subscribe(
      data => {
        Swal.fire('Educación modificada');
        this.router.navigate(['']);
      },err =>{
        Swal.fire({ icon: 'error',text: 'Error al modificar educacción'});
        //alert("Error al modificar educacción");
        this.router.navigate(['']);
      }
    )
  }
}
