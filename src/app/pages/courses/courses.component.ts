import { Component, inject, input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courseService: CourseService = inject(CourseService);
  isAdmin = input<boolean>(false);
  constructor() {}

  ngOnInit(): void {}

  deleteCourse(course: Course): void {
    this.courseService.deleteCourse(course);
  }
}
