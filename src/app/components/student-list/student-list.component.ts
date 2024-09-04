import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
interface Student {
  id: number;
  name: string;
  age: number;
  marks: number;
}
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})


export class StudentListComponent implements OnInit{
  students: Student[] = [];
  selectedStudent: Student | null = null;
  isDialogVisible: boolean = false;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      error => {
        console.error('Error fetching students', error);
      }
    );
  }

  addStudent() {
    const newStudent: Student = { id: this.students.length + 1, name: 'New Student', age: 18, marks: 0 };
    this.students.push(newStudent);
    this.studentService.addStudent(newStudent).subscribe();
  }

  deleteStudent(studentId: number) {
    this.students = this.students.filter(student => student.id !== studentId);
    this.studentService.deleteStudent(studentId).subscribe();
  }

  editStudent(student: Student) {
    this.selectedStudent = { ...student };
    this.isDialogVisible = true;
  }

  updateStudent() {
    if (this.selectedStudent) {
      this.studentService.updateStudent(this.selectedStudent).subscribe((updatedStudent: Student) => {
        this.students = this.students.map(student =>
          student.id === updatedStudent.id ? updatedStudent : student
        );
        this.selectedStudent = null;
        this.isDialogVisible = false;
      });
    }
  }
  cancelEdit() {
    // Reset selected student and hide dialog
    this.selectedStudent = null;
    this.isDialogVisible = false;
  }
}