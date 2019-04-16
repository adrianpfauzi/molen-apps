import { Component, OnInit } from '@angular/core';
import { MolenUserService } from 'src/app/molen-user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

//email, password, nama,tgl_lahir,alamat,kota,provinsi,no_telp
  data = {
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
  constructor(private molenUser: MolenUserService) { }

  ngOnInit() {
  }

  addUser() {
    this.molenUser.insertUser(this.data).subscribe((response: Response) => {
      if(response) {
        this.molenUser.login(this.data);
      }

      else {
        console.log("Login Error");
      }
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

}
