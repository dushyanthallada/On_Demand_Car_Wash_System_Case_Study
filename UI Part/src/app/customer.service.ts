import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    constructor(private http : HttpClient) { }
    public customerregister (customer: Customer){
      return this.http.post("http://localhost:8081/Consumer/addconsumer",customer, {responseType : "text" as "json"});
    }
}
