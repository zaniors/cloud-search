import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: 'cloudmusic',
        loadChildren: '../app/cloud-music/cloud-music.module#CloudMusicModule'
    },
    {
        path: 'githubsearch',
        loadChildren: '../app/github-search/github-search.module#GithubSearchModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
