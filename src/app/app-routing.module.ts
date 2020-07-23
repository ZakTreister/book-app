import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'app', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }