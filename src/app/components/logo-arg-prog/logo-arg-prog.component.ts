import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logo-arg-prog',
  templateUrl: './logo-arg-prog.component.html',
  styleUrls: ['./logo-arg-prog.component.css']
})
export class LogoArgProgComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  isLogged = false;
  
  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }    
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }

}
