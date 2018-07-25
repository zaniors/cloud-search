import { Injector } from '@angular/core';
import { AppBaseService } from './app-base.service';

export abstract class AbstractBaseComponent extends AppBaseService {

    constructor(injector: Injector) {
        super();
    }

}
