import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenApi } from './models/open-api.model';

@Injectable({
  providedIn: 'root'
})
export class OpenApisService {

  private apis_URL:string = `json server url`;

  constructor(private httpClient:HttpClient) { }

  GetListOfOpenApis():Observable<OpenApi>
  {
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.httpClient.get<OpenApi>(`${this.apis_URL}`,{headers:header,withCredentials:true});
  }
}
