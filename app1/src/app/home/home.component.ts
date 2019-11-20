import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps;
  constructor(public service : DataService) {
    this.getdata();
   }
   
   getdata()
   {
     this.service.getData().subscribe((res)=>{
      this.emps=res;
     })
   }


  ngOnInit() {
  }

}
