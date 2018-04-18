import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public searchProvider: SearchProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  searchSongs(searchTerm){
    let searchTrimmed = searchTerm.value.trim();
    let loading = this.loadingCtrl.create({content: 'Looking for them good good jams, my dude...'});
    loading.present();
    this.searchProvider.searchSong(searchTrimmed).subscribe( 
      (res) => {
        if(res){
          setTimeout(function(){
            loading.dismiss();
          }, 2000)
          this.navCtrl.push('ResultsPage', {results : res});
        }
        else{
          loading.dismiss();
          this.showError("No Results Found =(");
        }
      });
  }
  
  showError(errorMsg: string){
    let toast = this.toastCtrl.create({
      message: errorMsg,
      duration: 3000,
      position: 'Top'
    });
    toast.present();
  }
}
