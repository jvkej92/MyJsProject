import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  apiBase = "https://api.lyrics.ovh/";

  constructor(public http: HttpClient) {
  }

  getSuggestions(searchTerm:string): Observable<object>{
    return this.http.get(this.apiBase + "/suggest/" + searchTerm).map((suggestions: Response) =>{
      return suggestions;
    });
  }

  getNext(nextUrl:string, searchTerm:string): Observable<object>{
    nextUrl.replace('undefined', searchTerm);
    return this.http.get(nextUrl).map((suggestions: Response) =>{
      return suggestions;
    });
  }
}
