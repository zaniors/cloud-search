import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchComponent } from './github-search.component';
import { GithubSearchRoutingModule } from './github-search.routing';
import { PublicModule } from '../public/public.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PublicModule,
    SharedModule,
    GithubSearchRoutingModule,
  ],
  exports: [
  ],
  declarations: [GithubSearchComponent]
})
export class GithubSearchModule { }
