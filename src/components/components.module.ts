import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [SearchResultComponent],
	imports: [CommonModule, IonicModule],
	exports: [SearchResultComponent]
})
export class ComponentsModule {}
