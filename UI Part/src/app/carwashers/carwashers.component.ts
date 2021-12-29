import { Component, OnInit } from '@angular/core';
import { CarwashersService } from '../carwashers.service';

@Component({
  selector: 'app-carwashers',
  templateUrl: './carwashers.component.html',
  styleUrls: ['./carwashers.component.css']
})
export class CarwashersComponent implements OnInit {

  carwasherinfo:any;

  constructor(private service: CarwashersService) { }

  ngOnInit() {
    let response= this.service.getcarwashers();
    response.subscribe((data)=>this.carwasherinfo=data);
  }
}
