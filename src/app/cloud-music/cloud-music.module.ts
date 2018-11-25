import { NgModule } from '@angular/core';
import { CloudMusicComponent } from './cloud-music.component';
import { CloudMusicRoutingModule } from './cloud-music.routing';
import { PublicModule } from '../public/public.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PublicModule,
    SharedModule,
    CloudMusicRoutingModule,
  ],
  exports: [
  ],
  declarations: [CloudMusicComponent]
})
export class CloudMusicModule { }
