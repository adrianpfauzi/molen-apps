import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MolenMainService } from '../molen-main.service';
import { MolenUserService } from '../molen-user.service' ;
import { ModalController, ToastController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';

import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions, PictureSourceType} from '@ionic-native/camera/ngx';

const TOKEN_KEY = 'auth_token';
const STO_KEY = 'my_img';

@Component({
  selector: 'app-barang-add',
  templateUrl: './barang-add.page.html',
  styleUrls: ['./barang-add.page.scss'],
})
export class BarangAddPage implements OnInit {

  userProf:any;
  userList:any;
  email : any;
  images = [];

  data = {
    iduser:'',
    pemilik:'',
    no_telp:'',
    nama:'',
    stok:'',
    keterangan:'',
    kategori:''
  };

  
  constructor(private ref: ChangeDetectorRef, 
    private camera: Camera,
    private actionSheetController: ActionSheetController,
    private storage:Storage,
    public molenMain: MolenMainService, 
    public modalCtrl:ModalController, 
    public molenUser:MolenUserService,
    private file : File, 
    //private http : HttpClient, 
    private webView: WebView, 
    //private fileEntry : FileEntry, 
    private filePath : FilePath, 
    private toastController : ToastController,
    private loadingController: LoadingController ) { 
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

  addBarang() {
    this.molenMain.addBarang(this.data).subscribe((response: Response) =>
    {
      if(response) {
        this.molenMain.message("Data telah ditambahkan");
      }

      else {
        this.molenMain.message("Error");
      }

      this.modalCtrl.dismiss();
    });
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  loadProfile(email) {
    this.molenUser.loadUserProfie(email).subscribe((response: Response) => {
      this.userProf = response.json();
      this.data.iduser = this.userProf[0].id_user;
      this.data.pemilik = this.userProf[0].nama;
    })
  }

  loadStoredImages() {
    this.storage.get(STO_KEY).then(images => {
      if(images) {
        let arr = JSON.parse(images);
        this.images = [];

        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({name: img, path: resPath, filePath: filePath});
        }
      }
    });
  }

  pathForImage(img) {
    if(img === null) {
      return '';
    }
    else {
      let converted = this.webView.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message : text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image Source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if(sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath).then(filePath => {
          let correctPath = filePath.substr(0,filePath.lastIndexOf('/')+1);
          let currentame = imagePath.substring(imagePath.lastIndexOf('/')+1,imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath,currentame, this.createFileName());
        });
      }
      else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/')+1);
        var correctPath = imagePath.substr(0,imagePath.lastIndexOf('/')+1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    })
  }

  createFileName() {
    var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
    return newFileName;
  }

  copyFileToLocalDir(name, current, newFileName) {
    this.file.copyFile(name,current, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast("Error while storing file");
    });
  }

  updateStoredImages(name) {
    this.storage.get(STO_KEY).then(images => {
      let arr = JSON.parse(images);
      if(!arr) {
        let newImages = [name];
        this.storage.set(STO_KEY, JSON.stringify(newImages));
      }
      else {
        arr.push(name);
        this.storage.set(STO_KEY,JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry,...this.images];
      this.ref.detectChanges();
    });
  }

  deleteImage(imgEntry,position) {

  }

  startUpload(imgEntry) {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath).then(entry => {
      (< FileEntry > entry).file(file => this.readFile(file))
    })
    .catch(err=> {
      this.presentToast("Error while reading file");
    });
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type:file.type
      });
      formData.append('file',imgBlob, file.name);
      this.uploadImageData(formData);
    }

    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({
      //content: 'Uploading image....',
    });
    await loading.present();


  }

}
