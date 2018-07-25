import {NgModule} from '@angular/core';
import { AppCommonModule } from './common/common.module';

@NgModule({
    imports: [
        AppCommonModule,
    ],
    declarations: [],
    exports: [
        AppCommonModule,
    ]
})
export class PublicModule {
}
