import { ChatMessage } from "./chat-messages/chat-message.model";
import { ChatUser} from "./chat-users/chat-user.model";

export class ChatConversation {
    private conversation:Array<any> = [];
    public constructor(public dstUser:ChatUser) {}

    public addToConversation(msg:ChatMessage)
    {
        if(typeof(this.dstUser.sessionId) == 'undefined'){
            return;
        }

        this.conversation.push(msg);
        return this;
        //console.log(this.dstUser.sessionId);
    }

    public getConversation()
    {
        console.log(this.conversation);
        return this.conversation;
    }
}