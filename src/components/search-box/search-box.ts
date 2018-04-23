import { Component, Output, EventEmitter } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';


@Component({
  selector: 'search-box',
  templateUrl: 'search-box.html'
})
export class SearchBoxComponent {

  @Output('error') 
  error : EventEmitter <String> = new EventEmitter <String> ();
  constructor(public loadingCtrl: LoadingController, public searchProvider: SearchProvider, public navCtrl: NavController) {
  }

  //Sends a string value to the searchProvider and subscribes.
  //If results are returned then it pushes the data to he results page
  //Else emits an error.
  searchSongs(searchTerm){
    let loading = this.loadingCtrl.create({content: 'Looking for them good good jams, my dude...'});
    loading.present();
    this.searchProvider.searchSong(searchTerm.value.trim()).subscribe( 
      (res) => {
        if(res){
          setTimeout(function(){
            loading.dismiss();
          }, 500)
          this.navCtrl.push('ResultsPage', {results : res});
        }
        else{
          this.error.emit(`No search results found for ${searchTerm.value} =( `);
          loading.dismiss();
        }
      });
  }
}
