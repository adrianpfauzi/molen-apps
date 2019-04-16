import { Component, OnInit } from '@angular/core';
import { MolenMainService } from '../molen-main.service';
import { Response } from '@angular/http';
import { NavParams, ModalController } from '@ionic/angular';
import { KomentarAddPage} from '../komentar-add/komentar-add.page';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.page.html',
  styleUrls: ['./komentar.page.scss'],
})
export class KomentarPage implements OnInit {


  data:any;
  idbarang:any;
  commentList:any;
  barang: any;

  constructor(private molenMain: MolenMainService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.barang = this.navParams.data.value;
    console.log(this.barang);
    this.idbarang = this.barang.idbarang;
   }

  ngOnInit() {
  }

  loadCommentBarang(data) {
    this.molenMain.loadComment(this.data).subscribe((response:Response) => {
      this.commentList = response.json();
  })
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  async goComment() {
    const modal = await this.modalCtrl.create({
      component: KomentarAddPage
    });
    return await modal.present();
  }
}
