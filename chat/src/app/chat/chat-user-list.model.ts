import { ChatUser } from './chat-users/chat-user.model';
import { ChatConversation } from './chat-conversation.model';

export class ChatUserList {
    chatUserList:Array<ChatUser> = [];
    selectedUser:ChatUser = new ChatUser();
    currentUser:ChatUser = new ChatUser();
    currentConversation:ChatConversation = new ChatConversation(this.selectedUser);
}
