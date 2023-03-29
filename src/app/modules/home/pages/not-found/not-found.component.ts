import { Component, OnInit } from '@angular/core';
import { PAGE_NOT_FOUND } from 'src/app/constants/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  error: string = PAGE_NOT_FOUND;
}
