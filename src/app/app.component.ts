import { Component } from '@angular/core';
import { nasa_IFTD } from 'src/services/NASA/models/nasa_IFTD.model';
import { NASAOPENAPISERVICESService } from 'src/services/NASA/nasa-open-api-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NASA Image of the Day';

  constructor(private service: NASAOPENAPISERVICESService) {}

  ngOnInit():void
  {
    this.GetImageOfTheDay()
  }

  GetImageOfTheDay()
  {
    this.service.getNASAImageOftheDay()
    .subscribe({
      next: (x:nasa_IFTD) => {
        console.log(`The copyright belongs to:${x.copyright}`);
        console.log(`The Date is:${x.date}`);
        console.log(`Description:${x.explanation}`);
        console.log(`The Nasa Image of the Day:${x.hdurl}`);
        console.log(`Media Type:${x.media_type}`);
        console.log(`Service version:${x.service_version}`);
        console.log(`Title:${x.title}`);
      },
      error: (e:any) => {
        console.warn(e);
      }
    })

  }
}
