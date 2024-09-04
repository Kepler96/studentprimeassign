import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  private studentsUrl = 'assets/students.json';
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): boolean {
    if (username === 'teacher' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getStudents(): Observable<any> {
    return this.http.get<any>(this.studentsUrl);
  }

  addStudent(student: any): Observable<any> {
    return of(student);
  }

  deleteStudent(studentId: number): Observable<any> {
    return of(studentId);
  }

  updateStudent(student: any): Observable<any> {
    return of(student);
  }
}

