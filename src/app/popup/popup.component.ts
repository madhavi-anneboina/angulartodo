import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  show = false

  constructor(){

  }
  openpopup(){
    this.show = true
  }
  closepopup(){
    this.show = false
  }
  closeoverlay(e:any){
    // if(e.target.classList.contains('overlay')){
    //   this.show = false
    // }
   this.show = false 
  }
}
