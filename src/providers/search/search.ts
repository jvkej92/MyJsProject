import {  HttpClient } from '@angular/common/http';
import {   Injectable } from '@angular/core';
import {   Observable } from 'rxjs/Observable';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  apiBase = "https://api.lyrics.ovh/";

  constructor(public http: HttpClient) {}


  //Makes an api call and returns the formated results in an array
  //If no results are found the function returns false
  searchSong(searchTerm: string): Observable < any > {
    let searchResults: Array < any > = [];
    let results: Object;
    return this.http.get(this.apiBase + "/suggest/" + searchTerm).map((response: Response) => {
      if (response["data"].length > 0) {
        response["data"].forEach(song => {
          let result = {
            id: song.album.id,
            song: song.title_short,
            artist: song.artist.name,
            albumCover: song.album.cover_big,
          }
          searchResults.push(result);
        });
        results = {
          searchResults : searchResults,
          searchInfo : {
            searchTerm: searchTerm,
            nextSearch: response["next"]
          }
        }
        return results;
      } 
      else {
        return false;
      }
    });
  }

  getNext(link: string): Observable < object > {
    return this.http.get(link).map((suggestions: Response) => {
      return suggestions;
    });
  }
}
