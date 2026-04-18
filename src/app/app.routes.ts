import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'quran',
        loadComponent: () => import('./pages/quran/quran.page').then(m => m.QuranPage)
      },
      {
        path: 'hadith',
        loadComponent: () => import('./pages/hadith/hadith.page').then(m => m.HadithPage)
      },
      {
        path: 'prayer-times',
        loadComponent: () => import('./pages/prayer-times/prayer-times.page').then(m => m.PrayerTimesPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'quran/:surahId',
    loadComponent: () => import('./pages/quran-reader/quran-reader.page').then(m => m.QuranReaderPage)
  }
];
