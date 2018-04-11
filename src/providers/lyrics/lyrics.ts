import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchProvider } from '../search/search';

@Injectable()
export class LyricsProvider {

  apiBase = "https://api.lyrics.ovh/v1/";
  deezerApi = "https://api.deezer.com/"

  constructor(public http: HttpClient, public search: SearchProvider) {

  }

  getLyrics(artist:string, song:string): Observable<any>{
     return this.http.get(this.apiBase + encodeURIComponent(artist) + "/" + encodeURIComponent(song)).map((response: Response) =>{
        return  response["lyrics"];
    });
  }

}