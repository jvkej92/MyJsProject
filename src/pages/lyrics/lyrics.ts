import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LyricsProvider } from '../../providers/lyrics/lyrics';

@IonicPage()
@Component({
  selector: 'page-lyrics',
  templateUrl: 'lyrics.html',
})
export class LyricsPage {

  songLyrics;
  artist;
  song;
  constructor(public navCtrl: NavController, public navParams: NavParams, public lyrics: LyricsProvider, public loadingCtrl: LoadingController) {
    this.artist = navParams.get("artist");
    this.song = navParams.get("song");
    this.getSongLyrics();
  }

  getSongLyrics(){
    let loading = this.loadingCtrl.create({content: 'Translating the music bits into word bits or whatever...'});
    loading.present();
    this.lyrics.getLyrics(this.artist, this.song).subscribe(
      (res)=>{  
        this.songLyrics = res;
        setTimeout(function(){loading.dismiss();}, 1000);
      }, 
      (err)=> {
        this.songLyrics = "Not Found :-("
        setTimeout(function(){loading.dismiss();}, 1000);
      }
    );
  }
}