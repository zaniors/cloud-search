import { Injectable } from '@angular/core';
import { OwnGithubSearchOutput, OwnGithubItem, GithubSearchOutput, GithubRepositoriesItem } from '../model/github-item.model';
import { Observable, of } from 'rxjs';
import { EventBusService } from './bus-event.service';
import { ServiceApi } from '../enum/service-api.enum';
import { HttpClient } from '@angular/common/http';
import { finalize, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GithubApiService {
    type: string;
    constructor(
        private httpClient: HttpClient,
        private eventBusService: EventBusService,
    ) { }

    public getGithubData(val: string): Observable<OwnGithubSearchOutput> {
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
