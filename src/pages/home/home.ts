import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public searchProvider: SearchProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  //Takes a string value and displays it in an ionic toast
  showError(errorMsg:string){
    let toast = this.toastCtrl.create({
      message: errorMsg,
      duration: 3000,
      position: 'Top',
      showCloseButton: true,
      dismissOnPageChange: true
    });
    toast.present();
  }
}
