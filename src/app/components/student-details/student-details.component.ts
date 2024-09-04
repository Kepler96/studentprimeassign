import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input() student = {
    name: '',
    age: 0,
    marks: 0
  };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  

  constructor() {}

  onSave() {
    this.save.emit(this.student);
  }

  onCancel() {
    this.cancel.emit();
  }
}
