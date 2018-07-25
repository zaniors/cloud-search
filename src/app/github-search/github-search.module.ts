import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchComponent } from './github-search.component';
import { GithubSearchRoutingModule } from './github-search.routing';
import { MaterialModule } from '../shared/materail.module';
import { PublicModule } from '../public/public.module';

@NgModule({
  imports: [
    PublicModule,
    CommonModule,
    MaterialModule,
    GithubSearchRoutingModule,
  ],
  exports: [
  ],
  declarations: [GithubSearchComponent]
})
export class GithubSearchModule { }
