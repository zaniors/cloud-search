import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GithubSearchComponent } from './github-search.component';

const routes: Routes = [
    { path: '', component: GithubSearchComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GithubSearchRoutingModule {}
