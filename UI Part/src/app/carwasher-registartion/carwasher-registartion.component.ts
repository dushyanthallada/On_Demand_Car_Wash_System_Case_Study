import { Component, OnInit } from '@angular/core';
import { Carwasher } from '../carwasher';

@Component({
  selector: 'app-carwasher-registartion',
  templateUrl: './carwasher-registartion.component.html',
  styleUrls: ['./carwasher-registartion.component.css']
})
export class CarwasherRegistartionComponent implements OnInit {
  carwasher : Carwasher = new Carwasher("","","","","","");
  message : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
