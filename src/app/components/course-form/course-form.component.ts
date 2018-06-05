import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Output() addCourse = new EventEmitter<Course>();

  public course: Course;

  public constructor() {
    this.course = new Course();
  }

  public ngOnInit() {
  }

  public onSubmit() {
    this.addCourse.emit(this.course);
  }

}
