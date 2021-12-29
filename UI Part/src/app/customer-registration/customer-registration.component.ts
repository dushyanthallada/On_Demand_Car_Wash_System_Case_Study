import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  customer : Customer = new Customer("","","","","","","");
  message : any;
  
    constructor(private service: CustomerService) { }
  
    ngOnInit(){
    }
    public registerNow(){
        let reponse = this.service.customerregister(this.customer);
        reponse.subscribe((data) => {
          this.message = data;
            console.log(data);
              alert('registered Successfully');
            },
            (error: any)=>{
              console.log(error);
              alert('something went wrong!');
        });
    }
  }