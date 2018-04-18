import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.html'
})
export class SearchResultComponent {
  @Input() public song:String;
  @Input() public artist:String;
  @Input() public albumCover:String;
  constructor(public navCtrl: NavController) {
  }

  //Take's the song and searches for lyrics based on the song title and artist
  lyricsSearch(artistResult, songResult){
    this.navCtrl.push("LyricsPage", { artist: artistResult, song: songResult });
  }
}



