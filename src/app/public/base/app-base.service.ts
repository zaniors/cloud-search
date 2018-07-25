import {of} from 'rxjs';
import { environment } from '../../../environments/environment';

export abstract class AppBaseService {
    private remoteUrl = environment.appconfig.remoteUrl;

    protected getFullUrl(url: string) {
        return this.remoteUrl + url;
    }

    protected handleResponse(response) {
        // do something
        return of(response);
    }

    protected handleError(error) {
        // do something with error
        return of(error);
    }
}
