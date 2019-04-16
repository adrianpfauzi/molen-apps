import { Component, OnInit } from '@angular/core';
import { MolenUserService } from 'src/app/molen-user.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logUser = {email:'', password:''}

  passwordShown: boolean = false;
  passwordType: string = 'password';
  
  constructor(public molenUser: MolenUserService, public router:Router, private menuCtrl: MenuController) { 
  
  }

  ngOnInit() {
  }

  login() {
    this.molenUser.loginUser(this.logUser).subscribe((response: Response) => {
      if(response) {
        this.molenUser.login(this.logUser);
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

  public registerPage() {
    this.router.navigate(["/register"]);
  }



}
