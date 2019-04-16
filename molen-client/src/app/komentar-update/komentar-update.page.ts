import { Component, OnInit } from '@angular/core';
import { MolenMainService } from '../molen-main.service';

@Component({
  selector: 'app-komentar-update',
  templateUrl: './komentar-update.page.html',
  styleUrls: ['./komentar-update.page.scss'],
})
export class KomentarUpdatePage implements OnInit {

  constructor(private molenMain: MolenMainService) { }

  ngOnInit() {
  }

  updateComment() {
    
  }

}
