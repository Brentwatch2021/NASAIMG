import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NASAOPENAPISERVICESService } from 'src/services/NASA/nasa-open-api-services.service';
import { nasa_IFTD } from 'src/services/NASA/models/nasa_IFTD.model';
import { NasaRoverData } from 'src/services/NASA/models/nasa-rover-data.model';

@Component({
  selector: 'app-api-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.css']
})
export class ApiDetailComponent {

  NasaIFTD: nasa_IFTD = new nasa_IFTD("","","", "","", "", "", "");
  constructor(private nasaServices: NASAOPENAPISERVICESService) {}

  ngOnInit():void
  {
    this.GetNasaImageOfTheDay();
    this.GetRoverData();
  }

  GetNasaImageOfTheDay()
  {
    this.nasaServices.getNASAImageOftheDay()
    .subscribe(
      {
        next: (nasaValue:nasa_IFTD) => {
          console.log(nasaValue);
          this.NasaIFTD = nasaValue;
        },
        error: (e:any) => {
          console.warn(e);
        }
        
      }
    );
  }

  GetRoverData()
  {
    this.nasaServices.getRoverData()
    .subscribe(
      {
        next: (nasaValue:NasaRoverData) => {
          console.log(nasaValue);
        },
        error: (e:any) => {
          console.warn(e);
        }
      }
    )
  }

}
