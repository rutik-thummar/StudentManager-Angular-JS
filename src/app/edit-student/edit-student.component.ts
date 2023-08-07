import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router, private _activedRoute: ActivatedRoute) { }
  student: Student;
  ngOnInit(): void {
    let id = this._activedRoute.snapshot.params['id'];
    this._service.getById(id).subscribe(
      data => { 
        this.student=data;
      },
      error => {
        console.log("error");
        
       }
    )
  }

  editstudentformsubmit() {
    this._service.editStudent(this.student).subscribe(
      data => {
        console.log("data Update successfully"),
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
