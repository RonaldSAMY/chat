import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatUsersComponent } from './chat/chat-users/chat-users.component';
import { ChatMessagesComponent } from './chat/chat-messages/chat-messages.component';
import { ChatService } from './chat/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatUsersComponent,
    ChatMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
