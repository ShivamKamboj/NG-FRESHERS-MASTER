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

  showData(text){
    this.userText = text.value;
  }

  onFocusIn(){
    this.placeHolder= "Type anyting to display";
  }

  onFocusOut(){
    this.placeHolder= "Enter text";
  }

}
