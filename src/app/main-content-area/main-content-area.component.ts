import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MaterialModule } from 'src/app/material/material.module';
import { Router } from '@angular/router';
import { ApiCardComponent } from './api-card/api-card.component';
// import apis  from '../../json-dummy-data/db.json'
import { OpenApi } from 'src/services/Apis/models/open-api.model';
import { openAPIS } from 'src/json-dummy-data/open_apis'

@Component({
  selector: 'app-main-content-area',
  standalone: true,
  imports: [CommonModule,MatCardModule,MaterialModule,ApiCardComponent],
  templateUrl: './main-content-area.component.html',
  styleUrls: ['./main-content-area.component.css']
})
export class MainContentAreaComponent {

  public openApis:any = openAPIS;

  constructor( private _router: Router) {


  }

  viewApiService(apiViewed:string)
  {
    this._router.navigate(['/api-detail']);
  }
}
