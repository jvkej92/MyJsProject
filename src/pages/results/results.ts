import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  showResults:boolean;
  searchResults = [];
  searchTerm:string;
  nextSearch:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public searchProvider: SearchProvider) {
    this.searchResults = this.navParams.get('searchResults');
    this.searchTerm = this.navParams.get('searchTerm');
    this.nextSearch = this.navParams.get('nextSearch');
    this.checkForResults();
  }

  checkForResults(){
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

  getNext(){
    let loading = this.loadingCtrl.create({content: 'I mean.. okay I\'ll try and find some more...'});
    loading.present();
    this.searchProvider.getNext(this.nextSearch, this.searchTerm).subscribe(
      (res) => {
        loading.dismiss();
        if (res["data"].length > 0){
          res["data"].forEach(song => {
            let result = {
              song: song.title_short,
              artist: song.artist.name
            }
            this.searchResults.push(result);
          });
        }
        else 
          this.searchResults.push({ error : "That's all folks!"});
      });
  }

  search(){
    this.navCtrl.popToRoot();
  }
}
