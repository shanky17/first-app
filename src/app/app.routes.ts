import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about/:id', component: AboutComponent },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((comp) => comp.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(
        (comp) => comp.AboutComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then(
        (comp) => comp.AdminComponent
      ),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses.component').then(
        (comp) => comp.CoursesComponent
      ),
  },
];
