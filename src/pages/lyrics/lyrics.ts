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
  artist:string = "some singer or band or something";
  song:string = "Some song";
  lyricsFound;
  constructor(public navCtrl: NavController, public navParams: NavParams, public lyrics: LyricsProvider, public loadingCtrl: LoadingController) {
    if(navParams.get("artist")){
      this.artist = navParams.get("artist");
      this.song = navParams.get("song");
      this.getSongLyrics();
      this.lyricsFound = true;
    }
    else{
      this.lyricsFound = false;
    }
  }


  //Gets the lyrics of a the given song.
  //If no lyrics are found displays an error
  getSongLyrics(){
    let loading = this.loadingCtrl.create({content: 'Translating the music bits into word bits or whatever...'});
    loading.present();
    this.lyrics.getLyrics(this.artist, this.song).subscribe(
      (res)=>{  
        this.songLyrics = res;
        this.lyricsFound = true;
        setTimeout(function(){loading.dismiss();}, 1500);
      }, 
      (err)=> {
        this.lyricsFound = false;
        this.songLyrics = "Not Found :-("
        setTimeout(function(){loading.dismiss();}, 1500);
      }
    );
  }

  //Back to search
  search(){
    this.navCtrl.popToRoot();
  }
}