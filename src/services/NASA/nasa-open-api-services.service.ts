import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { nasa_IFTD } from './models/nasa_IFTD.model';
import { NasaRoverData } from './models/nasa-rover-data.model';
import { NasaIFTD } from './models/nasa--iftd';

@Injectable({
  providedIn: 'root'
})
export class NASAOPENAPISERVICESService {

  // TODO
  // Allow the users API Key to load on each api request later with 
  // multiple NASA accessible APIS like passing parameters to the 
  // Curiosity Rover to see images from different cameras on the Rover on MARS
  constructor(private HttpClient: HttpClient) { }

  // THis is NOT good practise to keep my API key here 
  // but right now I wanna check out some rover Data on 
  // another planet :) 
  private api_key = `NrVy5W2Yyt24lJ17us7YL66JdGbLsP81ZFl440xO`

  private IMAGE_OF_THE_DAY_API_URL:string = `https://api.nasa.gov/planetary/apod?api_key=`;

  // This var will be broken up for custom paramaters later for to choose day and camera
  private ROVER_DATA_GET:string = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=`


  // User will need to generate their own NASA API KEY

  // Get NASA Image of the day
  getNASAImageOftheDay(): Observable<NasaIFTD>
  {
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.HttpClient.get<NasaIFTD>(`${this.IMAGE_OF_THE_DAY_API_URL}${this.api_key}`, {headers:header,withCredentials: false});
  }

  getRoverData():Observable<NasaRoverData>
  {
    const headers = new HttpHeaders().set('Content-type','application/json');
    return this.HttpClient.get<NasaRoverData>(`${this.ROVER_DATA_GET}${this.api_key}`)
  }
}
