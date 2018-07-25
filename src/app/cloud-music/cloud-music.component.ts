import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-music',
  templateUrl: './cloud-music.component.html',
  styleUrls: ['./cloud-music.component.scss']
})
export class CloudMusicComponent implements OnInit {
  placeholderTitle: string;
  constructor() { }

  ngOnInit() {
    this.placeholderTitle = '搜索音乐';
  }

}
