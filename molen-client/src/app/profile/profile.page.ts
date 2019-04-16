import { Component, OnInit } from '@angular/core';
import { MolenUserService } from '../molen-user.service';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ProfileUpdatePage } from '../profile-update/profile-update.page';

const TOKEN_KEY = 'auth_token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProf:any;
  email : any;

  constructor(private molenUser: MolenUserService, private storage:Storage, private modalCtrl: ModalController) {
    this.ambildata();
   }

  ngOnInit() {
  }

  ambildata() {
    this.storage.get(TOKEN_KEY).then((data) => {
      this.email = data.email;
      this.loadProfile(this.email);
    });
  }

  loadProfile(email) {
    this.molenUser.loadUserProfie(email).subscribe((response: Response) => {
      this.userProf = response.json();
      console.log(this.userProf);
    });
  }

  async goUpdateProfile(userProf) {
    const modal = await this.modalCtrl.create({
      component: ProfileUpdatePage, componentProps:{value: userProf}
    });
    //modal.onDidDismiss().then(()=> {this.loadProfile(userProf) });
    return await modal.present();
  }

}
