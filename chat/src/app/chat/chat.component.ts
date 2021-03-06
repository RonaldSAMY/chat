import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import { ChatService } from './chat.service';
import { ChatUser } from './chat-users/chat-user.model';
import { ChatUserList } from './chat-user-list.model';
import { ChatConversation } from './chat-conversation.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  Username:String = "Ronald";
  myGroup:FormGroup;
  showForm:boolean = true;
  socket:object;

  selectedUserForMessage:ChatUser = new ChatUser();
  chaterList:ChatUserList = new ChatUserList();
  chaterConversations:Array<ChatConversation> = [];

  constructor(fb:FormBuilder, public cs:ChatService) { 
    this.myGroup = fb.group({
      'name':{}
    });
  }

  ngOnInit() {
    this.cs.getUser().then(
      (data) => {
        console.log(data);
        this.showForm = !data.user;
      }
    );
  }

  onSubmit(val){
    this.cs.setUser(val.name).then(
      (data) => {
        this.showForm = !data.user;
      }
    );
  }

  selectedUser(user)
  {
    this.selectedUserForMessage = user;
    //this.chaterConversations.dstUser = user;
    console.log(user);
  }

  socketGet(e){
    //console.log(e);
    this.socket = e;
    //e.emit('msg','hello world from client');
  }

}
