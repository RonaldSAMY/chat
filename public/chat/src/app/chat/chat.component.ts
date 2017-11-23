import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  Username:String = "Ronald";
  myGroup:FormGroup;
  constructor(fb:FormBuilder) { 
    this.myGroup = fb.group({
      'name':{}
    });
  }

  ngOnInit() {
  }

}
