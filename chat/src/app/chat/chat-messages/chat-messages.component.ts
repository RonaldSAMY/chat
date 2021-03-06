
import {FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit,Input } from '@angular/core';

import { ChatUserList} from '../chat-user-list.model';
import { ChatMessage } from './chat-message.model';
import { ChatConversation } from '../chat-conversation.model';

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
  @Input() chaterConversations:Array<ChatConversation>;

  typemsg:String ="yooo";
  msg:any;
  constructor(fb:FormBuilder) { 
    this.messageFormGroup = fb.group({
      'message':''
    });
  }
  
  ngOnInit() {
    console.log(this.chaterList.selectedUser);
    console.log(this.chaterList.currentConversation);
    this.msg = this.chaterList.currentConversation.getConversation();
    this.socket.on('message',(data)=>{
      var msg:ChatMessage = Object.assign(new ChatMessage(),data);
      var conversation:ChatConversation = this.chaterConversations[msg.from.sessionId.toString()];
      conversation.addToConversation(msg);
     // this.chatConver.addToConversation(msg);
      this.msg = this.chaterList.currentConversation.getConversation();
      console.log('got messages thank you');
    });
    
  }

  checkMessage(msg:ChatMessage){
    if(msg.from.sessionId == this.chaterList.currentUser.sessionId)
    {
      console.log('checkuser : true '+ this.chaterList.currentUser.sessionId);
      return true;//current user send msg
      
    }
    console.log('checkuser : false '+ this.chaterList.currentUser.sessionId);
    return false;//destination user send message
  }


  onSubmit(val)
  {
    var chatMsg:ChatMessage = new ChatMessage();
    chatMsg.message = val.message;
    chatMsg.to = this.chaterList.selectedUser;
    chatMsg.from = this.chaterList.currentUser;
    var conversation:ChatConversation = this.chaterConversations[this.chaterList.selectedUser.sessionId.toString()];
    conversation.addToConversation(chatMsg);
    this.socket.emit(
      'msg',chatMsg
    );
    this.msg = this.chaterList.currentConversation.getConversation();
    this.typemsg = "";
  }

}
