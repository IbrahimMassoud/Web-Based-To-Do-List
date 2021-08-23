import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms'
import { AbstractControl, FormControl } from '@angular/forms';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  // providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
})
export class DateComponent implements OnInit {

  @Output() addNewEvent = new EventEmitter();
 
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      date: null,
      range: null
    });
  }

  mytime_S: string ="";
  stime:string="";
  StartTimeSelected()
  {
    this.stime = this.mytime_S.toString().split(" ")[4];
    this.stime = this.stime.substring(0,5);
    console.log(this.stime);
    
  }
  mytime_E: string ="";
  etime:string="";
  EndTimeSelected()
  {
    this.etime = this.mytime_E.toString().split(" ")[4];
    this.etime = this.etime.substring(0,5);
    console.log(this.etime);
  }

  _date:string="";
  date:string="";
  DateSelected()
  {
    this._date=this.myForm.value.date.toString().split(" ");
    this.date =this._date[0] +" "+ this._date[1]+" "+this._date[2]+" "+this._date[3] ;
    // alert(this.date);
  }
  taskName:string="";
  TaskNameSelected(){
    // alert(this.taskName);
  }

  AddNewRaiser()
  {
    this.addNewEvent.emit({id:this.generateUUID() , taskName:this.taskName, Date: this.date,
      startTime:this.stime,endTime:this.etime,completed:false
    });
   
  }
   generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


  
}





