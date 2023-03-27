import { Component } from '@angular/core';
import { LOGO } from '../../constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo:string = LOGO;

}
