import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  @Input() toDo : any; 
  @Output() deleteEvent = new EventEmitter();
  ngOnInit(): void {
  }

  Checked()
  {
    this.toDo.completed = !this.toDo.completed;
  }
  btnDeleteRaiser()
  {
    this.deleteEvent.emit(this.toDo);
  }
  
}
