import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../../shared/materail.module';

@NgModule({
    imports: [
        MaterialModule,
    ],
    declarations: [
        SearchComponent,
    ],
    exports: [
        SearchComponent,
    ],
})
export class AppCommonModule { }
