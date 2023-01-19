import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-card',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.css']
})
export class ApiCardComponent {

  @Input()
  title : string = '';

  @Input()
  multiParamselect : string = 'howzit';

  @Input()
  apiUrl : string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'

  @Input()
  category : string = '';


  @Output()
  api_Selected = new EventEmitter<string>();

  constructor(private _router: Router) {}

  viewAPIService()
  {
    // this._router.navigate(['api-detail']);
    this.api_Selected.emit('Api Viewed');
  }

  cardClasses()
  {
    return {
      'multi-get-params-card': this.multiParamselect
    };
  }
}
