
import {FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit,Input } from '@angular/core';

import { ChatUserList} from '../chat-user-list.model';
@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  messageFormGroup:FormGroup;
  showForm:boolean = false;
  @Input() selectedUser;
  @Input() chaterList:ChatUserList;
  @Input() socket;
  messages : Array<any> = [];
  typemsg:String ="yooo";
  constructor(fb:FormBuilder) { 
    this.messageFormGroup = fb.group({
      'message':''
    });
  }
  

  ngOnInit() {
    console.log(this.chaterList.selectedUser);
    this.socket.on('mesg',(data)=>{
      console.log(data);
    });
    
  }
  /*

<h2>Slected User : {{selectedUserForMessage.name}} -- {{selectedUserForMessage.socketId}}</h2>
  */

  onSubmit(val)
  {
    this.messages.push(val.message);
    this.typemsg = '';
    //console.log(val.message);
    console.log(this.socket);
    this.socket.emit(
      'msg','my message'
    )
    
  }

}
