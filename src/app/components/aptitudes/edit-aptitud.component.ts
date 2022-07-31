import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/services/s-skill.service';

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
        alert("Error al modificar la aptitud");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.update(id,this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la aptitud");
        this.router.navigate(['']);
      }
    )
  }
}
