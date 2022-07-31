import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { faPen, faTrash, faPlus,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { SSkillService } from 'src/app/services/s-skill.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

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
          Swal.fire({ icon: 'error',text:'No se pudo eliminar la aptitud'} );
          //alert("No se pudo eliminar la aptitud");
        }
      )
    }
  }  

  verifyDelete(id: number,type: string){
    Swal.fire({
      title: 'Eliminar '+type+'?',
      text: "Este cambio es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id);
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado '+type+' exitosamente.',
          'success'
        )
      }
    })
  }

}

