import { Component, Output, EventEmitter } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  @Output() addCourse = new EventEmitter<Course>();

  public course: Course;

  public constructor() {
    this.course = new Course();
  }

  public onSubmit() {
    this.course.start = new Date(this.course.start);
    this.addCourse.emit(this.course);
  }

}
