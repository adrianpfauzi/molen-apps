import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MolenMainService {

  constructor(public http:Http, public toastCtrl: ToastController) { }

  loadBarang() {
    return this.http.get('http://localhost:8081/api/molen/');
  }

  addBarang(data) {
    return this.http.post('http://localhost:8081/api/molen/barang',data);
  }

  updateBarang(data){
    return this.http.post('http://localhost:8081/api/molen/barang/'+ data.idbarang, data);
  }

  deleteBarang(idbarang) {
    return this.http.delete('http://localhost:8081/api/molen/barang/'+idbarang);
  }

  loadComment(data) {
    return this.http.get('http://localhost:8081/api/molen/barang/'+ data.id_barang +'/komentar/');
  }

  addComment(data) {
    return this.http.post('http://localhost:8081/api/molen/barang/'+ data.id_barang +'/komentar/',data);
  }

  updateComment(data) {
    return this.http.post('http://localhost:8081/api/molen/barang/'+ data.id_barang +'/komentar/'+data.id_comment,data);
  }

  deleteComment(id_barang,id_comment) {
    return this.http.delete('http://localhost:8081/api/molen/barang/'+ id_barang +'/komentar/'+id_comment);
  }

  async message(msg) {
    const toast = await this.toastCtrl.create ({
      message: msg, duration: 5000
    })
  }
}
