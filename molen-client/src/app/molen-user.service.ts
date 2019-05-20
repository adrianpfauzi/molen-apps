import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class MolenUserService {

  authenticationState = new BehaviorSubject(false);

  constructor(private plt : Platform,private storage: Storage ,public http:Http, public toastCtrl: ToastController) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if(res) {
        this.authenticationState.next(true);
      }
    })
  }
  
  login(data) {
    return this.storage.set(TOKEN_KEY, data).then(() => {
      this.authenticationState.next(true);
    })
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    })
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }


  loadUser() {
    return this.http.get('http://192.168.0.109:8081/api/molen/user');
  }

  loginUser(logUser) {
    return this.http.post('http://192.168.0.109:8081/api/molen/user/login',logUser);
  }

  loadUserProfie(email) {
    return this.http.get('http://192.168.0.109:8081/api/molen/user/'+email+'/profile');
  }

  insertUser(data) {
    return this.http.post('http://192.168.0.109:8081/api/molen/user',data);
  }

  updateUser(data) {
    return this.http.post('http://192.168.0.109:8081/api/molen/user/'+data.id_user,data);
  }

  ///api/molen/user/:id_user/
}
