import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Program';
  peopelData:any;
  startIndex= 0; 
  hide= false;
  
  constructor(private employeeService: EmployeeServiceService){
    this.employeeService.getJSON().subscribe((data) => {
      this.peopelData = data;
  });

  }
  ngOnInit() {
    this.hide= false;
  }

  showMore() {
    this.startIndex = this.startIndex + 3;
    if(this.peopelData.length< this.startIndex){
      alert("No more People");
      this.hide = true;
    }
  }
}
