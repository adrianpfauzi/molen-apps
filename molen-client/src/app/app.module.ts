import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BarangAddPage } from './barang-add/barang-add.page';
import { DetailPage } from './detail/detail.page';
import { BarangUpdatePage} from './barang-update/barang-update.page';
import { KomentarPage } from './komentar/komentar.page';
import { KomentarAddPage } from './komentar-add/komentar-add.page'

import { HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ProfileUpdatePage } from './profile-update/profile-update.page';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';



@NgModule({
  declarations: [AppComponent,BarangAddPage,DetailPage, BarangUpdatePage,KomentarPage, ProfileUpdatePage, KomentarAddPage],
  entryComponents: [BarangAddPage, DetailPage, BarangUpdatePage,KomentarPage,ProfileUpdatePage, KomentarAddPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, HttpModule, HttpClientModule, FormsModule, IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
