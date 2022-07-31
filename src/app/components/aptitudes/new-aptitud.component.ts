import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/services/s-skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-aptitud',
  templateUrl: './new-aptitud.component.html',
  styleUrls: ['./new-aptitud.component.css']
})
export class NewAptitudComponent implements OnInit {
  nombre: string = '';
  img: string = '';
  porcentaje: number = 0;

  constructor(private sSkill: SSkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.img, this.porcentaje);
    this.sSkill.save(skill).subscribe(
      data=> {
        Swal.fire('Aptitud añadida');
        //alert("Aptitu añadida");
        this.router.navigate(['']);
      },err => {
        Swal.fire({ icon: 'error',text: 'Falló'});
        //alert("Falló");
        this.router.navigate(['']);
      }
    );
  }
}
