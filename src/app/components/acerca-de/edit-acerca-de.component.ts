import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(private personaService: PersonaService , private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data}
      );
  }

  onUpdate():void{
    const id= this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id,this.persona).subscribe(
      data => {
        Swal.fire('Perfil modificado');
        this.router.navigate(['']);
      },err =>{
        Swal.fire({ icon: 'error',text: 'Error al modificar el perfil'});
        //alert("Error al modificar Perfil");
        this.router.navigate(['']);
      }
    )
  }

}
