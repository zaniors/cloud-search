import { Component, OnInit, Input } from '@angular/core';
import { OwnGithubItem } from '../../model/github-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() searchResultItem: OwnGithubItem;
  constructor() { }

  ngOnInit() {
  }

}
