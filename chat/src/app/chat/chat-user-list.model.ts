import { ChatUser } from './chat-users/chat-user.model';

export class ChatUserList {
    chatUserList:Array<ChatUser> = [];
    selectedUser:ChatUser = new ChatUser();
}
