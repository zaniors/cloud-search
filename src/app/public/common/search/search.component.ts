import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { tap, pluck, map, debounceTime, distinctUntilChanged, switchMap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ServiceApi } from '../../enum/service-api.enum';
import { OwnGithubItem, GithubRepositoriesItem, GithubSearchOutput, OwnGithubSearchOutput } from '../../model/github-item.model';
import { EventBusService } from '../../service/bus-event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input() placeholderTitle: string;
  @Input() type: string;
  @ViewChild('searchInput') searchInput: ElementRef;
  constructor(
    private httpClient: HttpClient,
    private eventBusService: EventBusService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getSearchValue().subscribe(res => {
      console.log(res);
      this.eventBusService.githubRepoSearch.next(res);
    });
  }

  private getSearchValue(): Observable<OwnGithubSearchOutput> {
    return fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        // 优化事件流，在一定的时间内多次keyup事件会被舍掉
        debounceTime(400),
        // 获取input的value值
        pluck<KeyboardEvent, string>('target', 'value'),
        // 删除字符串两边的空白字符
        map(val => val.trim()),
        // 只有当值与之前的值不同时，才发出(而且方向键/alt等等，不会改变值，所以也不会发出)
        distinctUntilChanged(),
        // switchMap每次发出新值，会取消之前的Observable，防止异步请求顺序错乱问题，可能先发出的比后发出的请求返回慢，导致先发出的覆盖最新的结果
        switchMap(val => this.getGithubData(val))
      );
  }

  private getGithubData(val: string): Observable<OwnGithubSearchOutput> {
    this.eventBusService.progressLoading.next(true);
    const URL = `${ServiceApi.GithubSearchRepos}${val}`;
    return this.httpClient.get<OwnGithubItem[]>(URL).pipe(
      finalize(() => this.eventBusService.progressLoading.next(false)),
      switchMap((res: GithubSearchOutput) => {
        return of(this.dataTransformObject(res.items));
      })
    );
  }

  private dataTransformObject(res: GithubRepositoriesItem[]): OwnGithubSearchOutput {
    const ownGithubSearchOutput: OwnGithubSearchOutput = new OwnGithubSearchOutput();
    const repoItems: OwnGithubItem[] = [];
    res.forEach((e, i) => {
      const repoItem = new OwnGithubItem();
      repoItem.avatarUrl = e.owner.avatar_url;
      repoItem.description = e.description;
      repoItem.forksCount = e.forks_count;
      repoItem.fullName = e.full_name;
      repoItem.language = e.language;
      repoItem.repoName = e.name;
      repoItem.repoSize = e.size;
      repoItem.repoUrl = e.git_url;
      repoItem.stargazersCount = e.stargazers_count;
      repoItem.watchersCount = e.watchers_count;
      repoItem.userName = e.owner.login;
      repoItem.userUrl = e.owner.html_url;
      repoItems.push(repoItem);
    });
    ownGithubSearchOutput.items = repoItems;
    ownGithubSearchOutput.type = this.type;
    return ownGithubSearchOutput;
  }
}
