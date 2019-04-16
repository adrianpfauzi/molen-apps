import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MolenLapakService {

  constructor(public http:Http, toastCtrl:ToastController) { }

  loadLapak(){
    return this.http.get('http://localhost:8081/api/molen/lapak');
  }
}
