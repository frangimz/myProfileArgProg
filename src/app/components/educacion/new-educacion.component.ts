import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string = '';
  descripcionEd: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const edu = new Educacion(this.nombreEd,this.descripcionEd);
    this.sEducacion.save(edu).subscribe(
      data =>{
        Swal.fire('Educacion añadida');
        //alert("Educacion añadida");
        this.router.navigate(['']);
      },err =>{
        Swal.fire({ icon: 'error',text: 'Falló'});
        //alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
