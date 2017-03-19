import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGuard } from './auth.guard';

const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
];

export const appRoutingProviders : any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);