import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MolenMainService } from '../molen-main.service';
import { ModalController, MenuController } from '@ionic/angular';
import { Response } from '@angular/http';
import { BarangAddPage } from '../barang-add/barang-add.page';
import { DetailPage } from '../detail/detail.page';
import { MolenUserService } from '../molen-user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  barangList: any;

  constructor(public router:Router, public molenMain: MolenMainService, public modalCtrl:ModalController, private molenUser: MolenUserService,private menuCtrl: MenuController){
    this.loadBarang();
    //this.menuCtrl.enable(true);
  }
  
  async goAddBarang() {
    const modal = await this.modalCtrl.create({
      component: BarangAddPage
    });

    modal.onDidDismiss().then(()=> {this.loadBarang() });
    return await modal.present();
  }

  loadBarang() {
    this.molenMain.loadBarang().subscribe((response:Response) => {
      this.barangList = response.json();
    });
  }

  async goDetailBarang(barang) {
    const modal = await this.modalCtrl.create({
      component: DetailPage, componentProps:{value: barang}
    });
    modal.onDidDismiss().then(() => {this.loadBarang()});
    return await modal.present();
  }
}
