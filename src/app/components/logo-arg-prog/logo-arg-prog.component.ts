import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-logo-arg-prog',
  templateUrl: './logo-arg-prog.component.html',
  styleUrls: ['./logo-arg-prog.component.css']
})
export class LogoArgProgComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login']);
  }

}
