import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'ucenje',
    loadComponent: () =>
      import('./learning/learning.component').then(c => c.LearningComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.component').then(c => c.ProfilComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.component').then(c => c.SignUpComponent),
  },
  {
    path: 'beleske',
    loadComponent: () => import('./notes/notes.component').then(c => c.NotesComponent),
  },
  {
    path: 'zbirka',
    loadComponent: () => import('./book/book.component').then(c => c.BookComponent),
  },
  {
    path: 'flashcards-pocetna',
    loadComponent: () => import('./flashcards-main/flashcards-main.component').then(c => c.FlashcardsMainComponent),
  },
  {
    path: 'flashcards-igra',
    loadComponent: () => import('./flashcards-play/flashcards-play.component').then(c => c.FlashcardsPlayComponent),
  },
  {
    path: 'flashcards-kreiraj',
    loadComponent: () => import('./flashcards-create/flashcards-create.component').then(c => c.FlashcardsCreateComponent),
  },

  {
    path: 'rokovi/:faculty/:subject',
    loadComponent: () => import('./past-exams/past-exams.component').then(c => c.PastExamsComponent),
  },
  {
    path: 'rokovi/:faculty/:subject/:year',
    loadComponent: () => import('./exam-details/exam-details.component').then(c => c.ExamDetailsComponent),
  },
  {
    path: 'pomodoro',
    loadComponent: () => import('./pomodoro/pomodoro.component').then(c => c.PomodoroComponent),
  },
  {
    path: 'kalendar',
    loadComponent: () => import('./calender/calender.component').then(c => c.CalenderComponent),
  },
  {
  path: 'admin',
  loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
},
{
  path: 'welcome',
  loadComponent: () => import('./welcome/welcome.component').then(m => m.WelcomeComponent)
},


  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];
