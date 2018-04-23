import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { LyricsProvider } from '../../providers/lyrics/lyrics';

/**
 * Generated class for the LyricsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lyrics',
  templateUrl: 'lyrics.html'
})
export class LyricsComponent {

  @Input() public lyrics: Lyrics;
  constructor() {
  }
}
export class Lyrics{
  @Output('error') error : EventEmitter <string> = new EventEmitter <string> ();
  song: string;
  artist: string;
  songLyrics: String;
  constructor(public loadingCtrl: LoadingController, public lyrics: LyricsProvider, song: string, artist: string){
    this.song = song;
    this.artist = artist;
    this.getSongLyrics();
  }

  //Gets the lyrics of a the given song.
  //If no lyrics are found output an error event
  public getSongLyrics(){
    this.lyrics.getLyrics(this.artist, this.song).subscribe(
      (res)=>{  
        this.songLyrics = res;   
      }, 
      (err)=> {
        debugger;
        this.error.emit('We couldn\'t find the lyrics to that song, but our collection of lyrics is constantly growing so check back later!');
      }
    );
  }
}
