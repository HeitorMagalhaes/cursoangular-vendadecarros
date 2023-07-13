import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './resource/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
