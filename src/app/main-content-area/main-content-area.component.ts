import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MaterialModule } from 'src/app/material/material.module';
import { Router } from '@angular/router';
import { ApiCardComponent } from './api-card/api-card.component';


@Component({
  selector: 'app-main-content-area',
  standalone: true,
  imports: [CommonModule,MatCardModule,MaterialModule,ApiCardComponent],
  templateUrl: './main-content-area.component.html',
  styleUrls: ['./main-content-area.component.css']
})
export class MainContentAreaComponent {

  constructor( private _router: Router) {}

  viewApiService(apiViewed:string)
  {
    this._router.navigate(['/api-detail']);
  }
}
