import { NgModule } from '@angular/core';
import { CloudMusicComponent } from './cloud-music.component';
import { CloudMusicRoutingModule } from './cloud-music.routing';
import { PublicModule } from '../public/public.module';
import { MaterialModule } from '../shared/materail.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    PublicModule,
    CommonModule,
    MaterialModule,
    CloudMusicRoutingModule,
  ],
  exports: [
  ],
  declarations: [CloudMusicComponent]
})
export class CloudMusicModule { }
