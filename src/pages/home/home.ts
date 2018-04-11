import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import 'rxjs/add/operator/map'
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchResults:Array<any> = [];
  nextSearch;
  constructor(public navCtrl: NavController, public search: SearchProvider, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {

  }

  //Clears the array to prevent weird search glitch
  ionViewDidLeave(){
    this.searchResults = [];
  }


  // This function creates an api call using the entered search term. Then takes the results and assign the value of the objects to the
  // HomePage property searchResults. On failure it pushes a string with an error message  
  getSuggestions(searchTerm){
    let searchTrimmed = searchTerm.value.trim();
    let loading = this.loadingCtrl.create({content: 'Looking for them good good jams, my dude...'});
    loading.present();
    this.search.getSuggestions(searchTrimmed).subscribe(
      (res) => {

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
        this.navCtrl.push('ResultsPage', { searchResults: this.searchResults, nextSearch: this.nextSearch, searchTerm: searchTerm.value });
        });
  }

  showAbout() {
    let modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }
}
