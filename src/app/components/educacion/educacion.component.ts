import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { faPen, faTrash, faPlus,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  faPen = faPen;
  faTrash = faTrash;
  faPlus = faPlus;
  faPlusCircle = faPlusCircle;

  constructor(private sEducacion: SEducacionService,private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducacion():void{
    this.sEducacion.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  delete(id?:number){
    if(id!= undefined){
      this.sEducacion.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        },err =>{
          Swal.fire({ icon: 'error',text:'No se pudo eliminar la educación'} );
          //alert("No se pudo eliminar la educación");
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
