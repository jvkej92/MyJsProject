import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LyricsPage } from './lyrics';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LyricsPage
  ],
  imports: [
    IonicPageModule.forChild(LyricsPage),
    ComponentsModule
  ],
})
export class LyricsPageModule {}
