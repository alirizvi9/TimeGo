import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs";


export class TranslateCustomLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
    if (lang=="ru"){
        return Observable.of([]);
    }
    return Observable.of([]);
  }
}