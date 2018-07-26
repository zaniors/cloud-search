import { Component, OnInit, Input } from '@angular/core';
import { OwnGithubItem } from '../../model/github-item.model';
import { routerTranAni } from '../../animations/router.animation';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  animations: [routerTranAni]
})
export class CardItemComponent implements OnInit {

  @Input() searchResultItem: OwnGithubItem;
  constructor() { }

  ngOnInit() {
  }

}
