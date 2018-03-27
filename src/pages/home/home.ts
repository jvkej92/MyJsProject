import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songLyrics;
  searchTerm:String = "";
  searchResults:Array<any> = [];
  constructor(public navCtrl: NavController, public search: SearchProvider, public loadingCtrl: LoadingController) {

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
        loading.dismiss();
        if (res["data"].length > 0){
        let results = res["data"];
        
          for(let i = 0; i <= 10; i++ ){
            let result = {
              song: results[i].title_short,
              artist: results[i].artist.name
            }
            this.searchResults.push(result);
          }
        }
        else this.searchResults.push({ error : "No Songs Found =("});
        this.navCtrl.push('ResultsPage', { searchResults : this.searchResults});
        });
  }
}
