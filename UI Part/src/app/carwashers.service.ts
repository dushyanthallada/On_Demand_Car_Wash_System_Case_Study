import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carwasher } from './carwasher';

@Injectable({
  providedIn: 'root'
})
export class CarwashersService {

  constructor(private http : HttpClient) { }
  // public doRegistration(carwasher: Carwasher){
  //   return this.http.post("http://localhost:8081/Customers/customer",carwasher, {responseType : "text" as "json"});
  // }

  public getcarwashers(){
    return this.http.get("http://localhost:8080/Carwashers/allcarwashers");
  }
}