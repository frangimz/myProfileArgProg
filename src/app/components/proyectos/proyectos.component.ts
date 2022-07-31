import { Component, OnInit } from '@angular/core';
import { faPen, faTrash, faPlus,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy: Proyecto[] = [];

  faPlus =faPlus;
  faPen= faPen;
  faTrash=faTrash;
  faPlusCircle = faPlusCircle;

  constructor(private sProyecto: SProyectoService , private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto():void{
    this.sProyecto.lista().subscribe(
      data => {this.proy = data;}
    )
  }

  delete(id?:number){
    if(id!= undefined){
      this.sProyecto.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        },err =>{
          Swal.fire({ icon: 'error',text:'No se pudo eliminar el proyecto'} );
          //alert("No se pudo eliminar la Proyecto");
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
