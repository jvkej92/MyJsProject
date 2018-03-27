import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  searchResults;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchResults = this.navParams.get('searchResults');
  }
  ionViewWillEnter() {
  }

  lyricsSearch(artistResult, songResult){
    this.navCtrl.push("LyricsPage", { artist: artistResult, song: songResult });
  }
}
