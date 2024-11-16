import { Component, effect, inject, Input, signal } from '@angular/core';
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
  private courseService: CourseService = inject(CourseService);
  courses = signal<Course[]>([]);
  @Input() isAdmin: boolean = false;

  constructor() {
    effect(
      () => {
        const courses = this.courseService.coursesSignal();
        if (courses !== this.courses()) {
          this.courses.set(courses);
          console.log(courses);
        }
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {}

  deleteCourse(course: Course): void {
    this.courseService.deleteCourse(course);
  }
}
