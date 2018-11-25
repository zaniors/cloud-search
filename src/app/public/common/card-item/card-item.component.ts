import { Component, OnInit, Input } from '@angular/core';
import { OwnGithubItem } from '../../model/github-item.model';
import { routerTranAni } from '../../animations/router.animation';
import { CloudMusicApiService } from '../../service/cloudmusic-api.service';
import { OwnCloudMusicItem } from '../../model/cloud-music.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  animations: [routerTranAni]
})
export class CardItemComponent implements OnInit {
  audioEle: HTMLAudioElement;

  @Input() searchResultItem: any;
  @Input() type: string;
  constructor(
    private cloudMusicApiService: CloudMusicApiService,
  ) { }

  ngOnInit() {
    this.audioEle = new Audio();
  }

  play(): void {
    this.audioEle.pause();
    this.cloudMusicApiService.getMusicUrl(this.searchResultItem.songId)
      .subscribe(url => {
        this.audioEle.src = url;
        this.audioEle.play();
      });
  }

}
