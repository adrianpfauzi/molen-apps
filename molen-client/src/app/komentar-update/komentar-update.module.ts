import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KomentarUpdatePage } from './komentar-update.page';

const routes: Routes = [
  {
    path: '',
    component: KomentarUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KomentarUpdatePage]
})
export class KomentarUpdatePageModule {}
