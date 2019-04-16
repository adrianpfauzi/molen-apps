import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';
import { MolenMainService } from '../molen-main.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-barang-update',
  templateUrl: './barang-update.page.html',
  styleUrls: ['./barang-update.page.scss'],
})
export class BarangUpdatePage implements OnInit {

  barang: any;
  data = {
    idbarang:'',
    no_telp:'',
    nama:'',
    stok:'',
    keterangan:'',
    kategori:''
  };
  constructor(public navParams: NavParams, public molenService: MolenMainService, public modalController: ModalController) {
    this.barang = this.navParams.data.value;
    console.log(this.barang);
    this.data.idbarang = this.barang.idbarang;
    this.data.no_telp = this.barang.no_telp;
    this.data.nama = this.barang.nama;
    this.data.stok = this.barang.stok;
    this.data.keterangan = this.barang.keterangan;
    this.data.kategori = this.barang.kategori;
    
   }

  ngOnInit() {
  }

  updateBarang(){
    console.log(this.data);
    this.molenService.updateBarang(this.data).subscribe((response:Response) =>
    {
      if(response) {
        this.molenService.message("Data telah terupdate");
      }

      else {
        this.molenService.message("Error, data tidak terupdate");
      }

      this.modalController.dismiss();

    });
  }

  closeModal()
  {
    this.modalController.dismiss();
  }

}
