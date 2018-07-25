import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavBarList } from './public/model/navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public mobileQuery: MediaQueryList;
  public navbarList: NavBarList[] = [];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.buildMockData();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private buildMockData(): void {
    this.navbarList = Array.from({ length: 2}, (_, i) => {
      const temp = new NavBarList();
      switch (i) {
        case 0:
          temp.name = '网易云音乐';
          temp.path = '/cloudmusic';
          break;
        case 1:
          temp.name = 'github搜索';
          temp.path = '/githubsearch';
          break;
        default:
          break;
        }
        return temp;
    });
  }
}
