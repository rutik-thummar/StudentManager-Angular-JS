import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  student: Student=new Student;
  constructor(private _service: RegistrationService, public _router: Router) { }


  ngOnInit(): void {
  }
  addstudentformsubmit() {  
    this._service.addStudent(this.student).subscribe(
      data => {
        data=this.student;
        console.log("data add successfully"),
          this._router.navigate(['studentlist']);
      },
      error => {
        // this._router.navigate(['studentlist']);
      })
  }

  gotolist() {
    this._router.navigate(['studentlist']);
  }
}
