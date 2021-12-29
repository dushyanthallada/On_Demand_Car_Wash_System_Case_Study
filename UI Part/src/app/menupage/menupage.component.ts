import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  car : Car = new Car("","","","","","");
  message : any;
  
    constructor(private service: CarService,private router: Router) { }
  
    ngOnInit(){
    }
    public addcar(){
        let reponse = this.service. addcar(this.car);
        reponse.subscribe((data) => {
          this.message = data;
            console.log(data);
            this.router.navigate(['/payment']);
            //  (<any>this.router).navigate(["/menu"])
              alert('car details added Successfully');
            },
        

            (error: any)=>{
              console.log(error);
              alert('something went wrong!');
        });
    }
  
  }