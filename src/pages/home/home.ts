import { Component, ViewEncapsulation } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  encapsulation: ViewEncapsulation.None, 
})
export class HomePage {
   public styleX:any={ 'login__submit': true, 'processing': false ,'success ':false};

  constructor(public navCtrl: NavController) {

  }


  loginChek(){
   // alert('Hello');
    //this.styleX=true;
    setTimeout(() => {
      this.styleX =  { 'login__submit': false, 'processing': true,'success ':false };
      setTimeout(() => {
        this.styleX =  { 'login__submit': false, 'processing': false,'success ':true };
      },100);
  }, 100)
  }

}
