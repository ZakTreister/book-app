import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './@shared/guards/app.guard';
const routes: Routes = [
    {
        path: 'app',
        data: { requireLogin: true },
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        canActivate: [AppGuard]
    },
    {
        path: '',
        data: { requireLogin: false },
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivate: [AppGuard]
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }