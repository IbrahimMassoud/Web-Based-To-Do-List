import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  constructor() { }

  toDos = [
    {id:1 , taskName: "30 min walk",Date:"Tue Jul 20 2021",startTime:"6:15",endTime:"6:45" ,completed : true}
    ,
    {id:2 , taskName: "Watering the trees ",Date:"Fri Jul 30 2021",startTime:"7:00",endTime:"7:20", completed : false}
    ,
    {id:3 , taskName: "having breakfast",Date:"Sun Jul 25 2021",startTime:"7:30",endTime:"7:55", completed : false}
  ];

  ngOnInit(): void {
  }
  DeleteToDo(todo:any)
  {
    this.toDos = this.toDos.filter(item =>
      {
        return item.id !== todo.id;

      });
  }

  addToDo(todo:any)
  {
  this.toDos.push(todo);
  // alert("inside Add To do doooos");
  }


}
