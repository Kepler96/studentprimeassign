import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username= '';
  password= '' ;
  errorMessage= '';

  constructor(private studentService: StudentService, private router: Router) {}

  login(){
    if (this.studentService.login(this.username, this.password)) {
      this.router.navigate(['/students']);
    } else {
      this.errorMessage = 'Invalid credentials!';
    }
  }
}
