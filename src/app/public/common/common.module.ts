import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../../shared/materail.module';
import { SharedModule } from '../../shared/shared.module';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { RoundPipe } from '../pipe/round.pipe';

@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
    ],
    declarations: [
        SearchComponent,
        CardItemComponent,
        CardListComponent,
        RoundPipe,
    ],
    exports: [
        SearchComponent,
        CardItemComponent,
        CardListComponent,
        RoundPipe,
    ],
})
export class AppCommonModule { }
