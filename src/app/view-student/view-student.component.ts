import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  //student = new Student;
  student: Student;
  id: number;

  constructor(private _router: Router, private _service: RegistrationService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    //this.student = new Student();
    this.id = this._activatedRoute.snapshot.params['id'];
    this._service.getById(this.id)
      .subscribe(
        data => {
          this.student = data;
        },
        error => {
          console.log("error");
        }
      );
  }
  
  gotolist() {
    this._router.navigate(['studentlist']);
  }
}

