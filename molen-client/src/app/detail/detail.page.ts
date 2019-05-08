import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';
import { MolenMainService } from '../molen-main.service';
import { BarangUpdatePage } from '../barang-update/barang-update.page';
import { KomentarPage } from '../komentar/komentar.page';
import { Response } from '@angular/http';
import { MolenUserService } from '../molen-user.service' ;
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth_token';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  email : any;
  iduser : any;
  userProf:any;

  barang: any;
  data = {
    idbarang:'',
    iduser:'',
    pemilik:'',
    no_telp:'',
    nama:'',
    stok:'',
    keterangan:'',
    kategori:''
  };
  constructor(public navParams: NavParams, public molenService: MolenMainService, public modalController: ModalController,  public molenUser:MolenUserService, private storage:Storage) {
    this.barang = this.navParams.data.value;
    console.log(this.barang);
    this.data.idbarang = this.barang.id_barang;
    this.data.iduser = this.barang.id_user;
    this.data.pemilik = this.barang.pemilik;
    this.data.no_telp = this.barang.no_telp;
    this.data.nama = this.barang.nama;
    this.data.stok = this.barang.stok;
    this.data.keterangan = this.barang.keterangan;
    this.data.kategori = this.barang.kategori;
    this.molenService.loadBarang();
    this.ambildata();
   }

  ngOnInit() {
  }

  ambildata() {
    this.storage.get(TOKEN_KEY).then((data) => {
      this.email = data;
      this.loadProfile(this.email);
    });
  }

  loadProfile(email) {
    this.molenUser.loadUserProfie(email).subscribe((response: Response) => {
      this.userProf = response.json();
      this.iduser = this.userProf[0].id_user;
    })
  }

  async goUpdateBarang(barang) {
    const modal = await this.modalController.create({
      component: BarangUpdatePage, componentProps:{value: barang}
    });
    //modal.onDidDismiss().then(()=> {this.molenService.loadBarang() });
    return await modal.present();
  }

  deleteBarang(idbarang) {
    this.molenService.deleteBarang(idbarang).subscribe((response: Response)=> {
      if(response.ok) {
        this.molenService.message('Data Deleted');
      }
    });

    this.modalController.dismiss();
  }

  async goKomentar(barang) {
    const modal = await this.modalController.create({
      component: KomentarPage, componentProps:{value: barang}
    });
    //modal.onDidDismiss().then(()=> {this.molenService.loadBarang() });
    return await modal.present();
  }
  
  closeModal()
  {
    this.modalController.dismiss();
  }

}
