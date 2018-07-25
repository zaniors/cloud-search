import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CloudMusicComponent } from './cloud-music.component';

const routes: Routes = [
    { path: '', component: CloudMusicComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CloudMusicRoutingModule {}
