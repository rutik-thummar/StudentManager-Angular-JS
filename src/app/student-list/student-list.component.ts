import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // students: Observable<Student[]>;

  constructor(private _service: RegistrationService, private route: Router) { }
  students: Student[];
  id: number;
  ngOnInit(): void {
    this._service.getList().subscribe(
      data => {
        this.students = data;
      })
  }
  goToAddPage() {
    this.route.navigate(['/addstudent']);
  }
  goToEditPage(id: number) {
    this.route.navigate(['/editstudent', id]);
  }
  goToViewPage(id: number) {
    this.route.navigate(['/viewstudent', id]);
  }
  deleteStudent(id: number) {
    this._service.deleteStudentById(id)
      .subscribe(
        data => {
          this.route.navigate(['/studentlist'])
        },
        error => {
          console.log("Exception Occured ");

        })
  }

  goToLoginPage() {
    this.route.navigate(['/login']);
  }
}
