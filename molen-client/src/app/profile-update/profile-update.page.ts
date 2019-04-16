import { Component, OnInit } from '@angular/core';
import { MolenUserService } from '../molen-user.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Response } from '@angular/http';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.page.html',
  styleUrls: ['./profile-update.page.scss'],
})
export class ProfileUpdatePage implements OnInit {

  userProf:any;
  data = {
    id_user:'',
    email:'',
    password:'',
    nama:'',
    tgl_lahir:'',
    alamat:'',
    kota:'',
    provinsi:'',
    no_telp:''
  };

  passwordShown: boolean = false;
  passwordType: string = 'password';

  constructor(private molenUser: MolenUserService, private navParams:NavParams, private modalCtrl: ModalController) {
    this.userProf = this.navParams.data.value;
    console.log(this.userProf);
    this.data.id_user = this.userProf[0].id_user;
    console.log(this.userProf[0].id_user);
    this.data.email = this.userProf[0].email;
    console.log(this.userProf[0].email);
    this.data.password = this.userProf[0].password;
    this.data.nama = this.userProf[0].nama;
    this.data.tgl_lahir = this.userProf[0].tgl_lahir;
    this.data.alamat = this.userProf[0].alamat;
    this.data.kota = this.userProf[0].kota;
    this.data.provinsi = this.userProf[0].provinsi;
    this.data.no_telp = this.userProf[0].no_telp;
   }

  ngOnInit() {
  }

  updateProfile() {
    console.log(this.data);
    this.molenUser.updateUser(this.data).subscribe((response: Response) => {
      if(response) {
        console.log("Success Upadte");
      }

      else {
        console.log("Update Error");
      }

      this.modalCtrl.dismiss();
    })
  }


  public togglePassword() {
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
