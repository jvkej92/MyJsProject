import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LyricsProvider {

  apiBase = "https://api.lyrics.ovh/v1/";

  constructor(public http: HttpClient) {

  }

  getLyrics(artist:string, song:string): Observable<any>{
     return this.http.get(this.apiBase + encodeURIComponent(artist) + "/" + encodeURIComponent(song)).map((response: Response) =>{
        return  response["lyrics"];
    });
  }
}