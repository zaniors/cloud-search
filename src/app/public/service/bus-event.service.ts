import { Injectable } from '@angular/core';
import { OwnGithubItem } from '../model/github-item.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventBusService {

    public githubRepoSearch: Subject<OwnGithubItem[]> = new Subject<OwnGithubItem[]>();
    constructor() { }

}
