import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MaterialModule } from 'src/app/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content-area',
  standalone: true,
  imports: [CommonModule,MatCardModule,MaterialModule],
  templateUrl: './main-content-area.component.html',
  styleUrls: ['./main-content-area.component.css']
})
export class MainContentAreaComponent {

  constructor( private _router: Router) {}

  viewApiService()
  {
    this._router.navigate(['/api-detail']);
  }
}
