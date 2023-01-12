import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { nasa_IFTD } from './models/nasa_IFTD.model';

@Injectable({
  providedIn: 'root'
})
export class NASAOPENAPISERVICESService {

  // TODO
  // Allow the users API Key to load on each api request later with 
  // multiple NASA accessible APIS like passing parameters to the 
  // Curiosity Rover to see images from different cameras on the Rover on MARS
  constructor(private HttpClient: HttpClient) { }

  private APIURL:string = `https://api.nasa.gov/planetary/apod?api_key=`

  // User will need to generate their own NASA API KEY

  // Get NASA Image of the day
  getNASAImageOftheDay(): Observable<nasa_IFTD>
  {
    
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.HttpClient.get<nasa_IFTD>(`${this.APIURL}`, {headers:header,withCredentials: false});
  }
}
