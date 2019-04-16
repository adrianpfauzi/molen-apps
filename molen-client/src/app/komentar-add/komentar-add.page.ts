import { Component, OnInit } from '@angular/core';
import { MolenMainService } from '../molen-main.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-komentar-add',
  templateUrl: './komentar-add.page.html',
  styleUrls: ['./komentar-add.page.scss'],
})
export class KomentarAddPage implements OnInit {

  constructor(private molenMain: MolenMainService, private modalCtrl:ModalController) { }

  data = {
    id_user:'',nama:'', keterangan:'', idbarang:''
  }
  ngOnInit() {
  }

  addComment() {
    this.molenMain.addComment(this.data);
    this.modalCtrl.dismiss();
  }
  
}
