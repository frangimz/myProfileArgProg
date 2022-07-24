import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { faPen, faTrash, faPlus,faPlusCircle} from '@fortawesome/free-solid-svg-icons';

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
          alert("No se pudo eliminar la educación");
        }
      )
    }
  }
}
