import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
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
  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    public searchProvider: SearchProvider, 
    public modalCtrl:ModalController
  ) {
      this.searchResults = this.navParams.get('searchResults');
      this.searchTerm = this.navParams.get('searchTerm');
      this.nextSearch = this.navParams.get('nextSearch');
      this.showResults = this.checkForResults();
  }

  //Triggered by constructor
  //Checks to see if search returns any results 
  //Returns true if results are found
  checkForResults(){
    if(this.searchResults[0].error){
      return false;
    }
    else
      return true;
  }

  //Take's the song and searches for lyrics based on the song title and artist
  lyricsSearch(artistResult, songResult){
    this.navCtrl.push("LyricsPage", { artist: artistResult, song: songResult });
  }

  //Goes back to search
  search(){
    this.navCtrl.popToRoot();
  }

  //Doesn't work because of CORS =(
  loadMore(){
    let loading = this.loadingCtrl.create({content: 'Finding for more songs'});
    loading.present();
    this.searchProvider.getNext(this.nextSearch).subscribe(
      res => {
        if (res["data"].length > 0){
          res["data"].forEach(song => {
            let result = {
              song: song.title_short,
              artist: song.artist.name,
              albumCover: song.album.cover_big
            }
            this.searchResults.push(result);
          });
          this.nextSearch = res["next"];
        }
        else this.searchResults.push({ error : "No Songs Found =("});
        
        setTimeout(function(){loading.dismiss();}, 1000);
      }
    );
  }
}
