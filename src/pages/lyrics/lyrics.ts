import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LyricsProvider } from '../../providers/lyrics/lyrics';
import { Lyrics } from '../../components/lyrics/lyrics';
import { BackButton } from '../../components/back-button/back-button';

@IonicPage()
@Component({
  selector: 'page-lyrics',
  templateUrl: 'lyrics.html',
})
export class LyricsPage {

  songLyrics: Lyrics;
  backButton: BackButton;
  artist:string = "some singer or band or something";
  song:string = "Some song";
  constructor(public navCtrl: NavController, public navParams: NavParams, public lyrics: LyricsProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController ) {
    if(navParams.get("artist")){
      this.artist = navParams.get("artist");
      this.song = navParams.get("song");
      this.songLyrics = new Lyrics(this.loadingCtrl, this.lyrics, this.song, this.artist);      
    }
    this.backButton = new BackButton('Back to Search');
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

  search(){
    this.navCtrl.popToRoot();
  }

}