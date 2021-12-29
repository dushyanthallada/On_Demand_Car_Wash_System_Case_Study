import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }
  public addcar(car: Car){
    return this.http.post("http://localhost:8081/Car/car",car,{responseType : "text" as "json"});
    
  }
}
