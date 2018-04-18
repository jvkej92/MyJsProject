import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  searchInfo:Object;
  searchResults:Array<Object>;
  constructor (public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, 
    public searchProvider: SearchProvider, public modalCtrl:ModalController){
    this.searchResults = this.navParams.get('results');
    console.log(this.searchResults);
  }

  //Goes back to search
  search(){
    this.navCtrl.popToRoot();
  }
}
