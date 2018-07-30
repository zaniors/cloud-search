import { Injectable } from '@angular/core';
import { OwnGithubSearchOutput } from '../model/github-item.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventBusService {

    public githubRepoSearch: Subject<OwnGithubSearchOutput> = new Subject<OwnGithubSearchOutput>();
    public progressLoading: Subject<boolean> = new Subject<boolean>();
    constructor() { }

}
