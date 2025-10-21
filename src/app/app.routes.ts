import { Routes } from '@angular/router';
import { Home } from './modules/home/components/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: '**', redirectTo: '' }
];
