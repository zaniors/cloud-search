import { Injectable } from '@angular/core';
import { OwnGithubSearchOutput } from '../model/github-item.model';
import { Subject } from 'rxjs';
import { OwnCloudMusicOutput } from '../model/cloud-music.model';

@Injectable({
    providedIn: 'root'
})
export class EventBusService {

    public searchResult: Subject<OwnGithubSearchOutput | OwnCloudMusicOutput> = new Subject<OwnGithubSearchOutput | OwnCloudMusicOutput>();
    public progressLoading: Subject<boolean> = new Subject<boolean>();
    constructor() { }

}
