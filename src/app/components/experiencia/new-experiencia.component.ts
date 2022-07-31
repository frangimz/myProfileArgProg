import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService,private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data=> {
        Swal.fire('Experiencia añadida');
        //alert("Experiencia añadida");
        this.router.navigate(['']);
      },err => {
        Swal.fire({ icon: 'error',text: 'Falló'});
        //alert("Falló");
        this.router.navigate(['']);
      }
    );
  }
}
