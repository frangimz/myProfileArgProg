import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { faPen, faTrash, faPlus,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})


export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  faPlus =faPlus;
  faPen= faPen;
  faTrash=faTrash;
  faPlusCircle = faPlusCircle;

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(
      data => {this.expe = data;}
    )
  }

  delete(id?:number){
    if(id!= undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        },err =>{
          Swal.fire({ icon: 'error',text:'No se pudo eliminar la experiencia'} );
          //alert("No se pudo eliminar la experiencia");
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



