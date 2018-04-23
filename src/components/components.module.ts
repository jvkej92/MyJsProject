import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result';
import { IonicModule } from 'ionic-angular';
import { SearchBoxComponent } from './search-box/search-box';
import { LyricsComponent } from './lyrics/lyrics';
import { BackButtonComponent } from './back-button/back-button';
@NgModule({
	declarations: [
		SearchResultComponent,
		SearchBoxComponent,
    LyricsComponent,
    BackButtonComponent
	],
	imports: [
		CommonModule, 
		IonicModule],
	exports: [
		SearchResultComponent, 
		SearchBoxComponent,
    LyricsComponent,
    BackButtonComponent
    ]
})
export class ComponentsModule {}
