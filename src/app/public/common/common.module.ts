import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../../shared/shared.module';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { RoundPipe } from '../pipe/round.pipe';
import { ProgressBusyComponent } from './progress-busy/progress-busy.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        SearchComponent,
        CardItemComponent,
        CardListComponent,
        ProgressBusyComponent,
        PlayerComponent,
        RoundPipe,
    ],
    exports: [
        SearchComponent,
        CardItemComponent,
        CardListComponent,
        ProgressBusyComponent,
        PlayerComponent,
        RoundPipe,
    ],
})
export class AppCommonModule { }
