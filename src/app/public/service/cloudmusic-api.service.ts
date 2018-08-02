import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { EventBusService } from './bus-event.service';
import { ServiceApi } from '../enum/service-api.enum';
import { HttpClient } from '@angular/common/http';
import { finalize, switchMap } from 'rxjs/operators';
import { CloudMusicSongItem, OwnCloudMusicItem, OwnCloudMusicOutput, CloudMusicSong } from '../model/cloud-music.model';

@Injectable({
    providedIn: 'root'
})
export class CloudMusicApiService {
    type: string;
    constructor(
        private httpClient: HttpClient,
        private eventBusService: EventBusService,
    ) { }

    public getCloudMusicData(val: string): Observable<OwnCloudMusicOutput> {
        this.eventBusService.progressLoading.next(true);
        const URL = `${ServiceApi.CloudMusicSong}${val}`;
        return this.httpClient.get<OwnCloudMusicItem[]>(URL).pipe(
            finalize(() => this.eventBusService.progressLoading.next(false)),
            switchMap((res: CloudMusicSong) => {
                if (!res.result) {
                    return of([]);
                }
                return of(this.dataTransformObject(res.result.songs));
            })
        );
    }

    private dataTransformObject(res: CloudMusicSongItem[]): OwnCloudMusicOutput {
        const ownGithubSearchOutput: OwnCloudMusicOutput = new OwnCloudMusicOutput();
        const musicItems: OwnCloudMusicItem[] = [];
        if (!res || res.length <= 0) {
            return;
        }
        res.forEach((e, i) => {
            const musicItem = new OwnCloudMusicItem();
            musicItem.mvId = e.mv;
            musicItem.songId = e.id;
            musicItem.songName = e.name;
            musicItem.picUrl = e.al.picUrl;
            musicItems.push(musicItem);
        });
        ownGithubSearchOutput.items = musicItems;
        ownGithubSearchOutput.type = this.type;
        return ownGithubSearchOutput;
    }
}
