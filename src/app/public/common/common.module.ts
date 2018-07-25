import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../../shared/materail.module';
import { SharedModule } from '../../shared/shared.module';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
    ],
    declarations: [
        SearchComponent,
        CardItemComponent,
        CardListComponent,
    ],
    exports: [
        SearchComponent,
        CardListComponent,
    ],
})
export class AppCommonModule { }
