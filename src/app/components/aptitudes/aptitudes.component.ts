import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { faPen, faTrash, faPlus,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { SSkillService } from 'src/app/services/s-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  skill: Skill[] = [];

  faPlus =faPlus;
  faPen= faPen;
  faTrash=faTrash;
  faPlusCircle = faPlusCircle;

  constructor(private sSkill: SSkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkill():void{
    this.sSkill.lista().subscribe(
      data => {this.skill = data;}
    )
  }

  delete(id?:number){
    if(id!= undefined){
      this.sSkill.delete(id).subscribe(
        data =>{
          this.cargarSkill();
        },err =>{
          alert("No se pudo eliminar la aptitud");
        }
      )
    }
  }  
}

