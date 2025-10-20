import { Routes } from '@angular/router';
import { Home } from './modules/home/components/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'rutas', loadComponent: () => import('./modules/routes-timeline/components/routes-timeline/routes-timeline').then(m => m.RoutesTimeline) },
    { path: '**', redirectTo: '' }
];
