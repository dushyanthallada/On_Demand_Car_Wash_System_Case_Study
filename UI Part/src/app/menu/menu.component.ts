import { Component, OnInit } from '@angular/core';
import { WashDetailsService } from '../wash-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:WashDetailsService) { }
  washData:any;


  ngOnInit(): void {
    let response= this.service.getservices();
    response.subscribe((data)=>this.washData=data);
  }

}
