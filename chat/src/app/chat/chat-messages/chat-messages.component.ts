import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  messageFormGroup:FormGroup;
  showForm:boolean = false;

  messages : Array<any> = [];
  typemsg:String ="yooo";
  constructor(fb:FormBuilder) { 
    this.messageFormGroup = fb.group({
      'message':''
    });
  }

  ngOnInit() {
  }

  onSubmit(val)
  {
    this.messages.push(val.message);
    this.typemsg = '';
    console.log(val.message);
  }

}
