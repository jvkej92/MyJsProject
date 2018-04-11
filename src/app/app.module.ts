import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';
import { LyricsProvider } from '../providers/lyrics/lyrics';
import { SearchProvider } from '../providers/search/search';
import { AboutPage } from '../pages/about/about';
import { SongInfoPage } from '../pages/song-info/song-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    SongInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    SongInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LyricsProvider,
    SearchProvider
  ]
})
export class AppModule {}
