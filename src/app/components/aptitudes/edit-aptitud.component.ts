import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/services/s-skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-aptitud',
  templateUrl: './edit-aptitud.component.html',
  styleUrls: ['./edit-aptitud.component.css']
})
export class EditAptitudComponent implements OnInit {
  skill: Skill= null;

  constructor(private sSkill: SSkillService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data=>{
        this.skill = data;
      },err =>{
        Swal.fire({ icon: 'error',text: 'Error al modificar la aptitud'});
        //alert("Error al modificar la aptitud");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.update(id,this.skill).subscribe(
      data => {
        Swal.fire('Aptitud modificada');
        this.router.navigate(['']);
      }, err =>{
        Swal.fire({ icon: 'error',text: 'Error al modificar la aptitud'});
        //alert("Error al modificar la aptitud");
        this.router.navigate(['']);
      }
    )
  }
}
