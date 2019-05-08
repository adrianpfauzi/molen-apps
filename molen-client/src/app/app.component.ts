import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MolenUserService } from './molen-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Profile',
      url:'/profile',
      icon:'person'
    },

    {
      title:'About',
      url:'/about',
      icon:'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private molenUser: MolenUserService,
    private router : Router,
    private menuCtrl : MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.molenUser.authenticationState.subscribe(state => {
      console.log(state);
      if(state) {
        this.router.navigate(['/home']);
        this.menuCtrl.enable(true);
      }

      else if(state == false){
        this.router.navigate(['/login']);
        this.menuCtrl.enable(false);
      }

      else {
        this.router.navigate(['/start']);
        this.menuCtrl.enable(false);
      }
    });
  }

  logOut() {
    this.molenUser.logout();
  }
}
