import { Component, OnInit } from '@angular/core';
import { MolenLapakService } from '../molen-lapak.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-lapak',
  templateUrl: './lapak.page.html',
  styleUrls: ['./lapak.page.scss'],
})
export class LapakPage implements OnInit {

  lapakList: any;
  constructor(public molenLapak: MolenLapakService) { 
    this.loadDataLapak();
  }

  ngOnInit() {
  }

  loadDataLapak() {
    this.molenLapak.loadLapak().subscribe((response: Response) => {
      this.lapakList = response.json();
    });
  }

}
