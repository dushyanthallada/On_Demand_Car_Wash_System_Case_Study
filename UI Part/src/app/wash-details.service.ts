import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WashDetailsService {
  
washDetails : any;
  constructor(private http:HttpClient) { }

public getservices(){
  return this.http.get("http://localhost:8089/Service/get");
}
}
