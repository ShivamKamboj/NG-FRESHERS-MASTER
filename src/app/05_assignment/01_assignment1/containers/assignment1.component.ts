import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  userText:string;
  placeHolder:any='Enter Text';

  constructor(){
    console.log("Its working");
  }

  onKey(text){
    this.userText= text;
  }

  onFocusIn(){
    this.placeHolder= "Press enter to display";
  }

  onFocusOut(){
    this.placeHolder= "Enter text";
  }

}
