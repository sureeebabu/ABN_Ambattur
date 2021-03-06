import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpwd',
    loadChildren: () => import('./pages/forgotpwd/forgotpwd.module').then( m => m.ForgotpwdPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then( m => m.ContactusPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'members',
    loadChildren: () => import('./pages/members/members.module').then( m => m.MembersPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'membersdetails',
    loadChildren: () => import('./pages/membersdetails/membersdetails.module').then( m => m.MembersdetailsPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'memberslist',
    loadChildren: () => import('./pages/memberslist/memberslist.module').then( m => m.MemberslistPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'newsevents',
    loadChildren: () => import('./pages/newsevents/newsevents.module').then( m => m.NewseventsPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'achievement',
    loadChildren: () => import('./pages/achievement/achievement.module').then( m => m.AchievementPageModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
