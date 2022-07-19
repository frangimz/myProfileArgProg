import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
