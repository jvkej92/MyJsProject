import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { BackButton } from '../../components/back-button/back-button';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  searchInfo:Object;
  backButton: BackButton;
  searchResults:Array<Object>;
  constructor (public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, 
    public searchProvider: SearchProvider, public modalCtrl:ModalController){
    this.searchResults = this.navParams.get('results');
    this.backButton = new BackButton('Back To Search');
  }

  //Goes back to search
  search(){
    this.navCtrl.popToRoot();
  }
}
