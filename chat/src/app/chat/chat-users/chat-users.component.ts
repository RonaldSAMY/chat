import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';
import { ChatService } from '../chat.service';
import * as io from 'socket.io-client';

import { ChatUser } from './chat-user.model';
import { ChatUserList} from '../chat-user-list.model';

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.css']
})
export class ChatUsersComponent implements OnInit {
  socket;
  currentUser:ChatUser;

  @Input() chaterList:ChatUserList;
  @Output() getSocket = new EventEmitter();
  
  constructor(public chatS:ChatService) {
    this.socket = io();

    

    this.chatS.getUser().then(
      (user)=>{
        this.currentUser = Object.assign(new ChatUser(),user.currentUser);
        console.log(this.currentUser);
      }
    );

    this.socket.on('user', (data) => {
      this.chaterList.chatUserList = [];
      var val = JSON.parse(data);
      var keys = Object.values(val);
      keys.forEach((key)=>{
          var u:ChatUser = Object.assign(new ChatUser(),key);
          if(this.currentUser.sessionId != u.sessionId){
            //this.usersList.push(u);
            this.chaterList.chatUserList.push(u);
          }

          if(typeof(this.chaterList.selectedUser.sessionId) != 'undefined'){
            if(this.chaterList.selectedUser.sessionId == u.sessionId){
              this.chaterList.selectedUser = u;
            }
          }
      });
    });

    this.socket.emit('mesg','hello world');
  }

  ngOnInit() {
    this.getSocket.emit(this.socket);
  }

  logout()
  {
    return this.chatS.logout();
  }

  seslctedUser(user:ChatUser){
    this.chaterList.selectedUser = user;
    //this.selectedUserForMessage = user;
  }

}
