import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the BackButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-button',
  templateUrl: 'back-button.html'
})
export class BackButtonComponent {
  @Input() public backButton : BackButton;
  @Output('back') back : EventEmitter <any> = new EventEmitter <any> ();
  constructor() {
  }

  goBack(){
    this.back.emit();
  }
}

export class BackButton{
  btnText: string;
  constructor(btnText:string){
    this.btnText = btnText;
  }
}