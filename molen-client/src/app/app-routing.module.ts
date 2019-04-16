import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  /*{
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },*/
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'lapak', loadChildren: './lapak/lapak.module#LapakPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'barang-add', loadChildren: './barang-add/barang-add.module#BarangAddPageModule' },
  { path: 'barang-update', loadChildren: './barang-update/barang-update.module#BarangUpdatePageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'komentar', loadChildren: './komentar/komentar.module#KomentarPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'komentar-add', loadChildren: './komentar-add/komentar-add.module#KomentarAddPageModule' },
  { path: 'komentar-update', loadChildren: './komentar-update/komentar-update.module#KomentarUpdatePageModule' },
  { path: 'profile-update', loadChildren: './profile-update/profile-update.module#ProfileUpdatePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
