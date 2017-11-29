import { ChatUser } from "../chat-users/chat-user.model";

export class ChatMessage {
    to:ChatUser;
    from:ChatUser;
    message:String;
}