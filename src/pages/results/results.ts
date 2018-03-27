import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  searchResults = [];
  showResults:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchResults = this.navParams.get('searchResults');
  }

  ionViewWillEnter(){
    console.log(this.searchResults[0].error);
    if(this.searchResults[0].error){
      this.showResults = false;
    }
    else
      this.showResults = true;
  }

  lyricsSearch(artistResult, songResult){
    this.navCtrl.push("LyricsPage", { artist: artistResult, song: songResult });
  }

  search(){
    this.navCtrl.popToRoot();
  }
}
