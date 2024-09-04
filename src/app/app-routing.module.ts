import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
