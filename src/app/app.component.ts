import { Component } from '@angular/core';
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprofile';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
}
